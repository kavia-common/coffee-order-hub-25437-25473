//
// Minimal interaction wrapper for Cafe Screen inside React
//

/**
 * PUBLIC_INTERFACE
 * initCafeScreen
 * Initialize accessible focus state and interactive affordances for the CafeScreen.
 * Returns an optional cleanup function to remove listeners.
 */
export function initCafeScreen() {
  const frame = document.getElementById('frame-1-6');
  const back = document.getElementById('back-button-207-48');
  const categories = document.querySelectorAll('.category');
  const plusButtons = document.querySelectorAll('.plus-button');

  const listeners = [];

  if (frame) {
    frame.tabIndex = 0;
    frame.style.transition = 'box-shadow 160ms ease, transform 160ms ease';
    const onEnter = () => (frame.style.boxShadow = '0 8px 24px rgba(37,99,235,0.12)');
    const onLeave = () => (frame.style.boxShadow = '');
    frame.addEventListener('mouseenter', onEnter);
    frame.addEventListener('mouseleave', onLeave);
    frame.addEventListener('focusin', onEnter);
    frame.addEventListener('focusout', onLeave);
    listeners.push(() => {
      frame.removeEventListener('mouseenter', onEnter);
      frame.removeEventListener('mouseleave', onLeave);
      frame.removeEventListener('focusin', onEnter);
      frame.removeEventListener('focusout', onLeave);
    });
  }

  if (back) {
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        back.click();
      }
    };
    const onClick = () => {
      // Use window.history to avoid eslint no-restricted-globals on history
      if (window.history && window.history.length > 1) {
        window.history.back();
      }
    };
    back.addEventListener('keydown', onKey);
    back.addEventListener('click', onClick);
    listeners.push(() => {
      back.removeEventListener('keydown', onKey);
      back.removeEventListener('click', onClick);
    });
  }

  categories.forEach((el) => {
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    };
    el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', onKey);
    listeners.push(() => el.removeEventListener('keydown', onKey));
  });

  plusButtons.forEach((btn) => {
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    };
    const onClick = () => {
      btn.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(0.92)' }, { transform: 'scale(1)' }],
        { duration: 160, easing: 'ease-out' }
      );
    };
    btn.setAttribute('tabindex', '0');
    btn.addEventListener('keydown', onKey);
    btn.addEventListener('click', onClick);
    listeners.push(() => {
      btn.removeEventListener('keydown', onKey);
      btn.removeEventListener('click', onClick);
    });
  });

  // Return cleanup
  return function cleanup() {
    listeners.forEach((off) => {
      try { off(); } catch (e) { /* noop */ }
    });
  };
}

/**
 * PUBLIC_INTERFACE
 * destroyCafeScreen
 * Explicit cleanup helper in case external callers want to force cleanup.
 */
export function destroyCafeScreen() {
  // Currently all listeners are cleaned up by the function returned from initCafeScreen within the component's useEffect cleanup.
  // This function exists for symmetry and potential future expansion.
}
