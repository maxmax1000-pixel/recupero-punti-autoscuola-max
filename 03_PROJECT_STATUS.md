# Autoscuola Max — Stato progetto Corso Recupero Punti

Ultimo aggiornamento: 3 settembre 2026.

Questo stato e ricavato dai file reali presenti nella cartella:

`/Users/massimilianofolli/Documents/Codex/2026-09-01/autoscuola-max-programma-lezioni-sites-project/work/recupero-punti-layout-standard`

Branch di lavoro:
`codex/recupero-punti-v2-clickable-statements`

HEAD locale:
`996d9e9a67286428360a03e0608c917181588b1d`

## PUBBLICATO ONLINE
Risulta pubblicato su `main` il pacchetto generato dal commit sorgente:

`50e6cfd41a3aecf71f78bcc6be4d7f9b3d5eb606`

Il file `publish-status.json` su `main` indica:

`publishedAt: 2026-09-02T19:47:54Z`

Il commit remoto `main` letto in questo controllo e:

`4c9671ff8bdc4871b4aacf68c58ce30436524045`

Lo script `index.html` pubblicato su `main` include gli adapter V2 con versione `50e6cfd41a3a` per:
- `g1-intro-02-differenza`;
- `g1-intro-03-frasi-che-sentiamo`;
- `g1-intro-03b-ci-hai-mai-fatto-caso`;
- `g1-intro-03c-senso-civico-alla-guida`;
- `g1-intro-03d-il-problema-vero-non-sei-solo-tu`;
- `g1-intro-03e-prevenire-urgenza-prima-di-partire`;
- `g1-intro-04-mettiamoci-alla-prova`.

Nel file pubblicato `intro-slide3b-ci-hai-mai-fatto-caso.js` il titolo risulta:

`Hai mai notato questa cosa?`

La slide `Quando la colpa diventa "sfiga"` non risulta presente nel pacchetto pubblicato su `main`.

Nota prudente: in questo intervento e stato letto il ramo remoto `main` e il relativo contenuto Git locale. Non e stata eseguita una nuova verifica visiva live di GitHub Pages.

## PRESENTE LOCALMENTE MA NON ANCORA PUBBLICATO
Nel ramo di lavoro e presente la slide:

`g1-intro-03b2-quando-la-colpa-diventa-sfiga`

Titolo:

`Quando la colpa diventa "sfiga"`

Questa slide e presente in:
- `v2/src/course/pilotSlides.ts`;
- `v2/src/components/slides/DoubleStandardSlide.tsx`;
- `v2/src/components/slides/DoubleStandardSlide.module.css`;
- `v2/legacy-publish/intro-slide3b2-quando-la-colpa-diventa-sfiga.js`;
- `v2/legacy-publish/manifest.json`;
- `v2/tests/e2e/double-standard.spec.ts`;
- `v2/tests/e2e/legacy-teacher-fit.spec.ts`;
- `v2/tests/e2e/intro-layout-standard.spec.ts`.

Sono presenti localmente anche rifiniture non pubblicate su:
- standard generale di impaginazione;
- centratura della modalita aula;
- distribuzione verticale della modalita docente;
- sfondo stradale piu visibile;
- spazio di respiro tra titolo e contenuto;
- adattamento V2 tramite `SlideFrame`, `AudienceFit` e `CourseShell`;
- adattamento legacy tramite `intro-layout-standard.css`, `audience-fit-fix.js` e `teacher-fit-fix.js`;
- manifest legacy con `styles` e `runtimeScripts`;
- validazione e sincronizzazione legacy aggiornate per includere fogli stile e script runtime;
- nuovi controlli Playwright per lo standard introduttivo.

