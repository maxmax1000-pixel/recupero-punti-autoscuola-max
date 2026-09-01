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
];

export const pilotLessonOrder: readonly SlideId[] = [
  "g1-intro-02-differenza",
  "g1-intro-03-frasi-che-sentiamo",
];
