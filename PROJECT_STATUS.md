# Autoscuola Max — Corso Recupero Punti
## PROJECT STATUS

Stato operativo: 2 settembre 2026, dopo approvazione e pubblicazione della slide “Mettiamoci alla prova” sia nella V2 sia nel programma completo.

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

Programma completo:
`https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/`

V2 preview:
`https://maxmax1000-pixel.github.io/recupero-punti-autoscuola-max/v2-preview/`

## 3. Stato pubblicazione attuale
Ultimo aggiornamento applicativo del programma completo:
`dca95ca94a993a94f03dd4186b8e28cf13409f1b`

Messaggio:
`Collega Mettiamoci alla prova nel programma completo`

GitHub Pages relativo a questo aggiornamento: SUCCESS.

La V2 con “Mettiamoci alla prova” è stata pubblicata correttamente prima della sincronizzazione nel programma completo.

## 4. Branch V2 corrente
Branch di lavoro:
`codex/recupero-punti-v2-clickable-statements`

Ultimo commit di contenuto approvato per la nuova slide:
`2a0c9ad8bc2fcccbcc6bb9361a95a4490c14bed9`

Messaggio:
`FASE 4 - Introduce Mettiamoci alla prova`

Commit usato per autorizzare la pubblicazione V2:
`a664a0f0a91ab09714678a029a2a31cce851c310`

## 5. Controlli automatici
Ultima validazione V2 della FASE 4:
- build: PASS;
- test automatici: 18/18 PASS;
- screenshot: generati;
- pubblicazione V2: SUCCESS dopo approvazione utente.

Nota tecnica: GitHub Actions segnala deprecazione futura di Node 20 per alcune Actions. Non intervenire finché non diventa un problema operativo o non viene pianificata manutenzione dedicata.

## 6. Regola operativa V2 / programma completo — VINCOLANTE
- la V2 è la sorgente definitiva;
- ogni slide V2 approvata deve essere sincronizzata anche nel programma completo, nella posizione corretta;
- lo scopo è permettere al docente di avviare il programma dall’inizio e valutare continuamente fluidità, ritmo e passaggi tra schermate;
- il legacy non va usato per progettare nuove slide;
- la sincronizzazione deve essere chirurgica e non alterare altre schermate, navigazione, timer o regia docente;
- quando la migrazione V2 sarà sufficientemente completa, la V2 sostituirà il legacy.

## 7. Regola di comunicazione con l’utente — VINCOLANTE
- ChatGPT deve parlare all’utente in italiano semplice e non tecnico.
- I termini tecnici vanno tradotti o evitati.
- Prima di un passaggio tecnico spiegare sempre, in parole normali, che cosa succede e se il programma online cambierà oppure no.
- I report di Codex vanno tradotti in modo comprensibile prima di proporre il passo successivo.
- L’utente non va coinvolto in GitHub/Terminale se ChatGPT può occuparsene direttamente.
- Prompt Codex: prima spiegazione semplice all’utente, poi unico blocco tecnico copiabile.
- Operazioni UI/Terminale: una sola azione per volta.
- Per il programma online preferire URL in testo semplice da copiare, non link cliccabili in ChatGPT.

## 8. Blocco introduttivo del corso — stato attuale
Nel programma completo la sequenza iniziale è ora:
1. “Benvenuti”;
2. “Perché siete qui?” / sondaggio;
3. “Saper guidare o saper soltanto muovere un veicolo da punto A a punto B”;
4. “La differenza è questa”;
5. “Le frasi che sentiamo più spesso”;
6. “Mettiamoci alla prova”.

Il programma completo è passato da 20 a 21 schermate.

## 9. Slide approvate e pubblicate
### A. `g1-intro-02-differenza`
Titolo: `La differenza è questa`
Tipo: `comparison`
Badge: `2 di 3`
Durata: 6 minuti
Stato: APPROVATA, TESTATA, PUBBLICATA V2 e sincronizzata nel programma completo.

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
Stato: APPROVATA, TESTATA, PUBBLICATA V2 e sincronizzata nel programma completo.

Item 1:
`Eh, ma sono passati 20 anni da quando ho preso la patente...`
Risposta:
`E quindi? Non è che se tu ti dimentichi la regola smette di esistere. È tuo compito, in quanto possessore di patente, restare aggiornato sulle nuove disposizioni del Codice della Strada e non dimenticare quelle vecchie.`

Item 2:
`Eh, ma tanto lo fanno tutti...`
Risposta DEFINITIVA:
`E quindi? Se tanti sbagliano, questo rende giusto l’errore? Dobbiamo ragionare con la nostra testa o imitare gli altri?`

La formulazione con “gregge di pecore” è abolita e non va ripristinata.

