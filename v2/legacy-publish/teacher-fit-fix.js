(() => {
  if (location.hash === '#aula') return;

  const slide = document.getElementById('slide');
  if (!slide) return;

  let frame = 0;
  let wrapping = false;
  const px = value => Number.parseFloat(value) || 0;

  function isHome() {
    return Boolean(slide.querySelector(':scope > .home'));
  }

  function ensureInner() {
    const existing = slide.querySelector(':scope > .teacher-fit-inner');
    if (existing) return existing;
    if (isHome() || !slide.childNodes.length || wrapping) return null;

    wrapping = true;
    const inner = document.createElement('div');
    inner.className = 'teacher-fit-inner';
    inner.style.width = '100%';
    inner.style.transformOrigin = 'top left';
    while (slide.firstChild) inner.appendChild(slide.firstChild);
    slide.appendChild(inner);
    wrapping = false;
    return inner;
  }

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

  function fitTeacherSlide() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (isHome()) {
        slide.style.height = '';
        slide.style.minHeight = '';
        slide.style.maxHeight = '';
        slide.style.overflow = '';
        slide.scrollTop = 0;
        return;
      }

      const inner = ensureInner();
      if (!inner) return;

      slide.style.height = '100%';
      slide.style.minHeight = '0';
      slide.style.maxHeight = 'none';
      slide.style.overflow = 'hidden';
      slide.scrollTop = 0;
      slide.scrollLeft = 0;

      const slideStyle = getComputedStyle(slide);
      const availableWidth = Math.max(
        1,
        slide.clientWidth - px(slideStyle.paddingLeft) - px(slideStyle.paddingRight) - 8,
      );
      const availableHeight = Math.max(
        1,
        slide.clientHeight - px(slideStyle.paddingTop) - px(slideStyle.paddingBottom) - 8,
      );

      inner.style.transform = 'none';
      inner.style.marginTop = '0px';
      inner.style.width = '100%';

      let natural = measure(inner);
      let scale = Math.min(1, availableWidth / natural.width, availableHeight / natural.height);

      for (let pass = 0; pass < 3 && scale < 0.999; pass += 1) {
        inner.style.width = `${100 / scale}%`;
        natural = measure(inner);
        const nextScale = Math.min(
          1,
          availableWidth / natural.width,
          availableHeight / natural.height,
        );
        const newScale = Math.min(scale, nextScale);
        if (Math.abs(newScale - scale) < 0.002) {
          scale = newScale;
          break;
        }
        scale = newScale;
      }

      scale = Math.max(0.42, Math.min(1, scale * 0.975));
      inner.style.width = `${100 / scale}%`;
      natural = measure(inner);
      scale = Math.max(
        0.42,
        Math.min(
          scale,
          availableWidth / natural.width,
          availableHeight / natural.height,
        ) * 0.99,
      );

      inner.style.width = `${100 / scale}%`;
      inner.style.transformOrigin = 'top left';
      inner.style.transform = `scale(${scale})`;
      inner.style.marginTop = `${Math.max(0, (availableHeight - natural.height * scale) / 2)}px`;
      inner.dataset.fitScale = scale.toFixed(4);
      inner.dataset.fitEngine = 'teacher-balanced-v2';
    });
  }

  function scheduleFit() {
    requestAnimationFrame(() => requestAnimationFrame(fitTeacherSlide));
  }

  const mutationObserver = new MutationObserver(mutations => {
    const inner = slide.querySelector(':scope > .teacher-fit-inner');
    const onlyOwnStyleChanges = inner && mutations.every(mutation =>
      mutation.type === 'attributes' &&
      mutation.attributeName === 'style' &&
      (mutation.target === inner || mutation.target === slide)
    );
    if (!onlyOwnStyleChanges && !wrapping) scheduleFit();
  });

  mutationObserver.observe(slide, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['class', 'style'],
  });

  const resizeObserver = new ResizeObserver(scheduleFit);
  resizeObserver.observe(slide);
  window.addEventListener('resize', scheduleFit);
  window.visualViewport?.addEventListener('resize', scheduleFit);
  document.fonts?.ready?.then(scheduleFit);

  scheduleFit();
})();
