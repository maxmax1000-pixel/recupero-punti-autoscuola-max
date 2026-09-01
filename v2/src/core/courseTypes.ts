import type { SlideData, SlideId } from "./slideTypes";

export type CourseMode = "teacher" | "audience";

export interface CourseControllerValue {
  mode: CourseMode;
  currentSlideId: SlideId;
  currentSlide: SlideData | null;
  errorMessage: string | null;
  positionLabel: string;
  totalSlides: number;
  isFirstSlide: boolean;
  isLastSlide: boolean;
  goToNextSlide: () => void;
  goToPreviousSlide: () => void;
  goToSlide: (slideId: SlideId) => void;
}
