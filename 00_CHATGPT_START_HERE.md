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

## 5. Regola V2 / programma completo — PUBBLICAZIONE UNICA
- La V2 è la sorgente definitiva delle nuove slide.
- Il programma completo legacy NON va più usato per progettare nuove slide.
- Ogni nuova slide V2 deve avere, già durante lo sviluppo, anche la propria copia tecnica destinata al programma completo dentro `v2/legacy-publish/` e la relativa voce nel manifest.
- Un controllo automatico verifica che nessuna slide V2 possa arrivare alla pubblicazione senza la propria copia per il programma completo.
- Lo stesso controllo verifica anche che l’ordine delle slide nel pacchetto del programma completo coincida con l’ordine V2, così una slide non può finire nel punto sbagliato.
- Quando l’utente dice **“pubblica”**, deve partire UN SOLO processo: controlli → V2 online → sincronizzazione automatica del programma completo → aggiornamento di `main`.
- NON eseguire più una seconda sincronizzazione manuale dopo la pubblicazione: il programma completo deve essere aggiornato dallo stesso processo.
- ChatGPT deve comunque attendere che GitHub Pages risulti completato con successo prima di dire all’utente che la pubblicazione è effettivamente online.
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

## 8 bis. Regola di impaginazione — EQUILIBRIO VISIVO
- Non allineare automaticamente tutto a sinistra. Valutare sempre l’equilibrio dell’intera slide e l’uso dello spazio libero.
- Titoli brevi, autonomi e di forte impatto possono e spesso devono essere centrati quando l’allineamento a sinistra lascia molto spazio vuoto a destra.
- Messaggi conclusivi, callout e frasi-sintesi brevi possono essere centrati dentro il loro riquadro, soprattutto se il contenuto occupa poche righe e rimane molto spazio inutilizzato su un lato.
- Testi narrativi o più lunghi restano normalmente allineati a sinistra, perché così sono più leggibili.
- La regola non è “centrare tutto”, ma evitare composizioni sbilanciate: ogni elemento importante deve occupare lo spazio in modo intenzionale e visivamente equilibrato.
- Prima di approvare una slide, controllare espressamente: spazio vuoto a destra/sinistra, centratura dei titoli brevi, equilibrio dei riquadri finali e distribuzione complessiva nel formato 16:9.

## 8 ter. Interazioni riutilizzabili — RIVELAZIONE PROGRESSIVA
- È disponibile un modello V2 riutilizzabile `progressive-reveal` per slide con contenuti da far comparire uno alla volta.
- Il testo introduttivo resta visibile; i riquadri dei passaggi sono presenti fin dall’inizio ma con contenuto nascosto.
- Cliccando un passaggio, quel contenuto e tutti i precedenti diventano visibili e restano aperti.
- Il riquadro conclusivo può essere usato come ultimo passaggio forte.
- Il reset dell’interazione riporta la slide allo stato iniziale.
- Quando didatticamente utile, preferire questo modello a una slide sovraccarica di testo già tutto visibile.

## 9. URL principali
Programma completo legacy:
`https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/`

V2 preview:
`https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/v2-preview/`

## 10. Ripartenza rapida nuova chat
Messaggio consigliato:
“Leggi integralmente le Fonti `00_CHATGPT_START_HERE.md` e `PROJECT_STATUS.md` del progetto Recupero Punti Autoscuola Max. Considera `PROJECT_STATUS.md` lo stato operativo più recente. Non modificare nulla prima di avermi detto: dove siamo arrivati, cosa è concluso, cosa è aperto e qual è il prossimo intervento previsto.”