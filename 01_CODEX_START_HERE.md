# Autoscuola Max — Corso Recupero Punti
## START HERE — Codex

Ultimo aggiornamento operativo: 3 settembre 2026.

## 1. Fonti permanenti obbligatorie
Prima di qualsiasi modifica al progetto leggere integralmente:

1. `AGENTS.md`
2. `01_CODEX_START_HERE.md`
3. `02_STANDARD_GRAFICO_E_IMPAGINAZIONE.md`
4. `03_PROJECT_STATUS.md`

`AGENTS.md` e la porta di ingresso. Questo file e il manuale operativo. Le regole grafiche dettagliate stanno in `02_STANDARD_GRAFICO_E_IMPAGINAZIONE.md`. Lo stato aggiornato sta in `03_PROJECT_STATUS.md`.

Se due fonti si contraddicono, non scegliere a intuito: fermarsi e segnalarlo.

## 2. Repository, percorso e ramo
Repository GitHub:
`https://github.com/maxmax1000-pixel/recupero-punti-autoscuola-max.git`

Repository esclusivo:
`maxmax1000-pixel/recupero-punti-autoscuola-max`

Percorso corretto di lavoro:
`/Users/massimilianofolli/Documents/Codex/2026-09-01/autoscuola-max-programma-lezioni-sites-project/work/recupero-punti-layout-standard`

Branch di lavoro:
`codex/recupero-punti-v2-clickable-statements`

HEAD locale verificato in questo controllo:
`996d9e9a67286428360a03e0608c917181588b1d`

Branch remoto `main` letto in questo controllo:
`4c9671ff8bdc4871b4aacf68c58ce30436524045`

## 3. Regola operativa fondamentale
Non lavorare mai da supposizioni.

Prima di modificare:
- verificare di essere nel percorso corretto;
- verificare il branch;
- leggere `git status --short`;
- capire quali modifiche locali esistono gia;
- preservare il lavoro locale e quello approvato;
- non annullare, ripristinare o sovrascrivere lavoro esistente.

Se una fase richiede il confronto con GitHub o con `main`, usare solo controlli compatibili con il prompt dell'utente. Non eseguire pubblicazioni, commit, push o modifiche a `main` senza approvazione esplicita.

## 4. Architettura V2 approvata
Percorso: `/v2`.

Stack:
- React;
- TypeScript strict;
- Vite;
- CSS Modules;
- Playwright.

La V2 e la sorgente definitiva delle nuove slide.

Vincoli permanenti:
- ID slide stabili;
- registry e ordine separati;
- nessun indice numerico come identita;
- nessuno `splice()` per la struttura V2;
- nessun HTML in stringhe nella V2;
- nessun `innerHTML` / `dangerouslySetInnerHTML`;
- nessuna immagine Base64;
- immagini come file reali;
- nessun CSS fragile legato all'ID di una singola slide quando il problema e generale;
- nessuna dipendenza nuova senza autorizzazione esplicita.

## 5. Slide V2 presenti realmente
Il pilot deck reale e definito in `v2/src/course/pilotSlides.ts`.

Ordine attuale di `pilotLessonOrder`:

1. `g1-intro-02-differenza` — `La differenza e questa`
2. `g1-intro-03-frasi-che-sentiamo` — `Le frasi che sentiamo piu spesso`
3. `g1-intro-03b-ci-hai-mai-fatto-caso` — `Hai mai notato questa cosa?`
4. `g1-intro-03b2-quando-la-colpa-diventa-sfiga` — `Quando la colpa diventa "sfiga"`
5. `g1-intro-03c-senso-civico-alla-guida` — `Il senso civico alla guida: questo sconosciuto`
6. `g1-intro-03d-il-problema-vero-non-sei-solo-tu` — `Il problema vero non sei solo tu`
7. `g1-intro-03e-prevenire-urgenza-prima-di-partire` — `Prevenire l'urgenza prima di partire`
8. `g1-intro-04-mettiamoci-alla-prova` — `Mettiamoci alla prova`

La slide `Quando la colpa diventa "sfiga"` e presente nel ramo V2 di lavoro, ma non risulta nell'ultima pubblicazione online registrata da `publish-status.json` su `main`.

Il titolo aggiornato `Hai mai notato questa cosa?` e presente nel codice V2 e nello script pubblicato su `main` derivato da `50e6cfd41a3aecf71f78bcc6be4d7f9b3d5eb606`.

## 6. Template V2 disponibili
Tipi e componenti disponibili nella V2:

- `DiscussionSlide`;
- `ComparisonSlide`;
- `ABCaseSlide`;
- `FreeResponseSlide`;
- `SolutionSlide`;
- `ClickableStatementsSlide`;
- `RevealQuestionSlide`;
- `ObservationSlide`;
- `DoubleStandardSlide`;
- `MessageCardsSlide`;
- `ProgressiveRevealSlide`;
- `ImageTextSlide`.

`RevealQuestionSlide` supporta testo introduttivo opzionale, domanda cliccabile, risposta, chiusura rivelata e allineamento del titolo.

`ProgressiveRevealSlide` e un template riutilizzabile: intro sempre visibile, riquadri predisposti, apertura progressiva cumulativa, conclusione finale e reset allo stato iniziale.

