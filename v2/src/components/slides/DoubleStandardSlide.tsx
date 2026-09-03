import type {
  DoubleStandardPanel,
  DoubleStandardSlideData,
} from "../../core/slideTypes";
import { SlideFrame } from "../common/SlideFrame";
import styles from "./DoubleStandardSlide.module.css";

interface DoubleStandardSlideProps {
  slide: DoubleStandardSlideData;
}

const toneClassByTone: Record<DoubleStandardPanel["tone"], string> = {
  reflective: styles.reflectivePanel,
  critical: styles.criticalPanel,
};

export function DoubleStandardSlide({ slide }: DoubleStandardSlideProps) {
  const panels = [slide.left, slide.right];

  return (
    <div className={styles.root} data-testid="double-standard-slide">
      <SlideFrame layout="comparison" title={slide.title}>
        <div className={styles.content}>
          <p className={styles.subtitle}>{slide.subtitle}</p>

          <div className={styles.panels}>
            {panels.map((panel) => {
              const headingId = `${slide.id}-${panel.id}-title`;

              return (
                <section
                  aria-labelledby={headingId}
                  className={`${styles.panel} ${toneClassByTone[panel.tone]}`}
                  data-testid={`double-standard-panel-${panel.id}`}
                  key={panel.id}
                >
                  <h2 id={headingId}>{panel.title}</h2>
                  <ul>
                    {panel.statements.map((statement) => (
                      <li key={statement.id}>{statement.text}</li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <section className={styles.questionCard} data-testid="double-standard-question">
            <span aria-hidden="true" className={styles.questionMark}>
              ?
            </span>
            <p>{slide.question}</p>
          </section>

          <section className={styles.conclusionCard} data-testid="double-standard-conclusion">
            <p>{slide.conclusion}</p>
          </section>
        </div>
      </SlideFrame>
    </div>
  );
}
