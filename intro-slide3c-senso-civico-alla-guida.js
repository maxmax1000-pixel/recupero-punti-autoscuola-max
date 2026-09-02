// Sync legacy della slide V2 approvata "Il senso civico alla guida: questo sconosciuto".
// Inserimento vincolante subito dopo "Hai mai notato questa cosa?".
(() => {
  const title = 'Il senso civico alla guida: questo sconosciuto';
  if (slides.some(s => s.title === title)) return;

  const afterIndex = slides.findIndex(s => s.title === 'Hai mai notato questa cosa?');
  if (afterIndex < 0) return;

  const items = [
    ['LA STRADA NON È SOLO TUA', 'La corsia non è tua. La carreggiata non è tua. Non puoi pretendere che tutti si adattino a te.'],
    ['LE TUE URGENZE NON VALGONO PIÙ DI QUELLE DEGLI ALTRI', 'Essere di fretta non ti autorizza a correre, incalzare o mettere pressione a chi ti sta davanti.'],
    ['GUIDARE NON SIGNIFICA RISPONDERE AL TELEFONO', 'Telefonate, vocali e messaggi possono aspettare. Oggi la tecnologia offre alternative. Distrarsi, invece, è una scelta.'],
    ['ESSERE SICURI NON SIGNIFICA ESSERE ARROGANTI', 'Sentirsi bravi alla guida non autorizza a trattare gli altri come ostacoli o incapaci.']
  ];

  const slide = {
    title,
    duration: '5 min',
    teacher: 'Usa questa slide per spostare il ragionamento dalla sola abilità tecnica al rispetto degli altri. Non leggerla come una predica: fai esempi concreti di utenti incerti, lenti, inesperti o semplicemente diversi da noi. Il concetto centrale è che strada, corsia, tempo e urgenze non appartengono a un singolo conducente.',
    html: () => `
      <style>
        @media (max-height: 900px) and (min-width: 901px) {
          .civic-legacy .civic-title {
            font-size: clamp(42px, 3.55vw, 58px) !important;
            margin-bottom: 12px !important;
          }
          .civic-legacy .civic-intro {
            padding: 12px 30px !important;
            margin-bottom: 10px !important;
            font-size: clamp(18px, 1.25vw, 24px) !important;
            line-height: 1.2 !important;
          }
          .civic-legacy .civic-grid {
            gap: 10px !important;
          }
          .civic-legacy .civic-card {
            grid-template-columns: 42px minmax(0,1fr) !important;
            gap: 14px !important;
            min-height: 108px !important;
            padding: 13px 20px !important;
          }
          .civic-legacy .civic-number {
            width: 40px !important;
            height: 40px !important;
            font-size: 18px !important;
          }
          .civic-legacy .civic-card-title {
            margin-bottom: 5px !important;
            font-size: clamp(18px, 1.15vw, 22px) !important;
          }
          .civic-legacy .civic-card-body {
            font-size: clamp(16px, 1vw, 19px) !important;
            line-height: 1.22 !important;
          }
          .civic-legacy .civic-conclusion {
            margin-top: 10px !important;
            padding: 13px 26px !important;
            font-size: clamp(19px, 1.35vw, 24px) !important;
            line-height: 1.18 !important;
          }
        }
      </style>
      <div class="civic-legacy" style="max-width:1240px;margin:0 auto;padding-top:0">
        <h1 class="civic-title" style="font-size:clamp(46px,4.2vw,68px);line-height:1.03;margin:0 0 18px;text-align:center">Il senso civico alla guida: questo sconosciuto</h1>

        <div class="civic-intro" style="border:1px solid rgba(85,216,135,.5);border-radius:18px;background:rgba(8,18,13,.78);padding:16px 34px;text-align:center;font-size:clamp(21px,1.45vw,28px);font-weight:750;line-height:1.28;margin-bottom:14px">
          Avere rispetto degli altri utenti, delle loro incertezze e delle loro difficoltà dovrebbe far parte dello stile di guida di ognuno.
        </div>

        <div class="civic-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          ${items.map((item, index) => `
            <section class="civic-card" style="display:grid;grid-template-columns:48px minmax(0,1fr);gap:16px;align-items:start;min-height:128px;border:1px solid rgba(85,216,135,.38);border-radius:18px;background:rgba(8,18,13,.78);padding:18px 24px">
              <span class="civic-number" style="width:44px;height:44px;display:grid;place-items:center;border:1px solid rgba(85,216,135,.7);border-radius:50%;background:rgba(85,216,135,.08);color:#69df8d;font-size:20px;font-weight:900">${index + 1}</span>
              <div>
                <div class="civic-card-title" style="color:#69df8d;font-size:clamp(19px,1.25vw,24px);font-weight:950;line-height:1.15;margin-bottom:7px">${item[0]}</div>
                <div class="civic-card-body" style="font-size:clamp(17px,1.1vw,21px);font-weight:620;line-height:1.28">${item[1]}</div>
              </div>
            </section>`).join('')}
        </div>

        <div class="civic-conclusion" style="margin-top:14px;border:2px solid rgba(85,216,135,.92);border-radius:18px;background:linear-gradient(115deg,rgba(16,51,30,.72),rgba(7,17,12,.9));padding:18px 30px;text-align:center;font-size:clamp(22px,1.55vw,29px);font-weight:900;line-height:1.25">
          Il senso civico fa parte della differenza tra l’essere un vero autista o un semplice portatore sano di veicoli.
        </div>
      </div>`
  };

  slides.splice(afterIndex + 1, 0, slide);
})();
