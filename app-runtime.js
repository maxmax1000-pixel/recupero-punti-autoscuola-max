  function statementHTML(i,text,correct){
    const ans=state.quick[i];
    let result='';
    if(ans!==undefined){ result=`<div class="vf-result ${ans===correct?'ok':'no'}">${ans===correct?'Corretto':'Da rivedere'} · risposta: ${correct?'VERO':'FALSO'}</div>`; }
    return `<div class="statement"><div><div class="txt">${i+1}. ${text}</div>${result}</div><div class="vf"><button data-vf="${i}:true" class="${ans===true?'selected true':''}">V</button><button data-vf="${i}:false" class="${ans===false?'selected false':''}">F</button></div></div>`;
  }

  const days = [
    ['Giorno 1','Segnaletica + comportamento','1 h segnaletica · 1 h norme di comportamento',true],
    ['Giorno 2','Decisioni sulla strada','2 h norme di comportamento',false],
    ['Giorno 3','Un secondo prima','1 h comportamento · 1 h cause incidenti',false],
    ['Giorno 4','Il conducente','1 h cause incidenti · 1 h stato psicofisico',false],
    ['Giorno 5','Alcol, droghe e conseguenze','1 h stato psicofisico · 1 h sanzioni',false],
    ['Giorno 6','Dopo l’incidente + veicolo','1 h responsabilità/soccorso · 1 h sicurezza veicolo',false]
  ];

  let audienceFitObserver=null;
  let audienceFitFrame=0;

  function fitAudienceSlide(){
    if(!isAudience || state.screen!=='lesson')return;
    const el=document.getElementById('slide');
    const inner=el?.querySelector('.audience-fit-inner');
    if(!el || !inner)return;

    cancelAnimationFrame(audienceFitFrame);
    audienceFitFrame=requestAnimationFrame(()=>{
      inner.style.transform='none';
      inner.style.marginTop='0px';
      inner.style.width='100%';
      el.style.overflow='hidden';

      const style=getComputedStyle(el);
      const px=v=>Number.parseFloat(v)||0;
      const availableWidth=Math.max(1,el.clientWidth-px(style.paddingLeft)-px(style.paddingRight));
      const availableHeight=Math.max(1,el.clientHeight-px(style.paddingTop)-px(style.paddingBottom));
      const naturalWidth=Math.max(1,inner.scrollWidth);
      const naturalHeight=Math.max(1,inner.scrollHeight);
      const scale=Math.min(1,availableWidth/naturalWidth,availableHeight/naturalHeight);

      inner.style.transformOrigin='top center';
      inner.style.transform=`scale(${scale})`;
      inner.style.marginTop=`${Math.max(0,(availableHeight-naturalHeight*scale)/2)}px`;
      inner.dataset.fitScale=scale.toFixed(4);
    });
  }

  function scheduleAudienceFit(){
    if(!isAudience)return;
    requestAnimationFrame(()=>requestAnimationFrame(fitAudienceSlide));
  }

  function observeAudienceFit(){
    if(!isAudience)return;
    if(audienceFitObserver)audienceFitObserver.disconnect();
    const inner=document.querySelector('#slide .audience-fit-inner');
    if(!inner)return;
    audienceFitObserver=new ResizeObserver(scheduleAudienceFit);
    audienceFitObserver.observe(inner);
  }

  function homeHTML(){
    return `<div class="home"><div class="home-intro"><div><div class="kicker">Prototipo operativo</div><h1>Recupero punti<br>interattivo</h1><p class="lead">Sei incontri da due ore. La struttura rispetta il programma ministeriale; il linguaggio è pensato per adulti che guidano già.</p></div><div class="hours-badge"><div class="big">12</div><div class="small">ore totali · 6 giornate</div></div></div>
    <div class="days">${days.map((d,i)=>`<div class="day-card ${d[3]?'active':'locked'}"><div class="daynum">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p><button ${d[3]?'id="startDay1"':''}>${d[3]?'Apri →':'Da costruire'}</button></div>`).join('')}</div>
    <div class="source" style="margin-top:16px">Struttura didattica di riferimento: D.M. 29 luglio 2003, programma dei corsi per recupero di sei punti.</div></div>`;
  }

  function render(skipBroadcast=false){
    const el=document.getElementById('slide');
    if(state.screen==='home'){
      if(audienceFitObserver){audienceFitObserver.disconnect();audienceFitObserver=null}
      el.style.overflow='';
      el.innerHTML=homeHTML();
      document.getElementById('crumb').textContent='Home · Corso da 12 ore';
      document.getElementById('teacherNotes').innerHTML='<strong>Stato del progetto</strong><p>È pronta la prima ora completa. Le altre 11 ore sono ancora da costruire usando questo formato.</p><div class="mini">Obiettivo del prototipo: verificare ritmo, leggibilità e tipo di interazioni prima di produrre decine di contenuti.</div>';
      document.getElementById('slideList').innerHTML='';
      document.getElementById('prevBtn').disabled=true;document.getElementById('nextBtn').disabled=true;
      document.getElementById('progressFill').style.width='0%';document.getElementById('progressLabel').textContent='Home';
      bindHome();
    } else {
      const s=slides[state.slideIndex];
      const slideHtml=s.html();
      el.innerHTML=isAudience?`<div class="audience-fit-inner" style="width:100%;transform-origin:top center">${slideHtml}</div>`:slideHtml;
      document.getElementById('crumb').textContent=`Giorno 1 · Ora 1 · ${s.title}`;
      document.getElementById('teacherNotes').innerHTML=`<strong>${s.title} · ${s.duration}</strong><p>${s.teacher}</p><div class="mini">Tempo stimato del blocco: ${s.duration}</div>`;
      document.getElementById('slideList').innerHTML=slides.map((x,i)=>`<button class="slide-jump ${i===state.slideIndex?'active':''}" data-jump="${i}"><span class="num">${i+1}</span><span><b>${x.title}</b><br><span style="color:var(--muted)">${x.duration}</span></span></button>`).join('');
      document.getElementById('prevBtn').disabled=state.slideIndex===0;
      document.getElementById('nextBtn').disabled=state.slideIndex===slides.length-1;
      document.getElementById('progressFill').style.width=`${((state.slideIndex+1)/slides.length)*100}%`;
      document.getElementById('progressLabel').textContent=`${state.slideIndex+1} / ${slides.length}`;
      bindSlide();
      observeAudienceFit();
      scheduleAudienceFit();
    }
    if(!skipBroadcast && !isAudience) broadcast();
  }

  function bindHome(){
    const b=document.getElementById('startDay1');
    if(b) b.onclick=()=>{state.screen='lesson';state.slideIndex=0;state.revealed=false;state.caseSelection=null;render()};
  }

  function bindSlide(){
    document.querySelectorAll('[data-poll]').forEach(b=>{
      b.onclick=()=>{state.poll[b.dataset.poll]++;render()};
      b.oncontextmenu=e=>{e.preventDefault();state.poll[b.dataset.poll]=Math.max(0,state.poll[b.dataset.poll]-1);render()};
    });
    document.querySelectorAll('[data-case-select]').forEach(b=>b.onclick=()=>{
      if(state.revealed)return;
      state.caseSelection=b.dataset.caseSelect;
      render();
    });
    const caseReveal=document.querySelector('[data-case-reveal]');
    if(caseReveal) caseReveal.onclick=()=>{
      state.revealed=true;
      render();
    };
    document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{
      document.querySelectorAll('[data-answer]').forEach(x=>x.classList.remove('good','bad'));
      b.classList.add(b.dataset.answer==='right'?'good':'bad');
      state.revealed=true; const r=document.getElementById('reveal'); if(r)r.classList.add('visible');scheduleAudienceFit();broadcast();
    });
    const show=document.getElementById('showScene');
    if(show) show.onclick=()=>{
      state.sceneOpen=true; render();
      setTimeout(()=>{state.sceneOpen=false;render();showToast('Tempo! Ora ricostruite la scena.')},5000);
    };
    document.querySelectorAll('[data-vf]').forEach(b=>b.onclick=()=>{
      const [i,v]=b.dataset.vf.split(':');state.quick[+i]=v==='true';render();
    });
    document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{state.slideIndex=+b.dataset.jump;state.revealed=false;state.caseSelection=null;state.sceneOpen=false;render()});
  }

  document.getElementById('prevBtn').onclick=()=>{if(state.screen==='lesson'&&state.slideIndex>0){state.slideIndex--;state.revealed=false;state.caseSelection=null;state.sceneOpen=false;render()}};
  document.getElementById('nextBtn').onclick=()=>{if(state.screen==='lesson'&&state.slideIndex<slides.length-1){state.slideIndex++;state.revealed=false;state.caseSelection=null;state.sceneOpen=false;render()}};
  document.getElementById('goHome').onclick=()=>{state.screen='home';state.revealed=false;state.caseSelection=null;render()};
  document.getElementById('revealBtn').onclick=()=>{if(state.screen==='lesson'){state.revealed=!state.revealed;render()}};
  document.getElementById('resetInteraction').onclick=()=>{state.revealed=false;state.caseSelection=null;state.sceneOpen=false;state.quick={};render();showToast('Interazione della schermata azzerata')};

  let audienceWin=null;
  document.getElementById('openAudience').onclick=()=>{
    audienceWin=window.open(location.href.split('#')[0]+'#aula','recupero_punti_aula','width=1280,height=720');
    setTimeout(broadcast,600);
  };

  function broadcast(){
    if(isAudience)return;
    const payload={type:'STATE',state:JSON.parse(JSON.stringify(state))};
    if(audienceWin && !audienceWin.closed) audienceWin.postMessage(payload,'*');
    try{ localStorage.setItem('rp_state',JSON.stringify(payload)); }catch(e){}
  }
  window.addEventListener('message',e=>{
    if(isAudience && e.data?.type==='STATE'){Object.assign(state,e.data.state);render(true)}
  });
  window.addEventListener('storage',e=>{
    if(isAudience && e.key==='rp_state' && e.newValue){try{const p=JSON.parse(e.newValue);Object.assign(state,p.state);render(true)}catch(_){}}
  });
  if(isAudience){
    try{const p=JSON.parse(localStorage.getItem('rp_state')||'null');if(p?.state)Object.assign(state,p.state)}catch(_){ }
    if(window.opener) window.opener.postMessage({type:'AULA_READY'},'*');
  }
  window.addEventListener('message',e=>{if(!isAudience && e.data?.type==='AULA_READY') broadcast()});
  window.addEventListener('resize',scheduleAudienceFit);
  if(document.fonts?.ready)document.fonts.ready.then(scheduleAudienceFit);

  let remaining=3600, timerInt=null;
  function updateTimer(){const m=Math.floor(remaining/60),s=remaining%60;document.getElementById('timer').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
  document.getElementById('timerStart').onclick=()=>{if(timerInt)return;timerInt=setInterval(()=>{remaining=Math.max(0,remaining-1);updateTimer();if(remaining===0){clearInterval(timerInt);timerInt=null;showToast('Ora didattica completata')}} ,1000)};
  document.getElementById('timerPause').onclick=()=>{clearInterval(timerInt);timerInt=null};
  document.getElementById('timerReset').onclick=()=>{clearInterval(timerInt);timerInt=null;remaining=3600;updateTimer()};

  function showToast(txt){const t=document.getElementById('toast');t.textContent=txt;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}

  window.addEventListener('keydown',e=>{
    if(isAudience)return;
    if(e.key==='ArrowRight')document.getElementById('nextBtn').click();
    if(e.key==='ArrowLeft')document.getElementById('prevBtn').click();
    if(e.key===' '){e.preventDefault();document.getElementById('revealBtn').click();}
    if(e.key==='Escape')document.getElementById('goHome').click();
  });

  render(true);updateTimer();
