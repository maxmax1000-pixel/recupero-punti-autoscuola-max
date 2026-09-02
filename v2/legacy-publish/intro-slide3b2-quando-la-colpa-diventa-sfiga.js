// Sync legacy della slide V2 "Quando la colpa diventa “sfiga”".
// Inserimento vincolante subito dopo "Hai mai notato questa cosa?".
(() => {
  const title = 'Quando la colpa diventa “sfiga”';
  if (slides.some(s => s.title === title)) return;

  const afterIndex = slides.findIndex(s => s.title === 'Hai mai notato questa cosa?');
  if (afterIndex < 0) return;

  const slide = {
    title,
    duration: '5 min',
    teacher: 'Presenta questa osservazione con tono ironico e umano, non accusatorio. Lascia che la classe riconosca il doppio standard prima di leggere la conclusione. La sfortuna può esistere e non tutti gli incidenti sono evitabili al 100%: il punto è che non deve diventare un alibi automatico per evitare di analizzare i propri errori, soprattutto quando giudichiamo quelli degli altri con maggiore severità.',
    html: () => `
      <style>
        #slide {
          background:
            linear-gradient(115deg, rgba(9,16,13,.94), rgba(9,16,13,.82)),
            url("intro-driving-final.webp") center 58% / cover no-repeat;
        }
        @media (max-height: 900px) and (min-width: 901px) {
          .double-standard-legacy .double-standard-title {
            font-size: clamp(40px, 3.25vw, 54px) !important;
            margin-bottom: 10px !important;
          }
          .double-standard-legacy .double-standard-subtitle {
            padding: 10px 26px !important;
            margin-bottom: 9px !important;
            font-size: clamp(17px, 1.2vw, 21px) !important;
          }
          .double-standard-legacy .double-standard-panels {
            gap: 12px !important;
            margin-bottom: 9px !important;
          }
          .double-standard-legacy .double-standard-panel {
            min-height: 196px !important;
            padding: 13px 20px !important;
          }
          .double-standard-legacy .double-standard-panel h2 {
            min-height: 42px !important;
            margin-bottom: 9px !important;
            padding-bottom: 8px !important;
            font-size: clamp(18px, 1.28vw, 23px) !important;
          }
          .double-standard-legacy .double-standard-panel ul {
            gap: 6px !important;
          }
          .double-standard-legacy .double-standard-panel li {
            font-size: clamp(17px, 1.12vw, 20px) !important;
          }
          .double-standard-legacy .double-standard-question,
          .double-standard-legacy .double-standard-conclusion {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }
          .double-standard-legacy .double-standard-question {
            margin-bottom: 9px !important;
            font-size: clamp(17px, 1.2vw, 21px) !important;
          }
          .double-standard-legacy .double-standard-conclusion {
            font-size: clamp(18px, 1.3vw, 22px) !important;
          }
        }
      </style>
      <div class="double-standard-legacy" style="max-width:1240px;margin:0 auto;padding-top:0">
        <h1 class="double-standard-title" style="font-size:clamp(46px,3.8vw,64px);line-height:1.03;margin:0 0 14px;text-align:center">Quando la colpa diventa “sfiga”</h1>

        <div class="double-standard-subtitle" style="border:1px solid rgba(85,216,135,.5);border-radius:18px;background:rgba(8,18,13,.82);padding:14px 32px;margin-bottom:12px;text-align:center;font-size:clamp(20px,1.4vw,26px);font-weight:780;line-height:1.24">
          Il problema non è la sfortuna. Il problema è tirarla fuori solo quando ci fa comodo.
        </div>

        <div class="double-standard-panels" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:12px">
          <section class="double-standard-panel" style="min-height:230px;border:1.5px solid rgba(85,216,135,.72);border-radius:18px;background:rgba(8,18,13,.84);padding:17px 26px;box-shadow:inset 0 0 38px rgba(85,216,135,.045)">
            <h2 style="min-height:52px;display:flex;align-items:center;justify-content:center;margin:0 0 12px;border-bottom:1px solid rgba(85,216,135,.42);padding-bottom:10px;color:#69df8d;font-size:clamp(21px,1.5vw,28px);font-weight:950;line-height:1.14;text-align:center">SE SUCCEDE A NOI</h2>
            <ul style="display:grid;gap:8px;margin:0;padding:0;list-style:none">
              <li style="border-left:5px solid #69df8d;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“Che sfiga...”</li>
              <li style="border-left:5px solid #69df8d;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“Non potevo farci niente.”</li>
              <li style="border-left:5px solid #69df8d;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“È successo tutto in un attimo.”</li>
              <li style="border-left:5px solid #69df8d;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“Mi è andata male.”</li>
            </ul>
          </section>

          <section class="double-standard-panel" style="min-height:230px;border:1.5px solid rgba(255,109,112,.78);border-radius:18px;background:rgba(8,18,13,.84);padding:17px 26px;box-shadow:inset 0 0 38px rgba(255,109,112,.045)">
            <h2 style="min-height:52px;display:flex;align-items:center;justify-content:center;margin:0 0 12px;border-bottom:1px solid rgba(255,109,112,.45);padding-bottom:10px;color:#ff7773;font-size:clamp(21px,1.5vw,28px);font-weight:950;line-height:1.14;text-align:center">SE SUCCEDE PER COLPA DI UN ALTRO</h2>
            <ul style="display:grid;gap:8px;margin:0;padding:0;list-style:none">
              <li style="border-left:5px solid #ff7773;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“Ma questo è incapace.”</li>
              <li style="border-left:5px solid #ff7773;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“Ma come guida?”</li>
              <li style="border-left:5px solid #ff7773;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“Doveva stare più attento.”</li>
              <li style="border-left:5px solid #ff7773;padding-left:13px;font-size:clamp(19px,1.25vw,24px);font-weight:780;line-height:1.16">“Uno così non dovrebbe guidare.”</li>
            </ul>
          </section>
        </div>

        <div class="double-standard-question" style="display:grid;grid-template-columns:52px minmax(0,1fr);align-items:center;gap:18px;border:1px solid rgba(255,255,255,.28);border-radius:18px;background:rgba(8,18,13,.84);padding:12px 28px;margin-bottom:12px;text-align:center;font-size:clamp(19px,1.35vw,25px);font-weight:850;line-height:1.2">
          <span aria-hidden="true" style="width:48px;height:48px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.55);border-radius:50%;font-size:29px;font-weight:950">?</span>
          <span>Perché, quando l’errore è nostro, diventa sfortuna... e quando è degli altri diventa incapacità?</span>
        </div>

        <div class="double-standard-conclusion" style="border:2px solid rgba(85,216,135,.92);border-radius:18px;background:linear-gradient(115deg,rgba(16,51,30,.78),rgba(7,17,12,.92));padding:14px 32px;text-align:center;font-size:clamp(20px,1.45vw,27px);font-weight:920;line-height:1.22">
          La sfiga non deve diventare l’alibi per non riconoscere i nostri errori. E non può valere solo quando fa comodo a noi.
        </div>
      </div>`
  };

  slides.splice(afterIndex + 1, 0, slide);
})();
