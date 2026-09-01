import { SlideFrame } from "../common/SlideFrame";
import type { ImageTextSlideData } from "../../core/slideTypes";
import styles from "./ImageTextSlide.module.css";

interface ImageTextSlideProps {
  slide: ImageTextSlideData;
}

export function ImageTextSlide({ slide }: ImageTextSlideProps) {
  const layoutClass =
    slide.imagePosition === "background"
      ? styles.background
      : slide.imagePosition === "right"
        ? styles.right
        : styles.left;

  return (
    <SlideFrame eyebrow={slide.type} title={slide.title}>
      <div className={`${styles.layout} ${layoutClass}`}>
        <div className={styles.imageBox}>
          {slide.image.src ? (
            <img src={slide.image.src} alt={slide.image.alt} />
          ) : (
            <span>{slide.image.alt}</span>
          )}
        </div>
        <div className={styles.textBox}>
          <p>{slide.text}</p>
          {slide.callout ? <strong>{slide.callout}</strong> : null}
        </div>
      </div>
    </SlideFrame>
  );
}
