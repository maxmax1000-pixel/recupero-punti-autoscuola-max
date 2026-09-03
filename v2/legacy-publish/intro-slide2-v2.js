// Standard grafico condiviso per il blocco introduttivo legacy + grafica approvata della slide "La differenza è questa".
(() => {
  if (!document.getElementById('intro-layout-standard')) {
    const style = document.createElement('style');
    style.id = 'intro-layout-standard';
    style.textContent = `
      #slide {
        background:
          linear-gradient(115deg, rgba(8,15,12,.94), rgba(8,15,12,.84)),
          url('intro-driving-final.webp?v=0b32c2b7') center 58% / cover no-repeat !important;
      }
      #slide h1,
      #slide h2 {
        max-width: none !important;
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
        text-wrap: balance;
      }
      #slide .intro-standard-balanced {
        min-height: 610px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      #slide .intro-standard-balanced .kicker {
        text-align: center;
      }
    `;
    document.head.appendChild(style);
  }

  const welcome = slides.find(s => s.title === 'Benvenuti');
  if (welcome) {
    welcome.html = () => `<div class="intro-layout intro-layout--hero intro-standard-balanced" style="max-width:1180px;margin:0 auto">
      <div class="kicker">Giorno 1 · Prima ora · Ripartiamo dalle basi</div>
      <h1 style="font-size:clamp(46px,4.6vw,74px);line-height:1.02;margin:0 0 30px">Sei sicuro di conoscere ancora la strada?</h1>
      <p class="lead" style="max-width:1060px;margin:0 auto 28px;text-align:center">Non rifacciamo l’esame della patente. Mettiamo alla prova quello che crediamo di sapere e partiamo da una domanda: <span class="accent">che cosa significa davvero saper guidare?</span></p>
      <div class="pillrow" style="justify-content:center;margin-top:0"><span class="pill">🕒 60 minuti</span><span class="pill">💬 Discussione</span><span class="pill">👀 Casi reali</span><span class="pill">✓ Soluzioni ragionate</span></div>
      <div class="callout" style="max-width:900px;width:100%;margin:30px auto 0;text-align:center"><strong>Regola della lezione</strong><p>Prima si ragiona. Poi si confrontano le risposte. La spiegazione arriva per ultima.</p></div>
    </div>`;
  }

  const poll = slides.find(s => s.title === 'Perché siete qui?');
  if (poll) {
    poll.html = () => `<div class="intro-layout intro-layout--hero intro-standard-balanced" style="max-width:1160px;margin:0 auto">
      <div class="kicker">Partiamo dalla classe</div>
      <h2 style="font-size:clamp(40px,4vw,64px);line-height:1.04;margin:0 0 24px">Quale comportamento vi ha portato qui?</h2>
      <p class="muted" style="max-width:980px;margin:0 auto 30px;text-align:center">Non servono dettagli personali: ci interessa soltanto capire quali situazioni vale la pena approfondire.</p>
      <div class="poll-grid">${Object.entries(state.poll).map(([k,v])=>`<button class="pollbtn" data-poll="${k}"><span class="poll-label">${k}</span><span class="count">${v}</span></button>`).join('')}</div>
      <div class="poll-summary" style="margin-top:28px;text-align:center">Totale indicazioni registrate: <strong style="color:#fff">${Object.values(state.poll).reduce((a,b)=>a+b,0)}</strong> · Clic destro su una voce per diminuire.</div>
    </div>`;
  }

  const drivingQuestion = slides.find(s => s.title === 'Saper guidare o muovere un veicolo?');
  if (drivingQuestion) {
    const renderDrivingQuestion = drivingQuestion.html;
    drivingQuestion.html = () => `<div class="intro-layout intro-layout--hero">${renderDrivingQuestion()}</div>`;
  }
})();

