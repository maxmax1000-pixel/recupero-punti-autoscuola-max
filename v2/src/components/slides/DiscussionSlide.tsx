import { SlideBadge } from "../common/SlideBadge";
import { SlideFrame } from "../common/SlideFrame";
import type { DiscussionSlideData } from "../../core/slideTypes";
import styles from "./DiscussionSlide.module.css";

interface DiscussionSlideProps {
  slide: DiscussionSlideData;
}

export function DiscussionSlide({ slide }: DiscussionSlideProps) {
  return (
    <SlideFrame eyebrow={slide.type} title={slide.title}>
      <div className={styles.layout}>
        <p className={styles.body}>{slide.body}</p>
        {slide.prompt ? <SlideBadge>{slide.prompt}</SlideBadge> : null}
        {slide.image ? (
          <img className={styles.image} src={slide.image.src} alt={slide.image.alt} />
        ) : null}
      </div>
    </SlideFrame>
  );
}
