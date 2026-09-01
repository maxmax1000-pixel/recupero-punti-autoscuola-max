import { CourseShell } from "./components/shell/CourseShell";
import { createSlideRegistry } from "./core/slideRegistry";
import type { CourseMode } from "./core/courseTypes";
import { CourseController } from "./state/CourseController";
import { pilotLessonOrder, pilotSlides } from "./course/pilotSlides";
import { demoLessonOrder, demoSlides } from "./demo/demoSlides";

const demoRegistry = createSlideRegistry(demoSlides, demoLessonOrder);
const pilotRegistry = createSlideRegistry(pilotSlides, pilotLessonOrder);

function readMode(): CourseMode {
  const mode = new URLSearchParams(window.location.search).get("mode");
  return mode === "audience" ? "audience" : "teacher";
}

function readInitialSlideId(): string | undefined {
  return new URLSearchParams(window.location.search).get("slide") ?? undefined;
}

function readDeck(): "demo" | "pilot" {
  return new URLSearchParams(window.location.search).get("deck") === "pilot"
    ? "pilot"
    : "demo";
}

export default function App() {
  const registry = readDeck() === "pilot" ? pilotRegistry : demoRegistry;

  return (
    <CourseController
      initialSlideId={readInitialSlideId()}
      mode={readMode()}
      registry={registry}
    >
      <CourseShell />
    </CourseController>
  );
}
