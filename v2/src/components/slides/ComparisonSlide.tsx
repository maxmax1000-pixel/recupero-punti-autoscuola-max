import { SlideFrame } from "../common/SlideFrame";
import type { ComparisonSlideData } from "../../core/slideTypes";
import styles from "./ComparisonSlide.module.css";

interface ComparisonSlideProps {
  slide: ComparisonSlideData;
}

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  return (
    <SlideFrame eyebrow={slide.type} title={slide.title}>
      <div className={styles.columns}>
        {[slide.left, slide.right].map((column) => (
          <section className={styles.column} key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      {slide.conclusion ? <p className={styles.conclusion}>{slide.conclusion}</p> : null}
    </SlideFrame>
  );
}
