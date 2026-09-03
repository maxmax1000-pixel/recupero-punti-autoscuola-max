// Sync legacy della slide V2 approvata "Hai mai notato questa cosa?".
// Inserimento chirurgico subito dopo "Le frasi che sentiamo più spesso" e prima di "Mettiamoci alla prova".
(() => {
  const title = 'Hai mai notato questa cosa?';
  if (slides.some(s => s.title === title)) return;

  const afterIndex = slides.findIndex(s => s.title === 'Le frasi che sentiamo più spesso');
  if (afterIndex < 0) return;

  const slide = {
    title,
    duration: '6 min',
    teacher: 'Leggi i primi due esempi con tono ironico, senza trasformarli in una ramanzina. Lascia che la classe si riconosca nella contraddizione: chi va più piano di noi sembra troppo lento, chi va più veloce sembra troppo veloce. Poi porta l’attenzione sui criteri reali con cui si sceglie la velocità: limite, struttura della strada, condizioni del veicolo e visibilità. Chiudi collegando il ragionamento alla differenza tra vero autista e semplice portatore sano di veicoli.',
    html: () => `
      <div class="intro-layout intro-layout--blocks" style="max-width:1240px;margin:0 auto;padding-top:0">
        <div style="display:flex;justify-content:flex-start;margin-bottom:6px"><div style="display:inline-flex;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc">4 di 4</div></div>
        <h1 style="font-size:clamp(48px,4.4vw,72px);line-height:1.02;margin:0 0 22px;text-align:center">Hai mai notato questa cosa?</h1>

        <div style="display:grid;gap:14px">
          <div style="display:grid;grid-template-columns:72px 1fr;gap:24px;align-items:center;border:1px solid #356b49;border-radius:20px;background:#0d1411;padding:20px 28px">
            <span aria-hidden="true" style="width:64px;height:64px;border:1px solid #55d787;border-radius:50%;display:grid;place-items:center;background:rgba(85,216,135,.06);font-size:30px">💬</span>
            <div style="font-size:clamp(23px,1.55vw,30px);font-weight:800;line-height:1.28">Se trovi qualcuno davanti a te che viaggia a una velocità inferiore alla tua, il pensiero è: <strong>“Ma guarda questo qui... svegliati!”</strong></div>
          </div>

          <div style="display:grid;grid-template-columns:72px 1fr;gap:24px;align-items:center;border:1px solid #356b49;border-radius:20px;background:#0d1411;padding:20px 28px">
            <span aria-hidden="true" style="width:64px;height:64px;border:1px solid #55d787;border-radius:50%;display:grid;place-items:center;background:rgba(85,216,135,.06);font-size:30px">💬</span>
            <div style="font-size:clamp(23px,1.55vw,30px);font-weight:800;line-height:1.28">Se invece trovi un utente che ti sorpassa, il pensiero diventa: <strong>“Ma dove corre questo? Che fretta ha?”</strong></div>
          </div>

          <div style="border:1px solid #47754f;border-radius:18px;background:rgba(18,32,23,.72);padding:18px 26px 18px 40px;position:relative;font-size:clamp(21px,1.35vw,27px);line-height:1.3">
            <span style="position:absolute;left:20px;top:20px;bottom:20px;width:4px;border-radius:99px;background:#55d787"></span>
            Secondo la media generale, l’unica velocità corretta è quella che scegliamo di tenere noi.<br>Quella degli altri, ai nostri occhi, è sempre sbagliata.
          </div>

          <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;border:1px solid #356b49;border-radius:18px;background:#0d1411;padding:16px 22px;font-size:clamp(20px,1.25vw,25px);font-weight:750;line-height:1.2">
            <span aria-hidden="true" style="width:50px;height:50px;flex:0 0 50px;border:1px solid #55d787;border-radius:50%;display:grid;place-items:center;color:#69df8d;font-size:30px">?</span>
            <span>Ma in tutto questo, stiamo tenendo conto del</span>
            <span style="display:inline-flex;align-items:center;gap:8px;border:1px solid #477d59;border-radius:12px;padding:8px 14px;color:#69df8d;background:rgba(85,216,135,.07)">◴ <strong>limite</strong></span>
            <span>della</span>
            <span style="display:inline-flex;align-items:center;gap:8px;border:1px solid #477d59;border-radius:12px;padding:8px 14px;color:#69df8d;background:rgba(85,216,135,.07)">▥ <strong>struttura della strada</strong></span>
            <span>delle</span>
            <span style="display:inline-flex;align-items:center;gap:8px;border:1px solid #477d59;border-radius:12px;padding:8px 14px;color:#69df8d;background:rgba(85,216,135,.07)">▰ <strong>condizioni del veicolo</strong></span>
            <span>e della</span>
            <span style="display:inline-flex;align-items:center;gap:8px;border:1px solid #477d59;border-radius:12px;padding:8px 14px;color:#69df8d;background:rgba(85,216,135,.07)">◉ <strong>visibilità</strong></span><span>?</span>
          </div>

          <div style="display:grid;grid-template-columns:82px minmax(0,1fr);align-items:center;gap:22px;border:2px solid #69df8d;border-radius:20px;background:rgba(14,37,24,.88);padding:20px 28px">
            <span aria-hidden="true" style="width:72px;height:72px;border:1px solid #55d787;border-radius:50%;display:grid;place-items:center;color:#69df8d;font-size:42px">★</span>
            <div style="text-align:center;font-size:clamp(22px,1.5vw,29px);font-weight:850;line-height:1.28">
              <div>E NO, tutte queste attenzioni <strong style="color:#69df8d;font-size:1.08em">NON SONO OPTIONAL.</strong></div>
              <div>Semplicemente fanno anch’esse parte delle differenze che passano<br>tra l’essere un vero autista o un semplice portatore sano di veicoli.</div>
            </div>
          </div>
        </div>
      </div>`
  };

  slides.splice(afterIndex + 1, 0, slide);
})();
