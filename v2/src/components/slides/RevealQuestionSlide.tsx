import { useState } from "react";
import { SlideFrame } from "../common/SlideFrame";
import type { RevealQuestionSlideData } from "../../core/slideTypes";
import styles from "./RevealQuestionSlide.module.css";

interface RevealQuestionSlideProps {
  slide: RevealQuestionSlideData;
}

function RevealIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.buttonIcon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M2.8 12s3.2-5.5 9.2-5.5 9.2 5.5 9.2 5.5-3.2 5.5-9.2 5.5S2.8 12 2.8 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function RevealQuestionSlide({ slide }: RevealQuestionSlideProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const solutionId = `reveal-question-solution-${slide.id}`;

  return (
    <SlideFrame title={slide.title}>
      <div className={styles.layout}>
        <section className={styles.questionCard}>
          <h2 className={styles.question}>{slide.question}</h2>
        </section>

        <button
          aria-controls={solutionId}
          aria-expanded={isRevealed}
          className={styles.revealButton}
          data-testid="reveal-solution"
          onClick={() => setIsRevealed((currentValue) => !currentValue)}
          type="button"
        >
          <RevealIcon />
          {isRevealed ? "Nascondi soluzione" : "Mostra soluzione"}
        </button>

        <section
          aria-label="Soluzione"
          aria-live="polite"
          className={styles.solution}
          data-testid="revealed-solution"
          hidden={!isRevealed}
          id={solutionId}
        >
          <p className={styles.answer}>{slide.answer}</p>
          {slide.bridge ? <p className={styles.bridge}>{slide.bridge}</p> : null}
        </section>
      </div>
    </SlideFrame>
  );
}
