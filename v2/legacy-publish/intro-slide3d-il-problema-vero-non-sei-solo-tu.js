// Sync legacy della slide V2 approvata "Il problema vero non sei solo tu".
// Template riutilizzabile: rivelazione progressiva cumulativa.
(() => {
  const title = 'Il problema vero non sei solo tu';
  if (slides.some(s => s.title === title)) return;

  const afterIndex = slides.findIndex(s => s.title === 'Il senso civico alla guida: questo sconosciuto');
  if (afterIndex < 0) return;

  const revealKey = 'progressive:g1-intro-03d';
  const items = [
    ['NON DECIDI SOLO PER TE', 'Quando guidi con arroganza, distrazione o presunzione, imponi un rischio anche a chi non lo ha scelto.'],
    ['PUOI ROVINARE VITE ALTRUI', 'Un pedone, un ciclista, una famiglia, un ragazzo in scooter: basta un attimo per cambiare tutto.'],
    ['QUESTO EGOISMO VA ELIMINATO', 'Sulla strada non conta fare il fenomeno. Conta non costringere gli altri a pagare per i tuoi errori.']
  ];

  const slide = {
    title,
    duration: '5 min',
    teacher: 'Il testo iniziale resta visibile. Rivela i tre riquadri uno alla volta e lascia qualche secondo tra un passaggio e l’altro. I contenuti già aperti devono restare visibili. Chiudi soltanto alla fine con la frase sulla vita di una persona e di una famiglia: è il punto più importante della slide.',
    html: () => {
      const revealedCount = Number(state.quick[revealKey] || 0);
      return `
        <div style="max-width:1220px;margin:0 auto;padding-top:0">
          <h1 style="font-size:clamp(48px,4.3vw,70px);line-height:1.03;margin:0 0 18px;text-align:center">Il problema vero non sei solo tu</h1>

          <div style="border:1px solid rgba(85,216,135,.5);border-radius:18px;background:rgba(8,18,13,.78);padding:17px 34px;text-align:center;font-size:clamp(21px,1.45vw,28px);font-weight:750;line-height:1.28;margin-bottom:13px">
            Molti sono convinti che gli incidenti capitino sempre agli altri e che, se anche dovesse accadere qualcosa, il problema riguardi solo loro.
          </div>

          <div style="display:grid;gap:11px">
            ${items.map((item, index) => {
              const step = index + 1;
              const open = revealedCount >= step;
              return `
                <button type="button" onclick="revealSenseCivicoProgressive(${step})" aria-expanded="${open ? 'true' : 'false'}" style="width:100%;min-height:96px;display:grid;grid-template-columns:48px minmax(0,1fr) 38px;align-items:center;gap:18px;border:1px solid rgba(85,216,135,${open ? '.72' : '.24'});border-radius:18px;background:${open ? 'rgba(11,27,18,.76)' : 'rgba(7,15,11,.28)'};color:var(--text);padding:15px 26px;text-align:left;cursor:pointer;box-shadow:inset 0 0 30px rgba(85,216,135,${open ? '.045' : '.015'})">
                  <span style="width:44px;height:44px;display:grid;place-items:center;border:1px solid rgba(85,216,135,.6);border-radius:50%;background:rgba(85,216,135,.06);color:#69df8d;font-size:19px;font-weight:900">${step}</span>
                  ${open ? `<span><strong style="display:block;color:#69df8d;font-size:clamp(20px,1.35vw,26px);font-weight:950;line-height:1.15;margin-bottom:5px">${item[0]}</strong><span style="font-size:clamp(18px,1.15vw,22px);font-weight:620;line-height:1.28">${item[1]}</span></span>` : '<span></span>'}
                  <span aria-hidden="true" style="color:rgba(85,216,135,.6);font-size:32px;text-align:center">${open ? '' : '+'}</span>
                </button>`;
            }).join('')}
          </div>

          <button type="button" onclick="revealSenseCivicoProgressive(4)" aria-expanded="${revealedCount >= 4 ? 'true' : 'false'}" style="width:100%;min-height:104px;margin-top:12px;display:grid;place-items:center;border:2px solid rgba(85,216,135,${revealedCount >= 4 ? '.96' : '.28'});border-radius:18px;background:${revealedCount >= 4 ? 'linear-gradient(115deg,rgba(16,51,30,.78),rgba(7,17,12,.94))' : 'rgba(8,18,13,.3)'};color:var(--text);padding:18px 30px;text-align:center;cursor:pointer">
            ${revealedCount >= 4 ? '<span style="max-width:1100px;font-size:clamp(25px,1.8vw,34px);font-weight:950;line-height:1.2">Un comportamento irresponsabile può cambiare la vita di una persona, di una famiglia, per sempre.</span>' : '<span aria-hidden="true" style="color:rgba(85,216,135,.62);font-size:40px">+</span>'}
          </button>
        </div>`;
    }
  };

  slides.splice(afterIndex + 1, 0, slide);

  window.revealSenseCivicoProgressive = (step) => {
    const current = Number(state.quick[revealKey] || 0);
    state.quick[revealKey] = Math.max(current, Number(step) || 0);
    render();
  };
})();
