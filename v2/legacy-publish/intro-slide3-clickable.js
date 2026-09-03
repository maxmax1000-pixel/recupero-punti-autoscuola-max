// Sync legacy della slide V2 approvata "Le frasi che sentiamo più spesso".
// Override chirurgico: non modifica il motore, usa state.caseSelection già sincronizzato con lo schermo aula.
(() => {
  const target = slides.find(s => s.title === 'Le frasi che sentiamo più spesso');
  if (!target) return;

  const items = [
    {
      id: 'patente-20-anni',
      statement: 'Eh, ma sono passati 20 anni da quando ho preso la patente...',
      response: 'E quindi? Non è che se tu ti dimentichi la regola smette di esistere. È tuo compito, in quanto possessore di patente, restare aggiornato sulle nuove disposizioni del Codice della Strada e non dimenticare quelle vecchie.'
    },
    {
      id: 'lo-fanno-tutti',
      statement: 'Eh, ma tanto lo fanno tutti...',
      response: 'E quindi? Se tanti sbagliano, questo rende giusto l’errore? Dobbiamo ragionare con la nostra testa o imitare gli altri?'
    },
    {
      id: 'mai-fatto-incidente',
      statement: 'Sono 30 anni che ho la patente e non ho mai fatto un incidente.',
      response: 'Finché gli altri frenano al posto tuo, incidenti non ne fai.'
    }
  ];

  target.duration = '5 min';
  target.teacher = 'Queste sono obiezioni che probabilmente sentirai anche durante il corso. Leggile senza polemica. Chiedi alla classe se almeno una volta ne ha pronunciata una. Lascia qualche secondo per le risposte prima di aprire il commento relativo. Il concetto è che il tempo trascorso, l’abitudine o il comportamento diffuso possono spiegare un errore, ma non rendono corretto un comportamento sbagliato.';

  target.html = () => {
    const open = state.caseSelection && state.caseSelection.startsWith('intro3:')
      ? state.caseSelection.slice('intro3:'.length)
      : null;

    const rows = items.map(item => {
      const isOpen = open === item.id;
      return `
        <div style="border:1px solid ${isOpen ? '#55d787' : '#34413c'};border-radius:20px;background:${isOpen ? '#101b15' : '#0d1411'};overflow:hidden;box-shadow:inset 0 0 38px rgba(85,216,135,${isOpen ? '.06' : '.025'})">
          <button type="button" onclick="toggleIntro3Legacy('${item.id}')" aria-expanded="${isOpen ? 'true' : 'false'}" aria-controls="intro3-response-${item.id}" style="width:100%;min-height:104px;display:grid;grid-template-columns:64px minmax(0,1fr) 48px;align-items:center;gap:22px;border:0;padding:18px 26px;background:transparent;color:var(--text);text-align:left;cursor:pointer">
            <span aria-hidden="true" style="width:64px;height:64px;border:1px solid #477d59;border-radius:50%;display:grid;place-items:center;background:rgba(85,216,135,.09);color:#69df8d;font-size:30px">💬</span>
            <span style="font-size:clamp(24px,1.65vw,32px);font-weight:850;line-height:1.22">${item.statement}</span>
            <span aria-hidden="true" style="width:48px;height:48px;border:1px solid #477d59;border-radius:50%;display:grid;place-items:center;background:rgba(85,216,135,.08);color:#69df8d;font-size:32px;font-weight:500;line-height:1">${isOpen ? '−' : '+'}</span>
          </button>
          ${isOpen ? `
            <div id="intro3-response-${item.id}" style="margin:0 26px;border-top:1px solid rgba(85,216,135,.42);padding:18px 14px 22px 86px">
              <p style="max-width:1380px;margin:0;color:#e5f3e9;font-size:clamp(23px,1.4vw,28px);font-weight:600;line-height:1.36">${item.response}</p>
            </div>` : ''}
        </div>`;
    }).join('');

    return `<div class="intro-layout intro-layout--blocks" style="max-width:1080px;margin:0 auto;padding-top:6px">
      <div style="display:inline-flex;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc;margin-bottom:12px">3 di 3</div>
      <h1 style="font-size:clamp(42px,4vw,64px);margin:0 0 28px">Le frasi che sentiamo più spesso</h1>
      <div style="display:grid;gap:18px;min-height:510px;align-content:center">${rows}</div>
    </div>`;
  };

  window.toggleIntro3Legacy = (id) => {
    const key = `intro3:${id}`;
    state.caseSelection = state.caseSelection === key ? null : key;
    render();
  };
})();
