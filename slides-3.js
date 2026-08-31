slides.push(
{
      title:'La gerarchia', duration:'4 min',
      teacher:'Non presentarla come filastrocca da esame. Fai esempi: agente vs semaforo; semaforo vs STOP/dare precedenza; verticale vs striscia orizzontale. Ricorda l’eccezione del giallo lampeggiante: invita alla prudenza ma non “cancella” la precedenza indicata dai segnali.',
      html:()=>`<div class="kicker">La regola che risolve molti dubbi</div><h2>Quando i segnali sembrano dirti cose diverse</h2>
        <div class="hierarchy">
          <div class="rank">1 · SEGNALAZIONI DEGLI AGENTI</div><div class="arrowdown">prevalgono su ↓</div>
          <div class="rank">2 · SEMAFORI*</div><div class="arrowdown">prevalgono su ↓</div>
          <div class="rank">3 · SEGNALI VERTICALI</div><div class="arrowdown">prevalgono su ↓</div>
          <div class="rank">4 · SEGNALETICA ORIZZONTALE</div>
        </div>
        <p style="font-size:16px;margin-top:18px;color:var(--muted)">* Per la precedenza, con l’eccezione del giallo lampeggiante di pericolo.</p>`
    },
{
      title:'Guarda per 5 secondi', duration:'4 min',
      teacher:'Questa non è una domanda normativa: serve a far notare quante informazioni stradali ignoriamo. Premi “Mostra scena 5 secondi”, poi chiedi cosa ricordano prima di scoprire l’elenco. In una versione successiva sostituiremo la scena grafica con una foto stradale originale.',
      html:()=>`<div class="kicker">Esercizio visivo · Non basta guardare: bisogna vedere</div><h2>Hai 5 secondi. Quante informazioni riesci a cogliere?</h2>
        <div class="scene-wrap">
          <div class="scene">
            <div class="sky"></div><div class="curb"></div><div class="road"><div class="roadline"></div></div>
            <div class="sign50">50</div><div class="trafficlight"><div class="lamp red"></div><div class="lamp"></div><div class="lamp"></div></div>
            <div class="ped">🚶</div><div class="bike">🚲</div><div class="van">🚐</div><div class="agent">👮</div>
            <div class="scene-cover ${state.sceneOpen?'hidden':''}" id="sceneCover"><div style="text-align:center"><strong>Scena nascosta</strong><div style="margin-top:12px;color:var(--muted)">Premi il pulsante per mostrarla 5 secondi</div><button id="showScene" style="margin-top:18px;border:0;border-radius:12px;padding:12px 18px;background:var(--accent);font-weight:950;color:#07110b">Mostra scena 5 secondi</button></div></div>
          </div>
          <div class="scene-list"><div class="tag">Cosa c’era?</div>
            <div class="item">Limite di velocità</div><div class="item">Semaforo rosso</div><div class="item">Pedone</div><div class="item">Ciclista</div><div class="item">Furgone</div><div class="item">Agente del traffico</div>
          </div>
        </div>`
    },
{
      title:'Verticale o orizzontale?', duration:'4 min',
      teacher:'Caso 9. Qui è adatto il MODELLO A — SCELTA GUIDATA: voto A/B, breve motivazione, poi “Mostra soluzione”. Fai immaginare una strada dove una segnaletica orizzontale preesistente è in contrasto con un segnale verticale vigente. La domanda serve a fissare il principio dell’art. 38.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 9</span><span class="case-topic">Segnale verticale e segnaletica orizzontale</span></div>
        <div class="case-question">Un segnale verticale vigente e una segnaletica orizzontale sembrano essere in contrasto. Quale prescrizione prevale?</div>
        <div class="case-instruction">Scegli una risposta. La soluzione la scopriamo dopo.</div>
        <div class="case-answers">
          <button class="case-answer ${state.caseSelection==='A'?'selected':''} ${state.revealed?'correct':''}" data-case-select="A"><span class="case-letter">A</span><span>Il segnale verticale.</span></button>
          <button class="case-answer ${state.caseSelection==='B'?'selected':''} ${state.revealed&&state.caseSelection==='B'?'incorrect':''}" data-case-select="B"><span class="case-letter">B</span><span>La segnaletica orizzontale.</span></button>
        </div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">Prevale il segnale verticale.</div>
          <p class="case-solution-explain">Quando un segnale verticale e la segnaletica orizzontale danno indicazioni in contrasto, prevale la prescrizione del segnale verticale.</p>
          <div class="case-rule"><span class="case-rule-chip">SEGNALE VERTICALE</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">SEGNALETICA ORIZZONTALE</span></div>
          <div class="source teacher-hide">Riferimento normativo: art. 38, comma 2, Codice della strada.</div>
        </div>
      </div>`
    },
{
      title:'5 domande rapide', duration:'4 min',
      teacher:'Falle a ritmo veloce. Dopo ogni risposta chiedi a una persona: “Perché?”. Lo scopo è far verbalizzare la regola. Il risultato non è un test ufficiale e non va registrato.',
      html:()=>`<div class="kicker">Chiusura · Vero o falso ragionato</div><h2>5 domande, ma una regola: spiegare il perché</h2>
        <div class="quicktest">${[
          ['Le segnalazioni degli agenti prevalgono sulla segnaletica stradale.',true],
          ['Un segnale verticale prevale sulla segnaletica orizzontale.',true],
          ['Il semaforo rosso prevale anche sull’ordine contrario dato da un agente.',false],
          ['Il giallo lampeggiante di pericolo annulla sempre i segnali di precedenza.',false],
          ['Anche una prescrizione temporanea deve essere rispettata.',true]
        ].map((x,i)=>statementHTML(i,x[0],x[1])).join('')}</div>`
    },
{
      title:'Portati via questo', duration:'2 min',
      teacher:'Chiudi con una sola idea, non con un riassunto infinito. Anticipa che nella seconda ora si passa dalle regole ai comportamenti reali: velocità, distanza, smartphone, pedoni e decisioni.',
      html:()=>`<div class="kicker">Fine ora 1</div><h1>La strada non si legge a memoria.</h1>
        <p class="lead">Si interpreta in pochi secondi. E quando le informazioni si sovrappongono, serve sapere <span class="accent">quale indicazione prevale</span> e soprattutto accorgersi che esiste.</p>
        <div class="callout"><strong>Nella seconda ora</strong><p>Passiamo dalla segnaletica ai comportamenti: velocità, distanza, distrazione e decisioni quotidiane.</p></div>
        <div class="pillrow"><span class="pill">✓ 1 ora completata</span><span class="pill">→ Prossimo modulo: norme di comportamento</span></div>`
    }
);
