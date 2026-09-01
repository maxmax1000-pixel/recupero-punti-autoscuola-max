export type SlideId = string;

export type SlideType =
  | "discussion"
  | "comparison"
  | "ab-case"
  | "free-response"
  | "solution"
  | "image-text";

export interface BaseSlide {
  id: SlideId;
  type: SlideType;
  title: string;
  durationMinutes: number;
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
}

export interface ComparisonSlideData extends BaseSlide {
  type: "comparison";
  left: ComparisonColumn;
  right: ComparisonColumn;
  conclusion?: string;
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
  | ImageTextSlideData;
