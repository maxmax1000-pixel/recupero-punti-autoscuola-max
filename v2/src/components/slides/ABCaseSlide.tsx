import { SlideFrame } from "../common/SlideFrame";
import type { ABCaseSlideData } from "../../core/slideTypes";
import styles from "./ABCaseSlide.module.css";

interface ABCaseSlideProps {
  slide: ABCaseSlideData;
}

export function ABCaseSlide({ slide }: ABCaseSlideProps) {
  return (
    <SlideFrame eyebrow={slide.type} title={slide.title}>
      <p className={styles.question}>{slide.question}</p>
      <div className={styles.answers}>
        <button type="button">
          <span>A</span>
          {slide.answerA}
        </button>
        <button type="button">
          <span>B</span>
          {slide.answerB}
        </button>
      </div>
    </SlideFrame>
  );
}
