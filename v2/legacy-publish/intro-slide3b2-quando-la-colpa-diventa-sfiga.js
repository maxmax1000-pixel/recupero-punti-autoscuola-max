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
            margin-bottom: 6px !important;
          }
          .double-standard-legacy .double-standard-subtitle {
            padding: 12px 28px !important;
            margin-bottom: 11px !important;
            font-size: clamp(19px, 1.3vw, 23px) !important;
            line-height: 1.24 !important;
          }
          .double-standard-legacy .double-standard-panels {
            gap: 14px !important;
            margin-bottom: 11px !important;
          }
          .double-standard-legacy .double-standard-panel {
            min-height: 225px !important;
            padding: 17px 24px !important;
          }
          .double-standard-legacy .double-standard-panel h2 {
            min-height: 48px !important;
            margin-bottom: 11px !important;
            padding-bottom: 10px !important;
            font-size: clamp(19px, 1.35vw, 24px) !important;
          }
          .double-standard-legacy .double-standard-panel ul {
            gap: 9px !important;
          }
          .double-standard-legacy .double-standard-panel li {
            font-size: clamp(18px, 1.18vw, 21px) !important;
            line-height: 1.22 !important;
          }
          .double-standard-legacy .double-standard-question,
          .double-standard-legacy .double-standard-conclusion {
            padding-top: 11px !important;
            padding-bottom: 11px !important;
          }
          .double-standard-legacy .double-standard-question {
            margin-bottom: 11px !important;
            font-size: clamp(18px, 1.25vw, 22px) !important;
            line-height: 1.22 !important;
          }
          .double-standard-legacy .double-standard-conclusion {
            font-size: clamp(19px, 1.35vw, 23px) !important;
            line-height: 1.22 !important;
          }
        }
      </style>
      <div class="intro-layout intro-layout--comparison double-standard-legacy" style="max-width:1240px;margin:0 auto;padding-top:0">
        <h1 class="double-standard-title" style="font-size:clamp(46px,3.8vw,64px);line-height:1.03;margin:0 0 10px;text-align:center">Quando la colpa diventa “sfiga”</h1>

        <div class="double-standard-subtitle" style="border:1px solid rgba(85,216,135,.5);border-radius:18px;background:rgba(8,18,13,.82);padding:16px 36px;margin-bottom:15px;text-align:center;font-size:clamp(22px,1.5vw,28px);font-weight:780;line-height:1.27">
          Il problema non è la sfortuna. Il problema è tirarla fuori solo quando ci fa comodo.
        </div>

        <div class="double-standard-panels" style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:15px">
          <section class="double-standard-panel" style="min-height:275px;border:1.5px solid rgba(85,216,135,.72);border-radius:18px;background:rgba(8,18,13,.84);padding:24px 32px;box-shadow:inset 0 0 38px rgba(85,216,135,.045)">
            <h2 style="min-height:58px;display:flex;align-items:center;justify-content:center;margin:0 0 15px;border-bottom:1px solid rgba(85,216,135,.42);padding-bottom:14px;color:#69df8d;font-size:clamp(22px,1.55vw,29px);font-weight:950;line-height:1.14;text-align:center">SE SUCCEDE A NOI</h2>
            <ul style="display:grid;gap:12px;margin:0;padding:0;list-style:none">
              <li style="border-left:5px solid #69df8d;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“Che sfiga...”</li>
              <li style="border-left:5px solid #69df8d;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“Non potevo farci niente.”</li>
              <li style="border-left:5px solid #69df8d;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“È successo tutto in un attimo.”</li>
              <li style="border-left:5px solid #69df8d;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“Mi è andata male.”</li>
            </ul>
          </section>

          <section class="double-standard-panel" style="min-height:275px;border:1.5px solid rgba(255,109,112,.78);border-radius:18px;background:rgba(8,18,13,.84);padding:24px 32px;box-shadow:inset 0 0 38px rgba(255,109,112,.045)">
            <h2 style="min-height:58px;display:flex;align-items:center;justify-content:center;margin:0 0 15px;border-bottom:1px solid rgba(255,109,112,.45);padding-bottom:14px;color:#ff7773;font-size:clamp(22px,1.55vw,29px);font-weight:950;line-height:1.14;text-align:center">SE SUCCEDE PER COLPA DI UN ALTRO</h2>
            <ul style="display:grid;gap:12px;margin:0;padding:0;list-style:none">
              <li style="border-left:5px solid #ff7773;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“Ma questo è incapace.”</li>
              <li style="border-left:5px solid #ff7773;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“Ma come guida?”</li>
              <li style="border-left:5px solid #ff7773;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“Doveva stare più attento.”</li>
              <li style="border-left:5px solid #ff7773;padding-left:14px;font-size:clamp(20px,1.3vw,25px);font-weight:780;line-height:1.24">“Uno così non dovrebbe guidare.”</li>
            </ul>
          </section>
        </div>

        <div class="double-standard-question" style="display:grid;grid-template-columns:52px minmax(0,1fr);align-items:center;gap:18px;border:1px solid rgba(255,255,255,.28);border-radius:18px;background:rgba(8,18,13,.84);padding:15px 30px;margin-bottom:15px;text-align:center;font-size:clamp(20px,1.4vw,26px);font-weight:850;line-height:1.24">
          <span aria-hidden="true" style="width:48px;height:48px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.55);border-radius:50%;font-size:29px;font-weight:950">?</span>
          <span>Perché, quando l’errore è nostro, diventa sfortuna... e quando è degli altri diventa incapacità?</span>
        </div>

        <div class="double-standard-conclusion" style="border:2px solid rgba(85,216,135,.92);border-radius:18px;background:linear-gradient(115deg,rgba(16,51,30,.78),rgba(7,17,12,.92));padding:16px 34px;text-align:center;font-size:clamp(21px,1.5vw,28px);font-weight:920;line-height:1.24">
          La sfiga non deve diventare l’alibi per non riconoscere i nostri errori. E non può valere solo quando fa comodo a noi.
        </div>
      </div>`
  };

  slides.splice(afterIndex + 1, 0, slide);
})();
