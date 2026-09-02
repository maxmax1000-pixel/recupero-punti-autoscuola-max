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
  const toggleSolution = () => setIsRevealed((currentValue) => !currentValue);

  return (
    <SlideFrame title={slide.title} titleAlignment={slide.titleAlignment}>
      <div
        className={`${styles.layout} ${
          slide.intro?.length ? styles.layoutWithIntro : ""
        }`}
      >
        {slide.intro?.length ? (
          <section aria-label="Contesto" className={styles.introGrid}>
            {slide.intro.map((paragraph) => (
              <p className={styles.introItem} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        ) : null}

        {slide.questionIsAction ? (
          <button
            aria-controls={solutionId}
            aria-expanded={isRevealed}
            className={`${styles.questionCard} ${styles.questionButton}`}
            data-testid="reveal-solution"
            onClick={toggleSolution}
            type="button"
          >
            <span aria-hidden="true" className={styles.questionSpacer} />
            <span className={styles.question}>{slide.question}</span>
            <span aria-hidden="true" className={styles.questionIndicator}>
              {isRevealed ? "−" : "+"}
            </span>
          </button>
        ) : (
          <section className={styles.questionCard}>
            <h2 className={styles.question}>{slide.question}</h2>
          </section>
        )}

        {!slide.questionIsAction ? (
          <button
            aria-controls={solutionId}
            aria-expanded={isRevealed}
            className={styles.revealButton}
            data-testid="reveal-solution"
            onClick={toggleSolution}
            type="button"
          >
            <RevealIcon />
            {isRevealed ? "Nascondi soluzione" : "Mostra soluzione"}
          </button>
        ) : null}

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
          {slide.conclusion ? (
            <p className={styles.conclusion}>{slide.conclusion}</p>
          ) : null}
        </section>
      </div>
    </SlideFrame>
  );
}
