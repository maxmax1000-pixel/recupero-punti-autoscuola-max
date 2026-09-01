# Autoscuola Max — Corso Recupero Punti
## START HERE — Codex

Ultimo aggiornamento operativo: 1 settembre 2026.

## 1. Repository esclusivo
`maxmax1000-pixel/recupero-punti-autoscuola-max`

## 2. Regola fondamentale
NON lavorare mai da supposizioni. Prima di ogni fase:
- `git fetch origin`;
- verificare branch e SHA attesi indicati nel prompt della fase;
- verificare `git status --short` pulito;
- fermarsi se una precondizione non coincide.

## 3. Architettura V2 approvata
Percorso: `/v2`

Stack:
- React
- TypeScript strict
- Vite
- CSS Modules
- Playwright

Vincoli permanenti:
- ID slide stabili;
- registry/order separati;
- nessun indice numerico come identità;
- nessuno `splice()` per la struttura V2;
- nessun HTML in stringhe;
- nessun `innerHTML`;
- nessun `dangerouslySetInnerHTML`;
- nessuna immagine Base64;
- immagini come file reali;
- nessun CSS legato all’ID di una singola slide;
- nessuna dipendenza nuova senza autorizzazione esplicita.

## 4. V2 = sorgente definitiva
Le nuove slide vanno progettate e implementate in V2. Il legacy è temporaneamente mantenuto solo come programma completo per la valutazione della fluidità. Non progettare nuove soluzioni nel legacy.

## 5. Legacy
I file legacy non vanno modificati durante normali fasi V2, salvo prompt specifico di sincronizzazione di una slide approvata. In una fase di sync legacy, modificare esclusivamente quanto autorizzato e preservare tutto il resto.

## 6. Pubblicazione
Non pubblicare, non modificare `main`, non modificare GitHub Pages e non fare merge a meno che il prompt della fase lo autorizzi esplicitamente.

La pubblicazione della V2 preview è gestita tramite workflow GitHub Actions e deve avvenire solo dopo approvazione esplicita dell’utente.

## 7. Stato CI attuale
La suite V2 comprende 15 test Playwright dopo l’introduzione del template `clickable-statements`.

Le slide V2 reali attualmente nel pilot deck sono:
- `g1-intro-02-differenza`
- `g1-intro-03-frasi-che-sentiamo`

## 8. Template V2 già implementati rilevanti
- `ComparisonSlide`
- `ClickableStatementsSlide`

Il template `ClickableStatementsSlide` supporta:
- statement cliccabili;
- massimo una risposta aperta alla volta;
- click sullo stesso item per richiuderlo;
- `button`, `aria-expanded`, `aria-controls`;
- layout audience responsive.

## 9. Output Codex obbligatorio
Quando il prompt lo richiede, la risposta finale deve essere interamente dentro un unico blocco:

```text
...
```

Nulla prima. Nulla dopo.

## 10. STOP
Ogni fase termina dove indicato dal prompt. Non proseguire autonomamente con slide, merge, pubblicazioni o refactor successivi.
