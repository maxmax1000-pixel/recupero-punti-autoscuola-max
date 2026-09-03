import type { MessageCardsSlideData } from "../../core/slideTypes";
import { SlideFrame } from "../common/SlideFrame";
import styles from "./MessageCardsSlide.module.css";

interface MessageCardsSlideProps {
  slide: MessageCardsSlideData;
}

export function MessageCardsSlide({ slide }: MessageCardsSlideProps) {
  return (
    <div className={styles.root} data-testid="message-cards-slide">
      <SlideFrame layout="blocks" title={slide.title}>
        <div className={styles.content}>
          <section className={styles.introCard}>
            <p>{slide.intro}</p>
          </section>

          <div className={styles.grid}>
            {slide.items.map((item, index) => (
              <section className={styles.messageCard} key={item.id}>
                <span aria-hidden="true" className={styles.numberBadge}>
                  {index + 1}
                </span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </section>
            ))}
          </div>

          <section className={styles.conclusionCard}>
            <p>{slide.conclusion}</p>
          </section>
        </div>
      </SlideFrame>
    </div>
  );
}