if (slides[3] && slides[3].title === 'La differenza è questa') {
  slides[3].html = () => `<div class="intro-layout intro-layout--comparison" style="max-width:1260px;margin:0 auto;padding-top:2px;min-height:610px;display:flex;flex-direction:column;justify-content:center">
    <div style="display:inline-flex;align-self:flex-start;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc;margin-bottom:12px">2 di 3</div>
    <h1 style="font-size:clamp(44px,4.1vw,66px);line-height:1.02;margin:0 0 24px;text-align:center">La differenza è questa</h1>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:26px">
      <section style="border:1.5px solid #e4514b;border-radius:24px;background:linear-gradient(155deg,rgba(58,18,17,.70),rgba(11,14,13,.96) 55%);padding:20px 30px 24px;min-height:360px;box-shadow:inset 0 0 40px rgba(228,81,75,.035)">
        <div style="display:flex;align-items:center;gap:20px;padding:0 0 16px;border-bottom:1px solid rgba(228,81,75,.55);margin-bottom:18px">
          <div style="width:64px;height:64px;border-radius:50%;display:grid;place-items:center;color:#fff;background:radial-gradient(circle at 35% 30%,#ff6d63,#a92525 68%,#491313);border:1.5px solid #ff756c;box-shadow:0 0 18px rgba(255,81,71,.22)">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11l1.4-4.1A2 2 0 0 1 8.3 5.5h7.4a2 2 0 0 1 1.9 1.4L19 11"/><path d="M4 11h16a1 1 0 0 1 1 1v5H3v-5a1 1 0 0 1 1-1Z"/><circle cx="7" cy="15" r="1.4"/><circle cx="17" cy="15" r="1.4"/><path d="M5 17v1.5M19 17v1.5"/></svg>
          </div>
          <div style="font-size:27px;font-weight:950;letter-spacing:.01em;color:#ff5a50">MUOVERE UN VEICOLO</div>
        </div>
        <div style="display:grid;gap:14px;font-size:22px;line-height:1.25">
          ${['partire','accelerare','frenare','sterzare','parcheggiare','arrivare dove serve'].map(t=>`<div style="display:flex;align-items:center;gap:16px"><span style="width:24px;height:24px;border:3px solid #ff675f;border-radius:50%;display:inline-block;box-shadow:inset 0 0 0 4px #171b19;flex:0 0 auto"></span><span>${t}</span></div>`).join('')}
        </div>
      </section>

      <section style="border:1.5px solid #55d787;border-radius:24px;background:linear-gradient(155deg,rgba(16,55,30,.72),rgba(9,15,12,.96) 58%);padding:20px 30px 24px;min-height:360px;box-shadow:inset 0 0 46px rgba(85,216,135,.04)">
        <div style="display:flex;align-items:center;gap:20px;padding:0 0 16px;border-bottom:1px solid rgba(85,216,135,.55);margin-bottom:18px">
          <div style="width:64px;height:64px;border-radius:50%;display:grid;place-items:center;color:#fff;background:radial-gradient(circle at 35% 30%,#79ef9e,#278847 68%,#123c23);border:1.5px solid #7cf0a0;box-shadow:0 0 18px rgba(85,216,135,.22)">
            <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="7.4"/><circle cx="12" cy="12" r="2.2"/><path d="M12 9.8V5.2M10.3 13.1 6.5 16M13.7 13.1l3.8 2.9"/></svg>
          </div>
          <div style="font-size:27px;font-weight:950;letter-spacing:.01em;color:#69df8d">SAPER GUIDARE</div>
        </div>
        <div style="display:grid;gap:14px;font-size:21px;line-height:1.3">
          ${[
            'conoscere le norme',
            'leggere la strada e la situazione',
            'prevedere i rischi e gli altri utenti',
            'adattare il comportamento',
            'guidare in sicurezza anche quando nessuno controlla'
          ].map(t=>`<div style="display:flex;align-items:flex-start;gap:16px"><span style="width:24px;height:24px;border:3px solid #68df8f;border-radius:50%;display:inline-block;box-shadow:inset 0 0 0 4px #172019;flex:0 0 auto;margin-top:1px"></span><span>${t}</span></div>`).join('')}
        </div>
      </section>
    </div>

    <div style="position:relative;overflow:hidden;margin-top:24px;border:1.5px solid #62d884;border-radius:22px;background:linear-gradient(180deg,rgba(12,29,18,.94),rgba(7,16,11,.97));padding:18px 28px 20px;text-align:center;box-shadow:inset 0 0 35px rgba(85,216,135,.035)">
      <div style="position:absolute;inset:0;opacity:.16;background-image:radial-gradient(circle,rgba(85,216,135,.55) 1px,transparent 1px);background-size:8px 8px;mask-image:linear-gradient(90deg,#000,transparent 22%,transparent 78%,#000)"></div>
      <div style="position:relative;font-size:28px;line-height:1.3">Molti conducenti sanno spostare un veicolo.<br><strong style="display:inline-block;margin-top:3px;color:var(--accent);font-size:36px;line-height:1.15">Non tutti sanno davvero guidare.</strong></div>
    </div>
  </div>`;
}
