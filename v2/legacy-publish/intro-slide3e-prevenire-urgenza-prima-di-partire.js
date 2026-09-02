// Sync legacy della slide V2 "Prevenire l’urgenza prima di partire".
// Template riutilizzato: domanda con soluzione rivelata al click.
(() => {
  const title = 'Prevenire l’urgenza prima di partire';
  if (slides.some(s => s.title === title)) return;

  const afterIndex = slides.findIndex(s => s.title === 'Il problema vero non sei solo tu');
  if (afterIndex < 0) return;

  const slide = {
    title,
    duration: '5 min',
    teacher: 'Lascia inizialmente visibili i quattro richiami e chiedi alla classe di proporre una soluzione. Solo dopo il confronto fai clic sulla domanda. Evidenzia che l’anticipo non elimina gli imprevisti, ma impedisce alla fretta di trasformarsi in una scelta di guida pericolosa.',
    html: () => {
      const open = state.revealed;
      const intro = [
        'Trovi coda? Hai una giornata piena e sei di corsa? Hai avuto un imprevisto ed hai fretta?',
        'Tutto questo va considerato PRIMA di salire sul veicolo.',
        'Un buon autista dà per scontato che queste cose possano accadere. Anzi, dà per scontato che succederanno.',
        'Questo è l’approccio corretto da tenere ogni volta che si sa che durante la giornata si dovrà usare un veicolo.'
      ];

      return `<div style="max-width:1240px;margin:0 auto;padding-top:0">
        <h1 style="font-size:clamp(44px,4vw,66px);line-height:1.04;margin:0 0 18px;text-align:center">Prevenire l’urgenza prima di partire</h1>

        <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:14px">
          ${intro.map(paragraph => `<div style="min-height:82px;display:grid;place-items:center;border:1px solid rgba(85,216,135,.3);border-radius:16px;background:rgba(8,18,13,.68);padding:15px 20px;text-align:center;font-size:clamp(18px,1.15vw,22px);font-weight:720;line-height:1.28">${paragraph}</div>`).join('')}
        </div>

        <button type="button" onclick="togglePrevenireUrgenzaLegacy()" aria-expanded="${open ? 'true' : 'false'}" aria-controls="prevenire-urgenza-solution" style="width:100%;min-height:78px;display:grid;grid-template-columns:42px minmax(0,1fr) 42px;align-items:center;gap:12px;border:1.5px solid ${open ? '#69df8d' : '#477d59'};border-radius:18px;background:${open ? 'rgba(20,57,34,.8)' : 'rgba(10,25,16,.82)'};color:var(--text);padding:16px 24px;cursor:pointer">
          <span aria-hidden="true"></span>
          <span style="font-size:clamp(28px,2vw,38px);font-weight:900;line-height:1.2">Una valida soluzione?</span>
          <span aria-hidden="true" style="width:40px;height:40px;display:grid;place-items:center;border:1px solid rgba(105,223,141,.75);border-radius:50%;color:#69df8d;font-size:30px;line-height:1">${open ? '−' : '+'}</span>
        </button>

        ${open ? `<div id="prevenire-urgenza-solution" style="margin-top:14px;border:1.5px solid #55d787;border-radius:18px;background:rgba(14,37,24,.9);padding:20px 30px;text-align:center">
          <div style="font-size:clamp(27px,1.9vw,35px);font-weight:950;line-height:1.22">Partire <span style="color:#69df8d">SEMPRE</span> in largo anticipo.</div>
          <div style="height:1px;max-width:980px;background:rgba(255,139,125,.5);margin:17px auto 14px"></div>
          <div style="color:#ffb1a7;font-size:clamp(20px,1.35vw,26px);font-weight:850;line-height:1.28">Partire in orario o addirittura in ritardo è una delle cause che producono incidenti.</div>
        </div>` : ''}
      </div>`;
    }
  };

  slides.splice(afterIndex + 1, 0, slide);

  window.togglePrevenireUrgenzaLegacy = () => {
    state.revealed = !state.revealed;
    render();
  };
})();