Modifiche locali gia presenti prima di questo aggiornamento documentale:
- molti file modificati in `v2/legacy-publish/`;
- modifiche a `v2/scripts/sync-legacy-publish.mjs`;
- modifiche a `v2/scripts/validate-legacy-publish.mjs`;
- modifiche a componenti e CSS V2 comuni e di slide;
- modifica a `v2/tests/e2e/legacy-teacher-fit.spec.ts`;
- nuovi file non tracciati: `v2/legacy-publish/audience-fit-fix.js`, `v2/legacy-publish/intro-layout-standard.css`, `v2/legacy-publish/teacher-fit-fix.js`, `v2/tests/e2e/intro-layout-standard.spec.ts`.

Questo intervento aggiunge o aggiorna solo:
- `AGENTS.md`;
- `01_CODEX_START_HERE.md`;
- `02_STANDARD_GRAFICO_E_IMPAGINAZIONE.md`;
- `03_PROJECT_STATUS.md`.

Queste modifiche documentali sono locali finche l'utente non autorizza eventuali passaggi Git o pubblicazione.

## SLIDE APPROVATE
Da trattare come approvate e gia pubblicate secondo la pubblicazione `50e6cfd`:
- `g1-intro-02-differenza` — `La differenza e questa`;
- `g1-intro-03-frasi-che-sentiamo` — `Le frasi che sentiamo piu spesso`;
- `g1-intro-03b-ci-hai-mai-fatto-caso` — `Hai mai notato questa cosa?`;
- `g1-intro-03c-senso-civico-alla-guida` — `Il senso civico alla guida: questo sconosciuto`;
- `g1-intro-03d-il-problema-vero-non-sei-solo-tu` — `Il problema vero non sei solo tu`;
- `g1-intro-03e-prevenire-urgenza-prima-di-partire` — `Prevenire l'urgenza prima di partire`;
- `g1-intro-04-mettiamoci-alla-prova` — `Mettiamoci alla prova`.

Non modificare i testi approvati senza richiesta esplicita.

## SLIDE IN REVISIONE
Slide presente nel ramo di lavoro ma non ancora pubblicata:

- `g1-intro-03b2-quando-la-colpa-diventa-sfiga` — `Quando la colpa diventa "sfiga"`.

Prima di pubblicarla servono verifica finale, approvazione utente e procedura di pubblicazione prevista.

## LAVORI APERTI
- Completare la verifica visiva delle ultime rifiniture.
- Approvare lo standard grafico e di impaginazione.
- Solo successivamente decidere la pubblicazione.
- Non pubblicare senza approvazione esplicita.
- Dopo la stabilizzazione, riprendere la progettazione delle nuove slide.

## PROSSIMO INTERVENTO
Prossimo tema didattico previsto:

`EGOCENTRISMO ALLA GUIDA`

Il tema dovra collegare concetti come:
- nostre scuse;
- doppio standard;
- convinzione di essere piu bravi degli altri;
- subordinazione del rischio alle nostre esigenze personali;
- utilizzo del telefono;
- fretta;
- velocita;
- sorpassi azzardati;
- senso civico;
- prevalenza dell'interesse personale sul buon senso.

Non creare ancora questa slide. Registrare soltanto che e il prossimo tema previsto.

## CONTROLLI
Suite Playwright presente nei file:

40 test effettivi ricavabili staticamente, includendo i test parametrizzati.

Test non eseguiti in questo intervento.

Prima della pubblicazione servono:
- validazione legacy;
- build V2;
- test Playwright;
- controllo screenshot se il lavoro riguarda grafica o layout;
- verifica finale online.

## CONTRADDIZIONI O NOTE
Il vecchio `PROJECT_STATUS.md` presente su `main` contiene informazioni superate, tra cui il vecchio titolo `C'hai mai fatto caso?`.

Il contenuto pubblicato dello script della slide conferma invece il titolo aggiornato:

`Hai mai notato questa cosa?`

Nella root corrente del ramo di lavoro `PROJECT_STATUS.md` non e presente. Da ora lo stato operativo aggiornato deve stare in `03_PROJECT_STATUS.md`.
