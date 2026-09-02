// Sync legacy della slide V2 approvata "Mettiamoci alla prova".
// Inserimento vincolante dopo la slide sulla prevenzione dell’urgenza.
(() => {
  const title = 'Mettiamoci alla prova';
  if (slides.some(s => s.title === title)) return;

  let afterIndex = slides.findIndex(s => s.title === 'Prevenire l’urgenza prima di partire');
  if (afterIndex < 0) {
    afterIndex = slides.findIndex(s => s.title === 'Il problema vero non sei solo tu');
  }
  if (afterIndex < 0) {
    afterIndex = slides.findIndex(s => s.title === 'Il senso civico alla guida: questo sconosciuto');
  }
  if (afterIndex < 0) {
    afterIndex = slides.findIndex(s => s.title === 'C’hai mai fatto caso?');
  }
  if (afterIndex < 0) {
    afterIndex = slides.findIndex(s => s.title === 'Le frasi che sentiamo più spesso');
  }
  if (afterIndex < 0) return;

  const slide = {
    title,
    duration: '4 min',
    teacher: 'Fai leggere la domanda e lascia qualche secondo per rispondere. Non suggerire subito la soluzione. Dopo il confronto, mostra la risposta e usa la frase finale per introdurre il blocco sulle regole generali del Codice della Strada.',
    html: () => {
      const open = state.revealed;
      return `<div style="max-width:1180px;margin:0 auto;padding-top:8px">
        <h1 style="font-size:clamp(46px,4.3vw,70px);line-height:1.04;margin:0 0 56px">Mettiamoci alla prova</h1>

        <div style="border:1px solid #356b49;border-radius:22px;background:#0d1411;padding:34px 42px;text-align:center;box-shadow:inset 0 0 40px rgba(85,216,135,.035)">
          <div style="font-size:clamp(28px,2.2vw,38px);font-weight:850;line-height:1.28">Il rispetto delle Norme del Codice della Strada è sempre<br>subordinato alla presenza della segnaletica?</div>
        </div>

        <div style="display:flex;justify-content:center;margin:24px 0 20px">
          <button type="button" onclick="toggleIntro4Legacy()" aria-expanded="${open ? 'true' : 'false'}" aria-controls="intro4-solution" style="border:1px solid #55d787;border-radius:16px;background:rgba(16,56,34,.72);color:var(--text);padding:17px 28px;font-size:22px;font-weight:850;cursor:pointer;box-shadow:0 12px 30px rgba(0,0,0,.22)">◉&nbsp;&nbsp;${open ? 'Nascondi soluzione' : 'Mostra soluzione'}</button>
        </div>

        ${open ? `<div id="intro4-solution" style="border:1px solid #55d787;border-radius:22px;background:rgba(14,37,24,.88);padding:30px 38px;text-align:center">
          <div style="font-size:clamp(26px,2vw,34px);font-weight:850;line-height:1.32"><strong>NO,</strong> esistono delle regole generali che dobbiamo conoscere e per le quali non è prevista la presenza dei segnali.</div>
          <div style="height:1px;max-width:860px;background:rgba(85,216,135,.45);margin:26px auto 18px"></div>
          <div style="color:#55d787;font-size:clamp(21px,1.55vw,27px);font-weight:850">Da qui iniziamo a parlare proprio di queste regole generali.</div>
        </div>` : ''}
      </div>`;
    }
  };

  slides.splice(afterIndex + 1, 0, slide);

  window.toggleIntro4Legacy = () => {
    state.revealed = !state.revealed;
    render();
  };
})();
