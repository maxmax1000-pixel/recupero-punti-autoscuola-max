import { useLayoutEffect, useRef, type ReactNode } from "react";
import styles from "./CourseShell.module.css";

interface AudienceFitProps {
  children: ReactNode;
  slideKey: string;
}

export function AudienceFit({ children, slideKey }: AudienceFitProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;

    if (!viewport || !content) return;

    let animationFrame = 0;

    const fitToViewport = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const availableWidth = viewport.clientWidth;
        const availableHeight = viewport.clientHeight;
        const naturalWidth = content.scrollWidth;
        const naturalHeight = content.scrollHeight;

        if (!availableWidth || !availableHeight || !naturalWidth || !naturalHeight) {
          return;
        }

        const scale = Math.min(
          1,
          availableWidth / naturalWidth,
          availableHeight / naturalHeight,
        );

        content.style.setProperty("--audience-fit-scale", String(scale));
        content.dataset.fitScale = scale.toFixed(4);
      });
    };

    const resizeObserver = new ResizeObserver(fitToViewport);
    resizeObserver.observe(viewport);
    resizeObserver.observe(content);
    window.addEventListener("resize", fitToViewport);
    fitToViewport();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", fitToViewport);
    };
  }, [slideKey]);

  return (
    <div
      className={styles.audienceFitViewport}
      data-testid="audience-fit-viewport"
      ref={viewportRef}
    >
      <div
        className={styles.audienceFitContent}
        data-testid="audience-fit-content"
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
}
