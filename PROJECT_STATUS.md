# Autoscuola Max — Corso Recupero Punti
## PROJECT STATUS

Stato operativo: 1 settembre 2026, dopo approvazione e pubblicazione V2 della slide intro 3.

## 1. Obiettivo del progetto
Corso Recupero Punti interattivo di Autoscuola Max:
- 12 ore totali;
- 6 giornate;
- 2 ore per giornata;
- utilizzo in aula su monitor 16:9; monitor attuale LG di dimensione/risoluzione non ancora rilevate; in futuro display più grande;
- priorità: leggibilità da aula, interazione, ragionamento, ritmo della lezione.

## 2. Repository e siti
Repository:
`maxmax1000-pixel/recupero-punti-autoscuola-max`

Programma completo legacy:
https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/

V2 preview:
https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/v2-preview/

V2 intro 3 diretta:
https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/v2-preview/?deck=pilot&mode=audience&slide=g1-intro-03-frasi-che-sentiamo

## 3. Main e pubblicazione
Main applicativo dopo la sincronizzazione legacy intro 3:
`6419d24c2106fb68a64a81be3ca2850b10cacd75`

Commit:
`Collega sync legacy intro 3`

Questo pacchetto ha aggiunto le tre Fonti di progetto, `intro-slide3-clickable.js` e una sola riga di collegamento in `index.html`. Le altre 19 schermate legacy e il motore non sono stati modificati.

GitHub Pages relativo al commit applicativo sopra: SUCCESS. Un eventuale commit successivo di solo `PROJECT_STATUS.md` è documentale e non modifica il programma.

## 4. Branch V2 corrente
Branch di lavoro più recente:
`codex/recupero-punti-v2-clickable-statements`

Commit di pubblicazione/trigger più recente sul branch:
`d1d1bec41423aa264e46df0986ab833b8ce10401`

Ultimo commit di contenuto/grafica approvato prima del trigger:
`4f35225882a42aa87933efbad5d2b1ce9263656f`

Messaggio:
`FASE 3A - Rifinisce impaginazione frasi cliccabili`

## 5. CI
Workflow:
`V2 Foundation CI`

Ultima validazione prima della pubblicazione:
- build: PASS;
- Playwright: 15/15 PASS;
- screenshot: generati;
- pubblicazione V2 preview: SUCCESS dopo approvazione utente.

Nota tecnica: GitHub Actions segnala deprecazione futura di Node 20 per alcune Actions, ma al momento i job sono conclusi con successo. Non intervenire finché non diventa un problema operativo o non viene pianificata una manutenzione dedicata.

## 6. Regola operativa V2 / legacy — NUOVA E VINCOLANTE
Decisione utente del 1 settembre 2026:
- la V2 è la sorgente definitiva;
- ogni slide V2 approvata deve essere sincronizzata anche nel programma completo legacy, nella posizione corretta;
- scopo: permettere al docente di avviare il programma dall’inizio e valutare continuamente fluidità, ritmo e passaggi tra schermate;
- il legacy non va più usato per progettare nuove slide;
- la sincronizzazione deve essere chirurgica e non alterare altre schermate, navigazione, timer o regia docente;
- quando la migrazione V2 sarà sufficientemente completa, la V2 sostituirà il legacy e la doppia manutenzione terminerà.

## 7. Blocco introduttivo del corso
Nel programma completo l’apertura prevista è:
1. slide esistente “Benvenuti”;
2. slide esistente “Perché siete qui?” / sondaggio;
3. intro 1 — “Saper guidare o saper soltanto muovere un veicolo da punto A a punto B”;
4. intro 2 — “La differenza è questa”;
5. intro 3 — “Le frasi che sentiamo più spesso”.

## 8. Slide V2 reali approvate
### A. `g1-intro-02-differenza`
Titolo: `La differenza è questa`
Tipo: `comparison`
Badge: `2 di 3`
Durata: 6 minuti
Stato: APPROVATA VISIVAMENTE, TESTATA, PUBBLICATA V2.

Contenuto:
MUOVERE UN VEICOLO:
- partire
- accelerare
- frenare
- sterzare
- parcheggiare
- arrivare dove serve

SAPER GUIDARE:
- conoscere le norme
- leggere la strada e la situazione
- prevedere i rischi e gli altri utenti
- adattare il comportamento
- guidare in sicurezza anche quando nessuno controlla

Conclusione:
“Molti conducenti sanno spostare un veicolo.”
“Non tutti sanno davvero guidare.”

### B. `g1-intro-03-frasi-che-sentiamo`
Titolo: `Le frasi che sentiamo più spesso`
Tipo: `clickable-statements`
Badge: `3 di 3`
Durata: 5 minuti
Stato: APPROVATA VISIVAMENTE, TESTATA 15/15, PUBBLICATA V2.

Comportamento:
- 3 statement cliccabili;
- nessuna risposta aperta all’avvio;
- massimo una risposta aperta alla volta;
- click sullo stesso statement = chiusura;
- accessibilità con button / aria-expanded / aria-controls.

