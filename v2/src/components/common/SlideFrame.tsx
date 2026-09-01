import type { PropsWithChildren } from "react";
import styles from "./SlideFrame.module.css";

interface SlideFrameProps {
  title: string;
  eyebrow?: string;
}

export function SlideFrame({
  children,
  eyebrow,
  title,
}: PropsWithChildren<SlideFrameProps>) {
  return (
    <article className={styles.frame}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
