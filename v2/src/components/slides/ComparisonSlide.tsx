import { SlideFrame } from "../common/SlideFrame";
import type { ComparisonColumn, ComparisonSlideData } from "../../core/slideTypes";
import styles from "./ComparisonSlide.module.css";

interface ComparisonSlideProps {
  slide: ComparisonSlideData;
}

const toneClassByTone: Record<NonNullable<ComparisonColumn["tone"]>, string> = {
  neutral: styles.neutralColumn,
  danger: styles.dangerColumn,
  success: styles.successColumn,
};

function CarIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M5 11l1.4-4.1A2 2 0 0 1 8.3 5.5h7.4a2 2 0 0 1 1.9 1.4L19 11" />
      <path d="M4 11h16a1 1 0 0 1 1 1v5H3v-5a1 1 0 0 1 1-1Z" />
      <circle cx="7" cy="15" r="1.4" />
      <circle cx="17" cy="15" r="1.4" />
      <path d="M5 17v1.5M19 17v1.5" />
    </svg>
  );
}

function SteeringWheelIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="7.4" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 9.8V5.2M10.3 13.1 6.5 16M13.7 13.1l3.8 2.9" />
    </svg>
  );
}

function renderIcon(icon: ComparisonColumn["icon"]) {
  switch (icon) {
    case "car":
      return <CarIcon />;
    case "steering-wheel":
      return <SteeringWheelIcon />;
    default:
      return null;
  }
}

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  const columns: Array<{
    side: "left" | "right";
    column: ComparisonColumn;
  }> = [
    { side: "left", column: slide.left },
    { side: "right", column: slide.right },
  ];

  return (
    <SlideFrame
      badge={slide.sectionBadge}
      eyebrow={slide.sectionBadge ? undefined : slide.type}
      layout="comparison"
      title={slide.title}
    >
      <div className={styles.columns}>
        {columns.map(({ column, side }) => {
          const tone = column.tone ?? "neutral";

          return (
            <section
              className={`${styles.column} ${toneClassByTone[tone]}`}
              data-testid={`comparison-${side}-card`}
              key={column.title}
            >
              <div className={styles.columnHeader}>
                {column.icon ? (
                  <span className={styles.iconCircle}>{renderIcon(column.icon)}</span>
                ) : null}
                <h2>{column.title}</h2>
              </div>
              <ul className={styles.items}>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      {slide.conclusion || slide.conclusionEmphasis ? (
        <div className={styles.conclusion} data-testid="comparison-conclusion">
          {slide.conclusion ? (
            <p className={styles.conclusionText}>{slide.conclusion}</p>
          ) : null}
          {slide.conclusionEmphasis ? (
            <strong className={styles.conclusionEmphasis}>
              {slide.conclusionEmphasis}
            </strong>
          ) : null}
        </div>
      ) : null}
    </SlideFrame>
  );
}
