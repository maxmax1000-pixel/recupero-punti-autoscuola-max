import { SlideBadge } from "../common/SlideBadge";
import { SlideFrame } from "../common/SlideFrame";
import type { FreeResponseSlideData } from "../../core/slideTypes";
import styles from "./FreeResponseSlide.module.css";

interface FreeResponseSlideProps {
  slide: FreeResponseSlideData;
}

export function FreeResponseSlide({ slide }: FreeResponseSlideProps) {
  return (
    <SlideFrame eyebrow={slide.type} title={slide.title}>
      <div className={styles.layout}>
        <p className={styles.question}>{slide.question}</p>
        <SlideBadge>Risposta libera</SlideBadge>
        {slide.image ? (
          <img className={styles.image} src={slide.image.src} alt={slide.image.alt} />
        ) : null}
      </div>
    </SlideFrame>
  );
}
