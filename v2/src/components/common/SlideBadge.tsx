import styles from "./SlideBadge.module.css";

interface SlideBadgeProps {
  children: string;
}

export function SlideBadge({ children }: SlideBadgeProps) {
  return <span className={styles.badge}>{children}</span>;
}
