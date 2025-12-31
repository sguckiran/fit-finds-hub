// Dev-only overflow detector: finds elements wider than the viewport and logs them to console
// This file is intended to be imported only in development.

function findOverflowing() {
  try {
    const docWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const elems = Array.from(document.querySelectorAll('body *')) as HTMLElement[];
    const offenders: { el: HTMLElement; rect: DOMRect }[] = [];

    elems.forEach((el) => {
      // skip elements that are not visible
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity || '1') === 0) return;
      // skip elements that are intentionally full-bleed (we still report them)
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0) return;
      if (rect.left < 0 || rect.right > docWidth + 0.5) {
        offenders.push({ el, rect });
      }
    });

    if (offenders.length === 0) {
      // eslint-disable-next-line no-console
      console.info('[overflow-detector] No overflowing elements detected.');
      return;
    }

    // Report offenders
    // eslint-disable-next-line no-console
    console.warn(`[overflow-detector] Found ${offenders.length} elements exceeding viewport width (${docWidth}px):`);
    offenders.forEach(({ el, rect }, i) => {
      // eslint-disable-next-line no-console
      console.groupCollapsed(`Overflow ${i + 1}: <${el.tagName.toLowerCase()} id="${el.id}" class="${el.className}">`);
      // eslint-disable-next-line no-console
      console.log('rect', { left: rect.left, right: rect.right, width: rect.width, viewport: docWidth });
      // eslint-disable-next-line no-console
      console.log('element', el);
      // add a temporary visual outline to help spot it on the page
      (el.style as any).outline = '3px solid rgba(255,0,0,0.6)';
      (el.style as any).outlineOffset = '-2px';
      console.groupEnd();
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[overflow-detector] Error checking overflow:', err);
  }
}

// Run after a short delay to let layout stabilize
function run() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  window.addEventListener('load', () => {
    setTimeout(findOverflowing, 250);
  });
  // also run on resize and orientation change
  window.addEventListener('resize', () => setTimeout(findOverflowing, 100));
  window.addEventListener('orientationchange', () => setTimeout(findOverflowing, 150));
}

export default run;

// Auto-run if imported
run();

