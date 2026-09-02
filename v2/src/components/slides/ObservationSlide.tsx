import type { ObservationSlideData } from "../../core/slideTypes";
import { SlideFrame } from "../common/SlideFrame";
import styles from "./ObservationSlide.module.css";

interface ObservationSlideProps {
  slide: ObservationSlideData;
}

export function ObservationSlide({ slide }: ObservationSlideProps) {
  return (
    <div className={styles.root} data-testid="observation-slide">
      <SlideFrame badge={slide.sectionBadge} title={slide.title}>
        <div className={styles.content}>
          <section className={styles.quoteCard}>
            <span aria-hidden="true" className={styles.quoteIcon}>💬</span>
            <p className={styles.quoteText}>
              {slide.slowerLead} <strong>“{slide.slowerThought}”</strong>
            </p>
          </section>

          <section className={styles.quoteCard}>
            <span aria-hidden="true" className={styles.quoteIcon}>💬</span>
            <p className={styles.quoteText}>
              {slide.fasterLead} <strong>“{slide.fasterThought}”</strong>
            </p>
          </section>

          <section className={styles.perspectiveCard}>
            <p>{slide.perspective}</p>
          </section>

          <section className={styles.questionCard}>
            <span aria-hidden="true" className={styles.questionIcon}>?</span>
            <div className={styles.questionText}>
              <strong>{slide.questionLead}</strong>
              {slide.factors.map((factor, index) => (
                <span key={factor.label} className={styles.factorGroup}>
                  {index === 0 ? null : <span className={styles.joiner}>della</span>}
                  <span className={styles.factorChip}>
                    <span aria-hidden="true">{factor.icon}</span>
                    {factor.label}
                  </span>
                </span>
              ))}
              <strong>?</strong>
            </div>
          </section>

          <section className={styles.conclusionCard}>
            <span aria-hidden="true" className={styles.conclusionIcon}>★</span>
            <div className={styles.conclusionText}>
              <p>
                <strong>{slide.conclusionLead}</strong>
                <strong className={styles.emphasis}>{slide.conclusionEmphasis}</strong>
              </p>
              <p>{slide.conclusionBody}</p>
            </div>
          </section>
        </div>
      </SlideFrame>
    </div>
  );
}
