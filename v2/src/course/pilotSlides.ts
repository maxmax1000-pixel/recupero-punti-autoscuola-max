import type { SlideData, SlideId } from "../core/slideTypes";

export const pilotSlides: readonly SlideData[] = [
  {
    id: "g1-intro-02-differenza",
    type: "comparison",
    title: "La differenza è questa",
    durationMinutes: 6,
    sectionBadge: "2 di 3",
    teacherNotes:
      "Questa è la risposta alla domanda precedente. Non presentarla come una critica personale. Il concetto è: la capacità tecnica di controllare il mezzo è necessaria, ma da sola non basta. Saper guidare comprende anche conoscenza delle norme, lettura della situazione, previsione e adattamento del comportamento.",
    left: {
      title: "MUOVERE UN VEICOLO",
      tone: "danger",
      icon: "car",
      items: [
        "partire",
        "accelerare",
        "frenare",
        "sterzare",
        "parcheggiare",
        "arrivare dove serve",
      ],
    },
    right: {
      title: "SAPER GUIDARE",
      tone: "success",
      icon: "steering-wheel",
      items: [
        "conoscere le norme",
        "leggere la strada e la situazione",
        "prevedere i rischi e gli altri utenti",
        "adattare il comportamento",
        "guidare in sicurezza anche quando nessuno controlla",
      ],
    },
    conclusion: "Molti conducenti sanno spostare un veicolo.",
    conclusionEmphasis: "Non tutti sanno davvero guidare.",
  },
  {
    id: "g1-intro-03-frasi-che-sentiamo",
    type: "clickable-statements",
    title: "Le frasi che sentiamo più spesso",
    durationMinutes: 5,
    sectionBadge: "3 di 3",
    teacherNotes:
      "Queste sono obiezioni che probabilmente sentirai anche durante il corso. Leggile senza polemica. Chiedi alla classe se almeno una volta ne ha pronunciata una. Lascia qualche secondo per le risposte prima di aprire il commento relativo. Il concetto è che il tempo trascorso, l’abitudine o il comportamento diffuso possono spiegare un errore, ma non rendono corretto un comportamento sbagliato.",
    items: [
      {
        id: "patente-20-anni",
        statement: "Eh, ma sono passati 20 anni da quando ho preso la patente...",
        response:
          "E quindi? Non è che se tu ti dimentichi la regola smette di esistere. È tuo compito, in quanto possessore di patente, restare aggiornato sulle nuove disposizioni del Codice della Strada e non dimenticare quelle vecchie.",
      },
      {
        id: "lo-fanno-tutti",
        statement: "Eh, ma tanto lo fanno tutti...",
        response:
          "E quindi? Se tanti sbagliano, questo rende giusto l’errore? Dobbiamo ragionare con la nostra testa o imitare gli altri?",
      },
      {
        id: "mai-fatto-incidente",
        statement: "Sono 30 anni che ho la patente e non ho mai fatto un incidente.",
        response: "Finché gli altri frenano al posto tuo, incidenti non ne fai.",
      },
    ],
  },
  {
    id: "g1-intro-03b-ci-hai-mai-fatto-caso",
    type: "observation",
    title: "C’hai mai fatto caso?",
    durationMinutes: 6,
    sectionBadge: "4 di 4",
    teacherNotes:
      "Leggi i primi due esempi con tono ironico, senza trasformarli in una ramanzina. Lascia che la classe si riconosca nella contraddizione: chi va più piano di noi sembra troppo lento, chi va più veloce sembra troppo veloce. Poi porta l’attenzione sui criteri reali con cui si sceglie la velocità: limite, struttura della strada, condizioni del veicolo e visibilità. Chiudi collegando il ragionamento alla differenza tra vero autista e semplice portatore sano di veicoli.",
    slowerLead:
      "Se trovi qualcuno davanti a te che viaggia a una velocità inferiore alla tua, il pensiero è:",
    slowerThought: "Ma guarda sto rincogl...o, svegliati!",
    fasterLead: "Se invece trovi un utente che ti sorpassa, il pensiero diventa:",
    fasterThought: "Ma dove va sto cogl...e così di corsa?",
    perspective:
      "Secondo la media generale, l’unica velocità corretta è quella che scegliamo di tenere noi. Quella degli altri, ai nostri occhi, è sempre sbagliata.",
    questionLead: "Ma in tutto questo, stiamo tenendo conto del",
    factors: [
      { icon: "◴", label: "limite" },
      { icon: "▥", label: "struttura della strada" },
      { icon: "▰", label: "condizioni del veicolo" },
      { icon: "◉", label: "visibilità" },
    ],
    conclusionLead: "E NO, tutte queste attenzioni ",
    conclusionEmphasis: "NON SONO OPTIONAL.",
    conclusionBody:
      "Semplicemente fanno anch’esse parte delle differenze che passano tra l’essere un vero autista o un semplice portatore sano di veicoli.",
  },
  {
    id: "g1-intro-03c-senso-civico-alla-guida",
    type: "message-cards",
    title: "Il senso civico alla guida: questo sconosciuto",
    durationMinutes: 5,
    teacherNotes:
      "Usa questa slide per spostare il ragionamento dalla sola abilità tecnica al rispetto degli altri. Non leggerla come una predica: fai esempi concreti di utenti incerti, lenti, inesperti o semplicemente diversi da noi. Il concetto centrale è che strada, corsia, tempo e urgenze non appartengono a un singolo conducente.",
    intro:
      "Avere rispetto degli altri utenti, delle loro incertezze e delle loro difficoltà dovrebbe far parte dello stile di guida di ognuno.",
    items: [
      {
        id: "strada-non-solo-tua",
        title: "LA STRADA NON È SOLO TUA",
        body: "La corsia non è tua. La carreggiata non è tua. Non puoi pretendere che tutti si adattino a te.",
      },
      {
        id: "urgenze-non-piu-importanti",
        title: "LE TUE URGENZE NON VALGONO PIÙ DI QUELLE DEGLI ALTRI",
        body: "Essere di fretta non ti autorizza a correre, incalzare o mettere pressione a chi ti sta davanti.",
      },
      {
        id: "guidare-non-rispondere",
        title: "GUIDARE NON SIGNIFICA RISPONDERE AL TELEFONO",
        body: "Telefonate, vocali e messaggi possono aspettare. Oggi la tecnologia offre alternative. Distrarsi, invece, è una scelta.",
      },
      {
        id: "sicurezza-non-arroganza",
        title: "ESSERE SICURI NON SIGNIFICA ESSERE ARROGANTI",
        body: "Sentirsi bravi alla guida non autorizza a trattare gli altri come ostacoli o incapaci.",
      },
    ],
    conclusion:
      "Il senso civico fa parte della differenza tra l’essere un vero autista o un semplice portatore sano di veicoli.",
  },
  {
    id: "g1-intro-03d-il-problema-vero-non-sei-solo-tu",
    type: "progressive-reveal",
    title: "Il problema vero non sei solo tu",
    durationMinutes: 5,
    teacherNotes:
      "Il testo iniziale resta visibile. Rivela i tre riquadri uno alla volta e lascia qualche secondo tra un passaggio e l’altro. I contenuti già aperti devono restare visibili. Chiudi soltanto alla fine con la frase sulla vita di una persona e di una famiglia: è il punto più importante della slide.",
    intro:
      "Molti sono convinti che gli incidenti capitino sempre agli altri e che, se anche dovesse accadere qualcosa, il problema riguardi solo loro.",
    items: [
      {
        id: "non-decidi-solo-per-te",
        title: "NON DECIDI SOLO PER TE",
        body: "Quando guidi con arroganza, distrazione o presunzione, imponi un rischio anche a chi non lo ha scelto.",
      },
      {
        id: "puoi-rovinare-vite-altrui",
        title: "PUOI ROVINARE VITE ALTRUI",
        body: "Un pedone, un ciclista, una famiglia, un ragazzo in scooter: basta un attimo per cambiare tutto.",
      },
      {
        id: "egoismo-va-eliminato",
        title: "QUESTO EGOISMO VA ELIMINATO",
        body: "Sulla strada non conta fare il fenomeno. Conta non costringere gli altri a pagare per i tuoi errori.",
      },
    ],
    conclusion:
      "Un comportamento irresponsabile può cambiare la vita di una persona, di una famiglia, per sempre.",
  },
  {
    id: "g1-intro-04-mettiamoci-alla-prova",
    type: "reveal-question",
    title: "Mettiamoci alla prova",
    durationMinutes: 4,
    question:
      "Il rispetto delle Norme del Codice della Strada è sempre subordinato alla presenza della segnaletica?",
    answer:
      "NO, esistono delle regole generali che dobbiamo conoscere e per le quali non è prevista la presenza dei segnali.",
    bridge: "Da qui iniziamo a parlare proprio di queste regole generali.",
  },
];

export const pilotLessonOrder: readonly SlideId[] = [
  "g1-intro-02-differenza",
  "g1-intro-03-frasi-che-sentiamo",
  "g1-intro-03b-ci-hai-mai-fatto-caso",
  "g1-intro-03c-senso-civico-alla-guida",
  "g1-intro-03d-il-problema-vero-non-sei-solo-tu",
  "g1-intro-04-mettiamoci-alla-prova",
];
