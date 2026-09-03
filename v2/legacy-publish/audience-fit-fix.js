(() => {
  if (location.hash !== '#aula') return;

  const slide = document.getElementById('slide');
  if (!slide) return;

  let frame = 0;
  const px = value => Number.parseFloat(value) || 0;

  function measure(inner) {
    const base = inner.getBoundingClientRect();
    let width = Math.max(1, inner.scrollWidth, inner.offsetWidth);
    let height = Math.max(1, inner.scrollHeight, inner.offsetHeight);

    inner.querySelectorAll('*').forEach(node => {
      const style = getComputedStyle(node);
      if (style.display === 'none' || style.visibility === 'hidden') return;
      const rect = node.getBoundingClientRect();
      if (!rect.width && !rect.height) return;
      width = Math.max(width, rect.right - base.left);
      height = Math.max(height, rect.bottom - base.top);
    });

    return { width, height };
  }

  function centerNaturalWidth(inner, scale) {
    const widthPercent = 100 / scale;
    inner.style.width = `${widthPercent}%`;
    inner.style.marginLeft = `${(100 - widthPercent) / 2}%`;
  }

  function fitAudienceSlide() {
    const inner = slide.querySelector('.audience-fit-inner');
    if (!inner) return;

    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const slideStyle = getComputedStyle(slide);
      const availableWidth = Math.max(
        1,
        slide.clientWidth - px(slideStyle.paddingLeft) - px(slideStyle.paddingRight) - 12,
      );
      const availableHeight = Math.max(
        1,
        slide.clientHeight - px(slideStyle.paddingTop) - px(slideStyle.paddingBottom) - 18,
      );

      inner.style.transform = 'none';
      inner.style.marginTop = '0px';
      inner.style.marginLeft = '0px';
      inner.style.width = '100%';
      slide.style.overflow = 'hidden';

      let natural = measure(inner);
      let scale = Math.min(
        1,
        availableWidth / natural.width,
        availableHeight / natural.height,
      );

      for (let pass = 0; pass < 3 && scale < 0.999; pass += 1) {
        centerNaturalWidth(inner, scale);
        natural = measure(inner);
        const nextScale = Math.min(
          1,
          availableWidth / natural.width,
          availableHeight / natural.height,
        );
        if (Math.abs(nextScale - scale) < 0.002) {
          scale = nextScale;
          break;
        }
        scale = nextScale;
      }

      scale = Math.max(0.45, Math.min(1, scale * 0.99));
      centerNaturalWidth(inner, scale);
      natural = measure(inner);
      scale = Math.max(
        0.45,
        Math.min(
          scale,
          availableWidth / natural.width,
          availableHeight / natural.height,
        ),
      );
      centerNaturalWidth(inner, scale);

      inner.style.transformOrigin = 'top center';
      inner.style.transform = `scale(${scale})`;
      inner.style.marginTop = `${Math.max(0, (availableHeight - natural.height * scale) / 2)}px`;
      inner.dataset.fitScale = scale.toFixed(4);
      inner.dataset.fitEngine = 'audience-centered-v3';
    });
  }

  function scheduleAudienceFit() {
    requestAnimationFrame(() => requestAnimationFrame(fitAudienceSlide));
  }

  window.fitAudienceSlide = fitAudienceSlide;
  window.scheduleAudienceFit = scheduleAudienceFit;

  const mutationObserver = new MutationObserver(mutations => {
    const inner = slide.querySelector('.audience-fit-inner');
    const onlyOwnStyleChanges = inner && mutations.every(mutation =>
      mutation.target === inner &&
      mutation.type === 'attributes' &&
      (mutation.attributeName === 'style' ||
        mutation.attributeName === 'data-fit-scale' ||
        mutation.attributeName === 'data-fit-engine')
    );
    if (!onlyOwnStyleChanges) scheduleAudienceFit();
  });

  mutationObserver.observe(slide, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
  });

  const resizeObserver = new ResizeObserver(scheduleAudienceFit);
  resizeObserver.observe(slide);
  window.addEventListener('resize', scheduleAudienceFit);
  window.visualViewport?.addEventListener('resize', scheduleAudienceFit);
  document.fonts?.ready?.then(scheduleAudienceFit);

  scheduleAudienceFit();
})();
