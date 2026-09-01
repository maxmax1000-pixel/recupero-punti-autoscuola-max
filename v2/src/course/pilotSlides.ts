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
];

export const pilotLessonOrder: readonly SlideId[] = ["g1-intro-02-differenza"];