## 7. Rapporto tra V2 e programma completo legacy
Il programma completo legacy serve temporaneamente per permettere al docente di scorrere l'intera lezione e valutarne il flusso.

Ogni slide reale aggiunta a `pilotLessonOrder` deve avere nello stesso lavoro:

1. un adapter legacy in `v2/legacy-publish/`;
2. una voce corrispondente in `v2/legacy-publish/manifest.json`.

Il manifest attuale contiene:
- `orderSource`;
- `assets`;
- `styles`;
- `runtimeScripts`;
- `entries`.

L'ordine di `manifest.json` deve coincidere esattamente con `pilotLessonOrder`.

Il controllo:
`node scripts/validate-legacy-publish.mjs`

blocca la pubblicazione se:
- manca un adapter legacy;
- manca un asset, foglio stile o script runtime dichiarato;
- una slide V2 non ha la copia per il programma completo;
- il manifest contiene slide extra;
- l'ordine del manifest non coincide con `pilotLessonOrder`.

Non modificare direttamente i file legacy alla radice durante lo sviluppo V2. La copia alla radice deve avvenire tramite il sistema di pubblicazione approvato.

## 8. Sistemi comuni di layout
Le regole grafiche complete sono in `02_STANDARD_GRAFICO_E_IMPAGINAZIONE.md`.

Sistemi presenti localmente:
- `SlideFrame` supporta varianti di layout: `standard`, `hero`, `comparison`, `blocks`, `question`;
- `SlideFrame.module.css` gestisce sfondo stradale, distanza titolo-contenuto e altezza in modalita aula/docente;
- `AudienceFit.tsx` adatta la V2 in modalita aula;
- `CourseShell.module.css` gestisce modalita docente e modalita aula;
- `v2/legacy-publish/intro-layout-standard.css` porta lo standard nel programma completo legacy;
- `v2/legacy-publish/audience-fit-fix.js` centra e adatta la modalita aula legacy;
- `v2/legacy-publish/teacher-fit-fix.js` distribuisce meglio la modalita docente legacy.

Le modifiche locali piu recenti su layout, centratura aula, distribuzione docente, sfondo stradale e spazio sotto i titoli non risultano ancora pubblicate su `main`.

## 9. Test e controlli
Script disponibili in `v2/package.json`:
- `npm run build`;
- `npm run test:e2e`.

La suite Playwright presente nei file contiene 40 test effettivi ricavabili staticamente, includendo i test parametrizzati.

File test presenti:
- `smoke.spec.ts`;
- `pilot.spec.ts`;
- `clickable-statements.spec.ts`;
- `reveal-question.spec.ts`;
- `observation.spec.ts`;
- `double-standard.spec.ts`;
- `sense-civico.spec.ts`;
- `prevenire-urgenza.spec.ts`;
- `viewport-fit.spec.ts`;
- `legacy-teacher-fit.spec.ts`;
- `intro-layout-standard.spec.ts`.

In questo aggiornamento documentale non sono stati eseguiti test.

Prima di una pubblicazione approvata, eseguire almeno:
- validazione del pacchetto legacy;
- build V2;
- test Playwright;
- verifica degli screenshot quando il lavoro riguarda grafica o impaginazione;
- verifica finale della pubblicazione online.

Un test automatico superato non sostituisce la verifica visiva.

## 10. Pubblicazione unica
Non modificare `main` e non pubblicare senza approvazione esplicita dell'utente.

Dopo approvazione, il commit-segnale deve avere un messaggio che inizia con:
`Pubblica V2 approvata`

Il workflow esegue automaticamente, nello stesso passaggio:
- controlli e test V2;
- build della V2;
- pubblicazione in `/v2-preview/`;
- copia degli adapter V2 nel programma completo;
- copia di asset, fogli stile e script runtime dichiarati nel manifest;
- aggiornamento automatico dei blocchi gestiti in `index.html`;
- push unico su `main`.

Non fare una seconda sincronizzazione manuale del programma completo dopo la pubblicazione automatica.

Non dichiarare mai "pubblicato" finche la pubblicazione online non risulta completata con successo.

Ultima pubblicazione registrata su `main` in questo controllo:
- commit `main`: `4c9671ff8bdc4871b4aacf68c58ce30436524045`;
- `publish-status.json`: `sourceCommit` = `50e6cfd41a3aecf71f78bcc6be4d7f9b3d5eb606`;
- `publishedAt` = `2026-09-02T19:47:54Z`.

## 11. Protezione del lavoro esistente
Questa cartella contiene modifiche locali non pubblicate.

Non annullare:
- slide `Quando la colpa diventa "sfiga"`;
- titolo aggiornato `Hai mai notato questa cosa?`;
- nuovo standard generale di impaginazione;
- centratura della modalita aula;
- nuova distribuzione verticale della modalita docente;
- sfondo stradale ripristinato;
- spazio di respiro tra titolo e contenuto;
- adapter, manifest, test e script collegati.

Non modificare codice, CSS, slide, test, workflow o asset salvo richiesta esplicita.

## 12. STOP
Ogni fase termina dove indicato dal prompt.

Non proseguire autonomamente con altre slide, merge, pubblicazioni, refactor o manutenzioni non richieste.
