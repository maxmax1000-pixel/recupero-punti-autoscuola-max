import { SlideFrame } from "../common/SlideFrame";
import type { SolutionSlideData } from "../../core/slideTypes";
import styles from "./SolutionSlide.module.css";

interface SolutionSlideProps {
  slide: SolutionSlideData;
}

export function SolutionSlide({ slide }: SolutionSlideProps) {
  return (
    <SlideFrame eyebrow={slide.type} title={slide.title}>
      <p className={styles.explanation}>{slide.explanation}</p>
      <ul className={styles.keyPoints}>
        {slide.keyPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {slide.legalReference ? (
        <p className={styles.reference}>{slide.legalReference}</p>
      ) : null}
    </SlideFrame>
  );
}