Item 3:
`Sono 30 anni che ho la patente e non ho mai fatto un incidente.`
Risposta:
`Finché gli altri frenano al posto tuo, incidenti non ne fai.`

Elementi rimossi definitivamente:
- `Eh, ma io ho sempre fatto così...`
- `Eh, ma non me lo ricordavo...`
- riquadro finale `Dimenticare una regola non significa che la regola non esista più.`

### C. `g1-intro-04-mettiamoci-alla-prova`
Titolo: `Mettiamoci alla prova`
Tipo: `reveal-question`
Durata: 4 minuti
Stato: APPROVATA VISIVAMENTE, TESTATA 18/18, PUBBLICATA V2 e sincronizzata nel programma completo subito dopo “Le frasi che sentiamo più spesso”.

Domanda:
`Il rispetto delle Norme del Codice della Strada è sempre subordinato alla presenza della segnaletica?`

Risposta nascosta inizialmente:
`NO, esistono delle regole generali che dobbiamo conoscere e per le quali non è prevista la presenza dei segnali.`

Frase ponte:
`Da qui iniziamo a parlare proprio di queste regole generali.`

Comportamento:
- domanda visibile subito;
- risposta nascosta;
- pulsante “Mostra soluzione”;
- secondo click “Nascondi soluzione”;
- reset/navigazione riportano allo stato iniziale.

Implementazione legacy:
- file `intro-slide4-mettiamoci-alla-prova.js`;
- collegamento in `index.html`;
- inserimento subito dopo “Le frasi che sentiamo più spesso”;
- nessuna modifica al motore.

## 10. Intro 1
Titolo concettuale:
`Saper guidare o saper soltanto muovere un veicolo da punto A a punto B`

Testo approvato nel programma completo:
`Tra il saper guidare ed essere il classico portatore sano di veicoli, c’è una grande differenza. Qual è secondo te?`

Prompt aula:
`Dai pure liberamente la tua opinione.`

Immagine corretta: `intro-driving-final.webp`.

Stato V2: NON ANCORA MIGRATA COME SLIDE REALE V2.

## 11. Contenuti tecnici già presenti
Sono già stati costruiti diversi casi tecnici: semafori, pedoni, giallo lampeggiante, intersezioni regolate/non regolate, lanterne rosse lampeggianti, corsie reversibili.

Regola didattica:
- MODELLO A — scelta guidata A/B solo quando entrambe le alternative sono plausibili;
- MODELLO B — risposta libera quando A/B rivelerebbe troppo la soluzione.

Tutti i casi tecnici devono riportare riferimenti normativi attuali quando vengono migrati/rifiniti.

## 12. Regole di stile e UX
- dark green/black Autoscuola Max;
- pulito e professionale;
- uso aula e leggibilità a distanza prioritari;
- monitor iniziale più piccolo non ancora identificato: design responsive;
- test di riferimento attuali: 1600×900 e 1920×1080;
- non assumere 4K o 85” finché non diventano requisito tecnico della fase;
- audience mode deve usare quasi tutto il viewport;
- teacher mode mantiene controlli, note e regia;
- equilibrio visivo vincolante: non lasciare elementi importanti allineati a sinistra quando rimane molto spazio inutilizzato a destra;
- titoli brevi e autonomi possono essere centrati quando questo migliora la composizione;
- callout e messaggi conclusivi brevi possono essere centrati nel riquadro;
- testi narrativi o lunghi restano normalmente allineati a sinistra per leggibilità;
- non “centrare tutto”: scegliere l’allineamento in base a equilibrio, leggibilità e uso intenzionale dello spazio.

## 13. Regole di lavoro
- Nuove slide: anteprima prima della pubblicazione.
- Piccole correzioni su slide approvate: applicabili direttamente.
- Nessuna dichiarazione “pubblicato” prima della verifica finale online.
- Prompt Codex in un solo blocco copiabile.
- Output Codex richiesto in unico blocco `text`.
- In Terminale/UI: una sola azione per volta.

## 14. Prossimo intervento didattico
Dopo “Mettiamoci alla prova” inizia il blocco delle **regole generali del Codice della Strada**, cioè regole che il conducente deve conoscere anche quando non c’è un segnale specifico a ricordarle.

Il prossimo lavoro deve quindi progettare la prima slide di questo nuovo blocco, mantenendo la continuità didattica con la frase ponte appena approvata.

## 15. Fonti persistenti
Le Fonti sono salvate nella Libreria ChatGPT, cartella `/RECUPERO PUNTI AUTOSCUOLA MAX`, e hanno una copia nel repository:
- `00_CHATGPT_START_HERE.md`
- `01_CODEX_START_HERE.md`
- `PROJECT_STATUS.md`
