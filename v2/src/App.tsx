import { CourseShell } from "./components/shell/CourseShell";
import { createSlideRegistry } from "./core/slideRegistry";
import type { CourseMode } from "./core/courseTypes";
import { CourseController } from "./state/CourseController";
import { demoLessonOrder, demoSlides } from "./demo/demoSlides";

const registry = createSlideRegistry(demoSlides, demoLessonOrder);

function readMode(): CourseMode {
  const mode = new URLSearchParams(window.location.search).get("mode");
  return mode === "audience" ? "audience" : "teacher";
}

function readInitialSlideId(): string | undefined {
  return new URLSearchParams(window.location.search).get("slide") ?? undefined;
}

export default function App() {
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
