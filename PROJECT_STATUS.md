# Autoscuola Max — Corso Recupero Punti
## PROJECT STATUS

Stato operativo: 2 settembre 2026, dopo approvazione e pubblicazione delle due slide sul senso civico e introduzione del template riutilizzabile a rivelazione progressiva.

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
È attivo il nuovo sistema di **pubblicazione unica**.

Ultimo aggiornamento applicativo generato dal nuovo automatismo:
`dcb86de6eb0a9cbca5a3c5e07a646e16b32d54de`

Messaggio:
`Pubblica V2 e sincronizza programma completo`

Commit-segnale che ha attivato e collaudato il nuovo sistema:
`9582c247ca43afca2f1835d6a847f8179a23c2ce`

Da ora il comando concettuale “PUBBLICA” significa: controllare la V2, pubblicare la V2, sincronizzare nello stesso passaggio il programma completo e poi verificare GitHub Pages. Non deve più esistere una seconda sincronizzazione manuale separata.

## 4. Branch V2 corrente
Branch di lavoro:
`codex/recupero-punti-v2-clickable-statements`

Stato più recente pubblicato del branch:
`9582c247ca43afca2f1835d6a847f8179a23c2ce`

Nuove slide sul senso civico:
- `g1-intro-03c-senso-civico-alla-guida`;
- `g1-intro-03d-il-problema-vero-non-sei-solo-tu`.

## 5. Controlli automatici
Stato dopo l’introduzione delle due slide sul senso civico:
- build: PASS;
- test automatici: PASS, inclusi i test della rivelazione progressiva;
- screenshot a 1600×900 e 1920×1080: generati e approvati;
- controllo presenza e ordine copia programma completo: PASS;
- pubblicazione unica V2 + programma completo: PASS;
- GitHub Pages: SUCCESS.

Il controllo `validate-legacy-publish.mjs` blocca il processo se una slide presente nel pilot V2 non ha il proprio adapter per il programma completo.

Nota tecnica: GitHub Actions segnala deprecazione futura di Node 20 per alcune Actions. Non intervenire finché non diventa un problema operativo o non viene pianificata manutenzione dedicata.

## 6. Regola operativa V2 / programma completo — VINCOLANTE
- la V2 è la sorgente definitiva;
- ogni slide reale V2 deve avere anche un adapter in `v2/legacy-publish/` e una voce nel manifest prima di poter essere pubblicata;
- quando l’utente approva e dice “pubblica”, un solo processo aggiorna sia `/v2-preview/` sia il programma completo;
- non effettuare più una seconda sincronizzazione manuale separata;
- se manca la copia per il programma completo, i controlli devono fallire e la pubblicazione non deve partire;
- l’ordine del manifest deve coincidere esattamente con l’ordine V2 (`pilotLessonOrder`), altrimenti la pubblicazione viene bloccata;
- ChatGPT dichiara “pubblicato” solo dopo la conferma finale di GitHub Pages;
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
6. “C’hai mai fatto caso?”;
7. “Il senso civico alla guida: questo sconosciuto”;
8. “Il problema vero non sei solo tu”;
9. “Mettiamoci alla prova”.

Il programma completo contiene ora 24 schermate.

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

### C. `g1-intro-03b-ci-hai-mai-fatto-caso`
Titolo: `C’hai mai fatto caso?`
Tipo: `observation`
Durata: 6 minuti
Stato: APPROVATA VISIVAMENTE, TESTATA, PUBBLICATA V2 e sincronizzata nel programma completo subito dopo “Le frasi che sentiamo più spesso”.

Concetto:
- chi va più piano di noi viene percepito come troppo lento;
- chi va più veloce di noi viene percepito come troppo veloce;
- la velocità corretta non dipende dalla nostra percezione personale;
- bisogna considerare limite, struttura della strada, condizioni del veicolo e visibilità;
- conclusione: queste attenzioni NON SONO OPTIONAL e distinguono l’essere un vero autista dal semplice “portatore sano di veicoli”.

Impaginazione approvata:
- titolo breve centrato;
- testi narrativi allineati a sinistra;
- messaggio conclusivo centrato nel riquadro verde;
- equilibrio visivo 16:9.

### D. `g1-intro-03c-senso-civico-alla-guida`
Titolo: `Il senso civico alla guida: questo sconosciuto`
Tipo: `message-cards`
Durata: 5 minuti
Stato: APPROVATA VISIVAMENTE, TESTATA, PUBBLICATA V2 e sincronizzata nel programma completo.

Contenuto:
- rispetto delle incertezze e difficoltà degli altri utenti;
- `LA STRADA NON È SOLO TUA`;
- `LE TUE URGENZE NON VALGONO PIÙ DI QUELLE DEGLI ALTRI`;
- `GUIDARE NON SIGNIFICA RISPONDERE AL TELEFONO`;
- `ESSERE SICURI NON SIGNIFICA ESSERE ARROGANTI`.

Conclusione:
`Il senso civico fa parte della differenza tra l’essere un vero autista o un semplice portatore sano di veicoli.`

### E. `g1-intro-03d-il-problema-vero-non-sei-solo-tu`
Titolo: `Il problema vero non sei solo tu`
Tipo: `progressive-reveal`
Durata: 5 minuti
Stato: APPROVATA VISIVAMENTE, TESTATA, PUBBLICATA V2 e sincronizzata nel programma completo.

Comportamento DEFINITIVO:
- testo introduttivo sempre visibile;
- quattro riquadri predisposti fin dall’inizio con contenuto nascosto;
- click progressivi e cumulativi: ciò che è già aperto resta visibile;
- cliccando un passaggio successivo si aprono anche i precedenti;
- reset riporta tutto allo stato iniziale;
- lo stesso schema è un template riutilizzabile per future slide.

Passaggi:
1. `NON DECIDI SOLO PER TE`;
2. `PUOI ROVINARE VITE ALTRUI`;
3. `QUESTO EGOISMO VA ELIMINATO`;
4. chiusura forte:
`Un comportamento irresponsabile può cambiare la vita di una persona, di una famiglia, per sempre.`

### F. `g1-intro-04-mettiamoci-alla-prova`
Titolo: `Mettiamoci alla prova`
Tipo: `reveal-question`
Durata: 4 minuti
Stato: APPROVATA VISIVAMENTE, TESTATA, PUBBLICATA V2 e sincronizzata nel programma completo subito dopo “Il problema vero non sei solo tu”.

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
- inserimento subito dopo “Il problema vero non sei solo tu”;
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
Il blocco sul senso civico è concluso e pubblicato. L’ordine approvato prima di “Mettiamoci alla prova” è:
`C’hai mai fatto caso? → Il senso civico alla guida: questo sconosciuto → Il problema vero non sei solo tu → Mettiamoci alla prova`.

Il prossimo lavoro può proseguire dal ponte di “Mettiamoci alla prova” verso le regole generali del Codice della Strada, salvo ulteriori integrazioni introduttive richieste dall’utente.

## 15. Fonti persistenti
Le Fonti sono salvate nella Libreria ChatGPT, cartella `/RECUPERO PUNTI AUTOSCUOLA MAX`, e hanno una copia nel repository:
- `00_CHATGPT_START_HERE.md`
- `01_CODEX_START_HERE.md`
- `PROJECT_STATUS.md`