Item 1:
Statement: `Eh, ma sono passati 20 anni da quando ho preso la patente...`
Risposta: `E quindi? Non è che se tu ti dimentichi la regola smette di esistere. È tuo compito, in quanto possessore di patente, restare aggiornato sulle nuove disposizioni del Codice della Strada e non dimenticare quelle vecchie.`

Item 2:
Statement: `Eh, ma tanto lo fanno tutti...`
Risposta DEFINITIVA: `E quindi? Se tanti sbagliano, questo rende giusto l’errore? Dobbiamo ragionare con la nostra testa o imitare gli altri?`

La precedente formulazione con “gregge di pecore” è abolita e non va ripristinata.

Item 3:
Statement: `Sono 30 anni che ho la patente e non ho mai fatto un incidente.`
Risposta: `Finché gli altri frenano al posto tuo, incidenti non ne fai.`

Elementi rimossi definitivamente dalla slide:
- `Eh, ma io ho sempre fatto così...`
- `Eh, ma non me lo ricordavo...`
- riquadro finale `Dimenticare una regola non significa che la regola non esista più.`

## 9. Intro 1
Titolo concettuale:
`Saper guidare o saper soltanto muovere un veicolo da punto A a punto B`

Testo approvato nel legacy:
`Tra il saper guidare ed essere il classico portatore sano di veicoli, c’è una grande differenza. Qual è secondo te?`
Prompt aula:
`Dai pure liberamente la tua opinione.`

Immagine legacy corretta: `intro-driving-final.webp`.

Stato V2: NON ANCORA MIGRATA COME SLIDE REALE V2.

## 10. Programma legacy
Il legacy contiene 20 schermate ed è attualmente il programma completo usato per valutare il flusso complessivo.

La slide 5 legacy “Le frasi che sentiamo più spesso” è SINCRONIZZATA con la versione approvata a 3 frasi cliccabili.

Implementazione legacy:
- file `intro-slide3-clickable.js`;
- collegamento in `index.html` dopo `intro-slide2-v2.js`;
- usa `state.caseSelection`, già sincronizzato con lo schermo aula;
- click sullo stesso item richiude la risposta;
- cambio slide / reset interazione azzerano lo stato tramite il motore esistente;
- nessuna modifica a `app-core.js` o `app-runtime.js`.

Stato deploy: GitHub Pages SUCCESS.

PROSSIMO INTERVENTO OPERATIVO:
Aprire il programma completo dall’inizio e valutare fluidità e ritmo del blocco introduttivo con la slide 5 aggiornata. Raccogliere eventuali correzioni prima di scegliere la prossima slide da migrare in V2.

## 11. Contenuti tecnici legacy già presenti
Sono già stati costruiti diversi casi tecnici (semafori, pedoni, giallo lampeggiante, intersezioni regolate/non regolate, lanterne rosse lampeggianti, corsie reversibili). La migrazione V2 di questi casi non è ancora il focus immediato.

Regola didattica:
- MODELLO A — scelta guidata A/B solo quando entrambe le alternative sono plausibili;
- MODELLO B — risposta libera quando A/B rivelerebbe troppo la soluzione.

Tutti i casi tecnici devono riportare riferimenti normativi attuali quando vengono migrati/rifiniti.

## 12. Regole di stile e UX
- dark green/black Autoscuola Max;
- pulito e professionale;
- uso aula e leggibilità a distanza prioritari;
- monitor iniziale più piccolo non ancora identificato: usare design responsive;
- test di riferimento attuali: 1600×900 e 1920×1080;
- non assumere 4K o 85” finché non vengono definiti come requisito tecnico della fase;
- audience mode deve usare quasi tutto il viewport;
- teacher mode mantiene controlli, note e regia.

## 13. Regole di lavoro
- Nuove slide: anteprima prima della pubblicazione.
- Piccole correzioni su slide approvate: applicabili direttamente.
- Nessuna dichiarazione “pubblicato” prima di CI + Pages SUCCESS.
- Prompt Codex in un solo blocco copiabile.
- Output Codex richiesto in unico blocco `text`.
- In Terminale/UI: una sola azione per volta.

## 14. Prossimi passi
Ordine suggerito:
1. verificare il flusso completo dall’inizio con la slide 5 aggiornata;
2. raccogliere eventuali correzioni di fluidità del blocco introduttivo;
3. decidere se migrare in V2 l’intro 1 (`1 di 3`) oppure procedere alla prima slide/caso successivo da rendere V2;
4. continuare ciclo: V2 → screenshot/CI → approvazione → pubblicazione V2 → sincronizzazione legacy completa.

## 15. Fonti persistenti
Le tre Fonti sono salvate nella Libreria ChatGPT, cartella `/RECUPERO PUNTI AUTOSCUOLA MAX`, e hanno una copia nel repository:
- `00_CHATGPT_START_HERE.md`
- `01_CODEX_START_HERE.md`
- `PROJECT_STATUS.md`
