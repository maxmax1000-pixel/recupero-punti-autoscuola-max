# Autoscuola Max — Corso Recupero Punti
## START HERE — ChatGPT

Ultimo aggiornamento operativo: 1 settembre 2026.

## 1. Scopo
Questo progetto costruisce il corso interattivo “Recupero Punti” di Autoscuola Max: 12 ore totali, 6 giornate da 2 ore. L’obiettivo è sostituire progressivamente il vecchio programma/slide con una V2 web solida, interattiva, responsive e adatta alla proiezione in aula.

## 2. Ordine di lettura obbligatorio per una nuova chat
Prima di proporre modifiche o scrivere codice, leggere integralmente:
1. `00_CHATGPT_START_HERE.md`
2. `PROJECT_STATUS.md`
3. `01_CODEX_START_HERE.md` solo se il lavoro coinvolge Codex o il repository.

`PROJECT_STATUS.md` è lo stato operativo più recente e prevale su descrizioni più vecchie.

## 3. Metodo di lavoro approvato
- ChatGPT è il centro operativo per decisioni, contenuti, anteprime, validazione e coordinamento.
- Codex scrive/modifica il codice V2 quando riceve prompt chirurgici e delimitati.
- GitHub è il deposito tecnico: codice, commit, branch, CI, artifact e pubblicazione GitHub Pages.
- L’utente non deve essere coinvolto in Git/Terminale salvo emergenze reali.

## 4. Regola V2 / programma completo
- La V2 è la sorgente definitiva delle nuove slide.
- Il legacy NON va più usato per progettare nuove slide.
- Ogni slide V2 approvata deve essere sincronizzata anche nel programma completo online, nello stesso punto della sequenza, in modo che il docente possa scorrere il corso dall’inizio e valutarne fluidità, ritmo e continuità.
- La sincronizzazione nel legacy deve essere chirurgica: modificare solo la slide approvata, senza alterare navigazione, timer, regia docente o altre slide.
- Quando la V2 avrà coperto abbastanza contenuti, sostituirà definitivamente il legacy e la doppia manutenzione terminerà.

## 5. Regole di approvazione
- Nuove slide / nuove visualizzazioni: mostrare anteprima o screenshot CI prima della pubblicazione.
- Correzioni piccole su una slide già approvata: possono essere applicate direttamente, ma il deploy deve essere verificato prima di dichiararle online.
- Non dire mai “pubblicato” finché commit, CI e GitHub Pages non risultano completati con successo.

## 6. Regole per i prompt Codex
I prompt devono essere:
- chirurgici;
- un solo obiettivo;
- scope esplicito;
- file autorizzati espliciti;
- azioni vietate esplicite;
- criteri di completamento espliciti;
- STOP assoluto finale.

Ogni prompt destinato a Codex deve essere fornito in un solo blocco copiabile/incollabile. Il prompt deve inoltre ordinare a Codex di racchiudere la propria risposta finale interamente in un unico blocco markdown `text`, senza testo prima o dopo.

## 7. Regole UI/guida tecnica
Quando occorre guidare l’utente in Terminale o in interfacce tecniche: una sola azione per volta, poi attendere il risultato/screenshot. Non dare sequenze lunghe di passaggi contemporaneamente.

## 8. URL principali
Programma completo legacy:
https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/

V2 preview:
https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/v2-preview/

## 9. Ripartenza rapida nuova chat
Messaggio consigliato:
“Leggi integralmente le Fonti `00_CHATGPT_START_HERE.md` e `PROJECT_STATUS.md` del progetto Recupero Punti Autoscuola Max. Considera `PROJECT_STATUS.md` lo stato operativo più recente. Non modificare nulla prima di avermi detto: dove siamo arrivati, cosa è concluso, cosa è aperto e qual è il prossimo intervento previsto.”
