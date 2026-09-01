import { SlideFrame } from "../common/SlideFrame";
import { ABCaseSlide } from "../slides/ABCaseSlide";
import { ComparisonSlide } from "../slides/ComparisonSlide";
import { DiscussionSlide } from "../slides/DiscussionSlide";
import { FreeResponseSlide } from "../slides/FreeResponseSlide";
import { ImageTextSlide } from "../slides/ImageTextSlide";
import { SolutionSlide } from "../slides/SolutionSlide";
import { useCourseController } from "../../state/CourseController";
import type { SlideData } from "../../core/slideTypes";
import styles from "./CourseShell.module.css";

function renderSlide(slide: SlideData) {
  switch (slide.type) {
    case "discussion":
      return <DiscussionSlide slide={slide} />;
    case "comparison":
      return <ComparisonSlide slide={slide} />;
    case "ab-case":
      return <ABCaseSlide slide={slide} />;
    case "free-response":
      return <FreeResponseSlide slide={slide} />;
    case "solution":
      return <SolutionSlide slide={slide} />;
    case "image-text":
      return <ImageTextSlide slide={slide} />;
  }
}

export function CourseShell() {
  const {
    currentSlide,
    currentSlideId,
    errorMessage,
    goToNextSlide,
    goToPreviousSlide,
    isFirstSlide,
    isLastSlide,
    mode,
    positionLabel,
  } = useCourseController();

  const isTeacher = mode === "teacher";

  return (
    <div className={styles.shell} data-mode={mode}>
      {isTeacher ? (
        <header className={styles.header}>
          <div>
            <strong>Recupero Punti V2</strong>
            <span>{positionLabel}</span>
          </div>
          <span className={styles.modeBadge}>{mode}</span>
        </header>
      ) : null}

      <main className={isTeacher ? styles.teacherLayout : styles.audienceLayout}>
        <section
          className={
            isTeacher
              ? `${styles.stage} ${styles.teacherStage}`
              : `${styles.stage} ${styles.audienceStage}`
          }
        >
          {errorMessage ? (
            <SlideFrame eyebrow="Errore registry" title="Slide non trovata">
              <p className={styles.errorText}>{errorMessage}</p>
              <p className={styles.errorCode}>ID richiesto: {currentSlideId}</p>
            </SlideFrame>
          ) : currentSlide ? (
            renderSlide(currentSlide)
          ) : null}
        </section>

        {isTeacher ? (
          <aside className={styles.teacherPanel} data-testid="teacher-notes">
            <h2>Note docente</h2>
            <p>{currentSlide?.teacherNotes ?? "Nessuna nota docente disponibile."}</p>
            <button className={styles.revealButton} disabled type="button">
              Reveal futuro
            </button>
          </aside>
        ) : null}
      </main>

      {isTeacher ? (
        <footer className={styles.controls} data-testid="teacher-controls">
          <button
            disabled={isFirstSlide}
            onClick={goToPreviousSlide}
            type="button"
          >
            Indietro
          </button>
          <span>{positionLabel}</span>
          <button disabled={isLastSlide} onClick={goToNextSlide} type="button">
            Avanti
          </button>
        </footer>
      ) : null}
    </div>
  );
}
