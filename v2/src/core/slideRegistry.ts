import type { SlideData, SlideId } from "./slideTypes";

export class SlideRegistryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SlideRegistryError";
  }
}

export interface SlideRegistry {
  byId: ReadonlyMap<SlideId, SlideData>;
  order: readonly SlideId[];
  getSlideById: (slideId: SlideId) => SlideData;
  assertSlideExists: (slideId: SlideId) => void;
  getPreviousSlideId: (slideId: SlideId) => SlideId | null;
  getNextSlideId: (slideId: SlideId) => SlideId | null;
  getSlidePosition: (slideId: SlideId) => number;
}

export function createSlideRegistry(
  slides: readonly SlideData[],
  lessonOrder: readonly SlideId[],
): SlideRegistry {
  const byId = new Map<SlideId, SlideData>();

  for (const slide of slides) {
    if (byId.has(slide.id)) {
      throw new SlideRegistryError(`ID slide duplicato: ${slide.id}`);
    }
    byId.set(slide.id, slide);
  }

  for (const slideId of lessonOrder) {
    if (!byId.has(slideId)) {
      throw new SlideRegistryError(`ID slide assente nel registry: ${slideId}`);
    }
  }

  const getSlideById = (slideId: SlideId): SlideData => {
    const slide = byId.get(slideId);
    if (!slide) {
      throw new SlideRegistryError(`ID slide inesistente: ${slideId}`);
    }
    return slide;
  };

  const getSlidePosition = (slideId: SlideId): number => {
    const position = lessonOrder.indexOf(slideId);
    if (position === -1) {
      throw new SlideRegistryError(`ID slide fuori ordine lezione: ${slideId}`);
    }
    return position;
  };

  return {
    byId,
    order: [...lessonOrder],
    getSlideById,
    assertSlideExists: (slideId: SlideId) => {
      getSlideById(slideId);
      getSlidePosition(slideId);
    },
    getPreviousSlideId: (slideId: SlideId) => {
      const position = getSlidePosition(slideId);
      return position > 0 ? lessonOrder[position - 1] : null;
    },
    getNextSlideId: (slideId: SlideId) => {
      const position = getSlidePosition(slideId);
      return position < lessonOrder.length - 1 ? lessonOrder[position + 1] : null;
    },
    getSlidePosition,
  };
}
