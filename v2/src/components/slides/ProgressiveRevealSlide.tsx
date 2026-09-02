import { useEffect, useState } from "react";
import type { ProgressiveRevealSlideData } from "../../core/slideTypes";
import { SlideFrame } from "../common/SlideFrame";
import styles from "./ProgressiveRevealSlide.module.css";

interface ProgressiveRevealSlideProps {
  slide: ProgressiveRevealSlideData;
}

export function ProgressiveRevealSlide({ slide }: ProgressiveRevealSlideProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    setRevealedCount(0);
  }, [slide.id]);

  const revealThrough = (count: number) => {
    setRevealedCount((current) => Math.max(current, count));
  };

  return (
    <div className={styles.root} data-testid="progressive-reveal-slide">
      <SlideFrame title={slide.title}>
        <div className={styles.content}>
          <section className={styles.introCard}>
            <p>{slide.intro}</p>
          </section>

          <div className={styles.revealList}>
            {slide.items.map((item, index) => {
              const isVisible = index < revealedCount;
              return (
                <button
                  aria-expanded={isVisible}
                  aria-label={isVisible ? item.title : `Rivela punto ${index + 1}`}
                  className={`${styles.revealCard} ${isVisible ? styles.openCard : styles.closedCard}`}
                  data-testid={`progressive-${item.id}`}
                  key={item.id}
                  onClick={() => revealThrough(index + 1)}
                  type="button"
                >
                  <span aria-hidden="true" className={styles.stepBadge}>
                    {index + 1}
                  </span>
                  {isVisible ? (
                    <span className={styles.revealedContent}>
                      <strong>{item.title}</strong>
                      <span>{item.body}</span>
                    </span>
                  ) : (
                    <span aria-hidden="true" className={styles.closedMark}>+</span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            aria-expanded={revealedCount > slide.items.length}
            aria-label={
              revealedCount > slide.items.length
                ? "Chiusura finale rivelata"
                : "Rivela la chiusura finale"
            }
            className={`${styles.conclusionCard} ${
              revealedCount > slide.items.length ? styles.openConclusion : styles.closedConclusion
            }`}
            data-testid="progressive-conclusion"
            onClick={() => revealThrough(slide.items.length + 1)}
            type="button"
          >
            {revealedCount > slide.items.length ? (
              <span>{slide.conclusion}</span>
            ) : (
              <span aria-hidden="true" className={styles.conclusionMark}>+</span>
            )}
          </button>
        </div>
      </SlideFrame>
    </div>
  );
}
