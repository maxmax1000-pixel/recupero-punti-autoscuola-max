import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import type { CourseControllerValue, CourseMode } from "../core/courseTypes";
import { SlideRegistryError, type SlideRegistry } from "../core/slideRegistry";
import type { SlideData, SlideId } from "../core/slideTypes";

interface CourseControllerProps {
  registry: SlideRegistry;
  mode: CourseMode;
  initialSlideId?: SlideId;
}

const CourseControllerContext = createContext<CourseControllerValue | null>(null);

function errorToMessage(error: unknown): string {
  if (error instanceof SlideRegistryError || error instanceof Error) {
    return error.message;
  }
  return "Errore non previsto nel registry slide";
}

export function CourseController({
  children,
  initialSlideId,
  mode,
  registry,
}: PropsWithChildren<CourseControllerProps>) {
  const firstSlideId = registry.order[0];
  const [currentSlideId, setCurrentSlideId] = useState<SlideId>(
    initialSlideId ?? firstSlideId,
  );

  const value = useMemo<CourseControllerValue>(() => {
    let currentSlide: SlideData | null = null;
    let errorMessage: string | null = null;
    let position = 0;

    try {
      currentSlide = registry.getSlideById(currentSlideId);
      position = registry.getSlidePosition(currentSlideId);
    } catch (error) {
      errorMessage = errorToMessage(error);
    }

    const isInvalid = errorMessage !== null;

    return {
      mode,
      currentSlideId,
      currentSlide,
      errorMessage,
      positionLabel: isInvalid
        ? `0 di ${registry.order.length}`
        : `${position + 1} di ${registry.order.length}`,
      totalSlides: registry.order.length,
      isFirstSlide: isInvalid || registry.getPreviousSlideId(currentSlideId) === null,
      isLastSlide: isInvalid || registry.getNextSlideId(currentSlideId) === null,
      goToNextSlide: () => {
        const nextSlideId = registry.getNextSlideId(currentSlideId);
        if (nextSlideId) {
          setCurrentSlideId(nextSlideId);
        }
      },
      goToPreviousSlide: () => {
        const previousSlideId = registry.getPreviousSlideId(currentSlideId);
        if (previousSlideId) {
          setCurrentSlideId(previousSlideId);
        }
      },
      goToSlide: (slideId: SlideId) => {
        registry.assertSlideExists(slideId);
        setCurrentSlideId(slideId);
      },
    };
  }, [currentSlideId, mode, registry]);

  return (
    <CourseControllerContext.Provider value={value}>
      {children}
    </CourseControllerContext.Provider>
  );
}

export function useCourseController(): CourseControllerValue {
  const value = useContext(CourseControllerContext);

  if (!value) {
    throw new Error("CourseController non inizializzato");
  }

  return value;
}
