# Autoscuola Max — Corso Recupero Punti
## START HERE — Codex

Ultimo aggiornamento operativo: 2 settembre 2026.

## 1. Repository esclusivo
`maxmax1000-pixel/recupero-punti-autoscuola-max`

## 2. Regola fondamentale
NON lavorare mai da supposizioni. Prima di ogni fase:
- `git fetch origin`;
- verificare branch e SHA attesi indicati nel prompt;
- verificare `git status --short` pulito;
- fermarsi se una precondizione non coincide.

## 3. Architettura V2 approvata
Percorso: `/v2`.
Stack: React, TypeScript strict, Vite, CSS Modules, Playwright.

Vincoli permanenti:
- ID slide stabili;
- registry/order separati;
- nessun indice numerico come identità;
- nessuno `splice()` per la struttura V2;
- nessun HTML in stringhe nella V2;
- nessun `innerHTML` / `dangerouslySetInnerHTML`;
- nessuna immagine Base64;
- immagini come file reali;
- nessun CSS legato all’ID di una singola slide;
- nessuna dipendenza nuova senza autorizzazione esplicita.

## 4. V2 = sorgente definitiva
Le nuove slide vanno progettate e implementate in V2. Il programma completo legacy serve temporaneamente per permettere al docente di scorrere l’intera lezione e valutarne il flusso.

## 5. Copia automatica nel programma completo — VINCOLANTE
Ogni slide reale aggiunta a `pilotLessonOrder` DEVE avere, nello stesso lavoro:
1. un adapter legacy in `v2/legacy-publish/`;
2. una voce corrispondente in `v2/legacy-publish/manifest.json`.

Non modificare direttamente i file legacy alla radice durante lo sviluppo V2. La copia alla radice viene eseguita automaticamente solo al momento della pubblicazione approvata.

Il controllo `node scripts/validate-legacy-publish.mjs` deve passare. Se una slide V2 non ha la propria copia per il programma completo, la pubblicazione deve bloccarsi.

## 6. Pubblicazione unica
Non modificare `main` e non pubblicare senza approvazione esplicita dell’utente.

Dopo approvazione, il commit-segnale deve avere un messaggio che INIZIA con:
`Pubblica V2 approvata`

Il workflow esegue automaticamente, nello stesso passaggio:
- controlli e test V2;
- build della V2;
- pubblicazione in `/v2-preview/`;
- copia degli adapter V2 nel programma completo;
- aggiornamento automatico del blocco script in `index.html`;
- push unico su `main`.

NON fare più una seconda sincronizzazione manuale del programma completo dopo la pubblicazione.

## 7. Stato attuale
Il pilot deck contiene:
- `g1-intro-02-differenza`;
- `g1-intro-03-frasi-che-sentiamo`;
- `g1-intro-03b-ci-hai-mai-fatto-caso`;
- `g1-intro-04-mettiamoci-alla-prova`.

La suite corrente comprende 20 test Playwright.

## 8. Template V2 rilevanti
- `ComparisonSlide`;
- `ClickableStatementsSlide`;
- `RevealQuestionSlide`;
- `ObservationSlide`.

## 9. Output Codex obbligatorio
Quando richiesto dal prompt, la risposta finale deve stare interamente in un unico blocco markdown `text`, senza testo prima o dopo.

## 10. STOP
Ogni fase termina dove indicato dal prompt. Non proseguire autonomamente con altre slide, merge, pubblicazioni o refactor.
