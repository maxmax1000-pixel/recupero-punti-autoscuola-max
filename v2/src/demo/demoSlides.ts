import type { SlideData, SlideId } from "../core/slideTypes";

export const demoSlides: readonly SlideData[] = [
  {
    id: "demo-discussion",
    type: "discussion",
    title: "Demo discussion",
    durationMinutes: 5,
    teacherNotes: "Contenuto demo",
    body: "Contenuto demo",
    prompt: "Contenuto demo",
  },
  {
    id: "demo-comparison",
    type: "comparison",
    title: "Demo comparison",
    durationMinutes: 5,
    teacherNotes: "Contenuto demo",
    left: {
      title: "Contenuto demo",
      items: ["Contenuto demo", "Contenuto demo"],
    },
    right: {
      title: "Contenuto demo",
      items: ["Contenuto demo", "Contenuto demo"],
    },
    conclusion: "Contenuto demo",
  },
  {
    id: "demo-ab",
    type: "ab-case",
    title: "Demo ab",
    durationMinutes: 5,
    teacherNotes: "Contenuto demo",
    question: "Contenuto demo",
    answerA: "Contenuto demo",
    answerB: "Contenuto demo",
  },
  {
    id: "demo-free-response",
    type: "free-response",
    title: "Demo free response",
    durationMinutes: 5,
    teacherNotes: "Contenuto demo",
    question: "Contenuto demo",
  },
  {
    id: "demo-solution",
    type: "solution",
    title: "Demo solution",
    durationMinutes: 5,
    teacherNotes: "Contenuto demo",
    explanation: "Contenuto demo",
    keyPoints: ["Contenuto demo", "Contenuto demo"],
    legalReference: "Contenuto demo",
  },
  {
    id: "demo-image-text",
    type: "image-text",
    title: "Demo image text",
    durationMinutes: 5,
    teacherNotes: "Contenuto demo",
    image: {
      src: "",
      alt: "Contenuto demo",
    },
    imagePosition: "left",
    text: "Contenuto demo",
    callout: "Contenuto demo",
  },
];

export const demoLessonOrder: readonly SlideId[] = [
  "demo-discussion",
  "demo-comparison",
  "demo-ab",
  "demo-free-response",
  "demo-solution",
  "demo-image-text",
];
