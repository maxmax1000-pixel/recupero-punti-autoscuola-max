// Nuovo blocco introduttivo approvato: inserito dopo presentazione e sondaggio.
// Aggiorna anche la prima schermata affinché non anticipi più la segnaletica.
slides[0].teacher='Apri senza fare subito teoria. Chiedi: “Secondo voi questo corso serve soltanto a recuperare punti o può servire anche a guidare meglio?” Lascia 2–3 risposte. Dopo il sondaggio partiremo dalla differenza tra saper guidare e saper soltanto muovere un veicolo.';
slides[0].html=()=>`<div class="kicker">Giorno 1 · Prima ora · Ripartiamo dalle basi</div>
  <h1>Sei sicuro di conoscere ancora la strada?</h1>
  <p class="lead">Non rifacciamo l’esame della patente. Mettiamo alla prova quello che crediamo di sapere e partiamo da una domanda: <span class="accent">che cosa significa davvero saper guidare?</span></p>
  <div class="pillrow"><span class="pill">🕒 60 minuti</span><span class="pill">💬 Discussione</span><span class="pill">👀 Casi reali</span><span class="pill">✓ Soluzioni ragionate</span></div>
  <div class="callout"><strong>Regola della lezione</strong><p>Prima si ragiona. Poi si confrontano le risposte. La spiegazione arriva per ultima.</p></div>`;

