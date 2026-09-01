import { useState } from "react";
import { SlideFrame } from "../common/SlideFrame";
import type { ClickableStatementsSlideData } from "../../core/slideTypes";
import styles from "./ClickableStatementsSlide.module.css";

interface ClickableStatementsSlideProps {
  slide: ClickableStatementsSlideData;
}

function SpeechIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.speechIcon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M5.5 5.5h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4.5 3v-3H5.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function ClickableStatementsSlide({ slide }: ClickableStatementsSlideProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  return (
    <SlideFrame
      badge={slide.sectionBadge}
      eyebrow={slide.sectionBadge ? undefined : slide.type}
      title={slide.title}
    >
      <ul className={styles.list}>
        {slide.items.map((item) => {
          const isOpen = openItemId === item.id;
          const triggerId = `clickable-statement-trigger-${item.id}`;
          const responseId = `clickable-statement-response-${item.id}`;

          return (
            <li
              className={`${styles.card} ${isOpen ? styles.openCard : ""}`}
              data-testid="clickable-statement"
              key={item.id}
            >
              <button
                aria-controls={responseId}
                aria-expanded={isOpen}
                className={styles.trigger}
                data-testid={`statement-${item.id}`}
                id={triggerId}
                onClick={() =>
                  setOpenItemId((currentItemId) =>
                    currentItemId === item.id ? null : item.id,
                  )
                }
                type="button"
              >
                <span className={styles.iconCircle}>
                  <SpeechIcon />
                </span>
                <span className={styles.statement}>{item.statement}</span>
                <span aria-hidden="true" className={styles.indicator}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                aria-labelledby={triggerId}
                className={styles.response}
                data-testid={`response-${item.id}`}
                hidden={!isOpen}
                id={responseId}
                role="region"
              >
                <p>{item.response}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </SlideFrame>
  );
}
