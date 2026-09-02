export type SlideId = string;

export type SlideType =
  | "discussion"
  | "comparison"
  | "ab-case"
  | "free-response"
  | "solution"
  | "clickable-statements"
  | "reveal-question"
  | "observation"
  | "image-text";

export interface BaseSlide {
  id: SlideId;
  type: SlideType;
  title: string;
  durationMinutes: number;
  sectionBadge?: string;
  teacherNotes?: string;
}

export interface SlideImage {
  src: string;
  alt: string;
}

export interface DiscussionSlideData extends BaseSlide {
  type: "discussion";
  body: string;
  prompt?: string;
  image?: SlideImage;
}

export interface ComparisonColumn {
  title: string;
  items: string[];
  tone?: "neutral" | "danger" | "success";
  icon?: "car" | "steering-wheel";
}

export interface ComparisonSlideData extends BaseSlide {
  type: "comparison";
  left: ComparisonColumn;
  right: ComparisonColumn;
  conclusion?: string;
  conclusionEmphasis?: string;
}

export interface ABCaseSlideData extends BaseSlide {
  type: "ab-case";
  question: string;
  answerA: string;
  answerB: string;
}

export interface FreeResponseSlideData extends BaseSlide {
  type: "free-response";
  question: string;
  image?: SlideImage;
}

export interface SolutionSlideData extends BaseSlide {
  type: "solution";
  explanation: string;
  keyPoints: string[];
  legalReference?: string;
}

export interface ClickableStatementItem {
  id: string;
  statement: string;
  response: string;
}

export interface ClickableStatementsSlideData extends BaseSlide {
  type: "clickable-statements";
  items: readonly ClickableStatementItem[];
}

export interface RevealQuestionSlideData extends BaseSlide {
  type: "reveal-question";
  question: string;
  answer: string;
  bridge?: string;
}

export interface ObservationFactor {
  label: string;
  icon: string;
}

export interface ObservationSlideData extends BaseSlide {
  type: "observation";
  slowerLead: string;
  slowerThought: string;
  fasterLead: string;
  fasterThought: string;
  perspective: string;
  questionLead: string;
  factors: readonly ObservationFactor[];
  conclusionLead: string;
  conclusionEmphasis: string;
  conclusionBody: string;
}

export type ImagePosition = "left" | "right" | "background";

export interface ImageTextSlideData extends BaseSlide {
  type: "image-text";
  image: SlideImage;
  imagePosition: ImagePosition;
  text: string;
  callout?: string;
}

export type SlideData =
  | DiscussionSlideData
  | ComparisonSlideData
  | ABCaseSlideData
  | FreeResponseSlideData
  | SolutionSlideData
  | ClickableStatementsSlideData
  | RevealQuestionSlideData
  | ObservationSlideData
  | ImageTextSlideData;