const introSlides=[
{
  title:'Saper guidare o muovere un veicolo?', duration:'6 min',
  teacher:'Non dare nessuna definizione all’inizio. Leggi la frase, poi lascia parlare liberamente la classe. Cerca soprattutto di far emergere cosa intendono loro per “saper guidare”. Non correggere subito: la schermata successiva serve proprio a mettere ordine nelle risposte.',
  html:()=>`<div style="display:grid;grid-template-columns:minmax(0,1.08fr) minmax(380px,.92fr);gap:34px;align-items:stretch;min-height:610px">
    <div style="display:flex;flex-direction:column;justify-content:center;padding:10px 8px 10px 10px">
      <div style="display:inline-flex;align-self:flex-start;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc;margin-bottom:20px">1 di 3</div>
      <h1 style="font-size:clamp(42px,4vw,70px);line-height:1.03;margin:0 0 22px">Saper guidare o saper soltanto <span class="accent">muovere</span> un veicolo da punto A a punto B</h1>
      <div style="height:3px;width:145px;background:var(--accent);border-radius:99px;margin:0 0 26px"></div>
      <div style="border:1px solid #34413c;background:rgba(12,18,15,.82);border-radius:20px;padding:24px 26px;font-size:24px;line-height:1.45;max-width:760px">
        Tra il saper guidare ed essere il classico <span class="accent" style="font-weight:900">portatore sano di veicoli</span>, c’è una grande differenza.<br><br><strong class="accent">Qual è secondo te?</strong>
      </div>
      <div style="display:flex;align-items:center;gap:16px;margin-top:26px;font-size:24px;font-weight:750"><span style="font-size:36px;color:var(--accent)">💬</span><span>Dai pure liberamente la tua opinione.</span></div>
    </div>
    <div style="position:relative;overflow:hidden;border-radius:26px;border:1px solid #34413c;min-height:560px;background:#080d0b">
      <img src="intro-driving.webp" alt="Vista notturna della strada dall'abitacolo di un'automobile" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;filter:saturate(.9) brightness(.78)">
      <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,12,9,.48),transparent 40%),linear-gradient(0deg,rgba(6,12,9,.32),transparent 45%)"></div>
    </div>
  </div>`
},
{
  title:'La differenza è questa', duration:'6 min',
  teacher:'Questa è la risposta alla domanda precedente. Non presentarla come una critica personale. Il concetto è: la capacità tecnica di controllare il mezzo è necessaria, ma da sola non basta. Saper guidare comprende anche conoscenza delle norme, lettura della situazione, previsione e adattamento del comportamento.',
  html:()=>`<div style="max-width:1180px;margin:0 auto;padding-top:4px">
    <div style="display:inline-flex;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc;margin-bottom:12px">2 di 3</div>
    <h1 style="font-size:clamp(42px,4vw,64px);margin:0 0 24px">La differenza è questa</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px">
      <div style="border:1px solid #633334;border-radius:22px;background:rgba(43,15,16,.18);padding:26px 30px">
        <div style="font-size:24px;font-weight:950;color:#ff5147;margin-bottom:22px">MUOVERE UN VEICOLO</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px 24px;font-size:22px;line-height:1.3">
          <div>◉&nbsp; partire</div><div>◉&nbsp; sterzare</div>
          <div>◉&nbsp; accelerare</div><div>◉&nbsp; parcheggiare</div>
          <div>◉&nbsp; frenare</div><div>◉&nbsp; arrivare dove serve</div>
        </div>
      </div>
      <div style="border:1px solid #356b49;border-radius:22px;background:rgba(23,54,34,.17);padding:26px 30px">
        <div style="font-size:24px;font-weight:950;color:var(--accent);margin-bottom:22px">SAPER GUIDARE</div>
        <div style="display:grid;gap:14px;font-size:22px;line-height:1.25">
          <div>▣&nbsp; conoscere le norme</div>
          <div>◉&nbsp; leggere la strada e la situazione</div>
          <div>♧&nbsp; prevedere i rischi e gli altri utenti</div>
          <div>♙&nbsp; adattare il comportamento</div>
          <div>⬡&nbsp; guidare in sicurezza anche quando nessuno controlla</div>
        </div>
      </div>
    </div>
    <div style="margin-top:22px;border:1px solid #356b49;background:rgba(14,27,19,.78);border-radius:20px;padding:20px 28px;text-align:center;font-size:27px;line-height:1.35">Molti conducenti sanno spostare un veicolo.<br><strong class="accent" style="font-size:31px">Non tutti sanno davvero guidare.</strong></div>
  </div>`
},
{
  title:'Le frasi che sentiamo più spesso', duration:'5 min',
  teacher:'Queste sono le obiezioni che probabilmente sentirai anche durante il corso. Leggile senza polemica. Chiedi alla classe se almeno una volta ne ha pronunciata una. La frase finale serve a fissare il principio: il tempo passato o l’abitudine possono spiegare un errore, non trasformare la regola in qualcosa di facoltativo.',
  html:()=>`<div style="max-width:1080px;margin:0 auto;padding-top:6px">
    <div style="display:inline-flex;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc;margin-bottom:12px">3 di 3</div>
    <h1 style="font-size:clamp(42px,4vw,64px);margin:0 0 24px">Le frasi che sentiamo più spesso</h1>
    <div style="display:grid;gap:14px">
      ${[
        '“Eh, ma sono passati 20 anni dalla patente…”',
        '“Eh, ma io ho sempre fatto così…”',
        '“Eh, ma non me lo ricordavo…”',
        '“Eh, ma tanto lo fanno tutti…”'
      ].map(t=>`<div style="display:flex;align-items:center;gap:18px;border:1px solid #34413c;background:#0d1411;border-radius:18px;padding:18px 24px;font-size:25px"><span style="color:var(--accent);font-size:32px">💬</span><span>${t}</span></div>`).join('')}
    </div>
    <div style="margin-top:24px;display:flex;align-items:center;justify-content:center;gap:22px;border:1px solid #47754f;background:rgba(18,32,23,.82);border-radius:20px;padding:22px 28px;text-align:center;font-size:29px;line-height:1.3"><span style="font-size:48px;color:var(--accent)">⚠</span><span>Dimenticare una regola non significa<br><strong class="accent">che la regola non esista più.</strong></span></div>
  </div>`
}
];

slides.splice(2,0,...introSlides);
