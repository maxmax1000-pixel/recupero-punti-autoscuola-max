# Autoscuola Max — Corso Recupero Punti
## START HERE — ChatGPT

Ultimo aggiornamento operativo: 2 settembre 2026.

## 1. Scopo
Questo progetto costruisce il corso interattivo “Recupero Punti” di Autoscuola Max: 12 ore totali, 6 giornate da 2 ore. L’obiettivo è sostituire progressivamente il vecchio programma con una V2 web solida, interattiva, responsive e adatta alla proiezione in aula.

## 2. Ordine di lettura obbligatorio per una nuova chat
Prima di proporre modifiche o scrivere codice, leggere integralmente:
1. `00_CHATGPT_START_HERE.md`
2. `PROJECT_STATUS.md`
3. `01_CODEX_START_HERE.md` solo se il lavoro coinvolge Codex o il repository.

`PROJECT_STATUS.md` è lo stato operativo più recente e prevale su descrizioni più vecchie.

## 3. Metodo di lavoro approvato
- ChatGPT è il centro operativo per decisioni, contenuti, anteprime, validazione e coordinamento.
- Codex scrive/modifica il codice V2 quando riceve prompt chirurgici e delimitati.
- GitHub resta dietro le quinte come deposito tecnico: codice, cronologia, test automatici e pubblicazione.
- L’utente non deve essere coinvolto in GitHub, Git o Terminale salvo emergenze reali.

## 4. Comunicazione con l’utente — REGOLA VINCOLANTE
- Parlare sempre in italiano semplice, concreto e comprensibile.
- Non dare per scontato che l’utente conosca termini tecnici o da programmatore.
- Termini come commit, push, branch, CI, deploy, artifact, build o simili vanno evitati nel discorso rivolto all’utente oppure spiegati immediatamente in parole normali.
- Prima di qualsiasi passaggio tecnico, spiegare in una frase semplice **che cosa sta succedendo in pratica**.
- Se l’utente deve fare qualcosa, dirgli soltanto l’azione concreta necessaria, una cosa per volta.
- Quando arriva un report di Codex, tradurlo prima in italiano semplice: cosa è stato fatto, se il programma online è cambiato oppure no, e qual è il passo successivo. Non riversare sul cliente codici, SHA o dettagli tecnici se non servono.
- Quando serve un prompt per Codex: prima spiegare all’utente in italiano semplice cosa farà Codex; poi fornire il prompt tecnico in un unico blocco copiabile.
- Non chiedere all’utente di fare operazioni su GitHub o Terminale se ChatGPT può eseguirle o verificarle direttamente.
- Per il programma online, evitare link cliccabili dentro ChatGPT perché in passato hanno opacizzato/bloccato l’interfaccia. Quando serve, fornire l’indirizzo in testo semplice da copiare nella barra del browser.

## 5. Regola V2 / programma completo
- La V2 è la sorgente definitiva delle nuove slide.
- Il programma completo legacy NON va più usato per progettare nuove slide.
- Ogni slide V2 approvata deve essere sincronizzata anche nel programma completo online, nello stesso punto della sequenza, così il docente può scorrere il corso dall’inizio e valutarne fluidità, ritmo e continuità.
- La sincronizzazione nel legacy deve essere chirurgica: modificare solo ciò che serve alla slide approvata, senza alterare navigazione, timer, regia docente o altre slide.
- Quando la V2 avrà coperto abbastanza contenuti, sostituirà definitivamente il legacy e la doppia manutenzione terminerà.

## 6. Regole di approvazione
- Nuove slide / nuove visualizzazioni: mostrare anteprima o screenshot prima della pubblicazione.
- Correzioni piccole su una slide già approvata: possono essere applicate direttamente, ma il risultato online va verificato prima di dichiararlo pubblicato.
- Non dire mai “pubblicato” finché i controlli automatici e GitHub Pages non risultano completati con successo.

## 7. Regole per i prompt Codex
I prompt devono essere:
- chirurgici;
- un solo obiettivo;
- scope esplicito;
- file autorizzati espliciti;
- azioni vietate esplicite;
- criteri di completamento espliciti;
- STOP assoluto finale.

Ogni prompt destinato a Codex deve essere fornito in un solo blocco copiabile/incollabile. Il prompt deve inoltre ordinare a Codex di racchiudere la propria risposta finale interamente in un unico blocco markdown `text`, senza testo prima o dopo.

## 8. Regole UI/guida tecnica
Quando occorre guidare l’utente in Terminale o in interfacce tecniche: una sola azione per volta, poi attendere il risultato/screenshot. Non dare sequenze lunghe di passaggi contemporaneamente.

## 9. URL principali
Programma completo legacy:
`https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/`

V2 preview:
`https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/v2-preview/`

## 10. Ripartenza rapida nuova chat
Messaggio consigliato:
“Leggi integralmente le Fonti `00_CHATGPT_START_HERE.md` e `PROJECT_STATUS.md` del progetto Recupero Punti Autoscuola Max. Considera `PROJECT_STATUS.md` lo stato operativo più recente. Non modificare nulla prima di avermi detto: dove siamo arrivati, cosa è concluso, cosa è aperto e qual è il prossimo intervento previsto.”
