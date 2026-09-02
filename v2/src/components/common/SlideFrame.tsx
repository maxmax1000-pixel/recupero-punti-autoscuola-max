import type { PropsWithChildren } from "react";
import { SlideBadge } from "./SlideBadge";
import styles from "./SlideFrame.module.css";

interface SlideFrameProps {
  title: string;
  badge?: string;
  eyebrow?: string;
  titleAlignment?: "start" | "center";
}

export function SlideFrame({
  badge,
  children,
  eyebrow,
  title,
  titleAlignment = "center",
}: PropsWithChildren<SlideFrameProps>) {
  return (
    <article className={styles.frame}>
      {badge ? (
        <div className={styles.badgeRow}>
          <SlideBadge>{badge}</SlideBadge>
        </div>
      ) : null}
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h1
        className={`${styles.title} ${
          titleAlignment === "center" ? styles.titleCentered : ""
        }`}
      >
        {title}
      </h1>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
