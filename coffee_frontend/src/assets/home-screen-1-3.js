(() => {
  // PUBLIC_INTERFACE
  /**
   * initHomeScreen
   * Initialize accessible focus state and interactive affordances for the Home Screen.
   * - Focusability of the artboard
   * - Keyboard activation for favorite buttons and nav items
   * - Subtle hover/focus elevation cues
   */
  function initHomeScreen() {
    const frame = document.getElementById('frame-1-3');
    const favButtons = document.querySelectorAll('.fav-button');
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');

    if (frame) {
      frame.tabIndex = 0;
      frame.style.transition = 'box-shadow 160ms ease, transform 160ms ease';
      const onEnter = () => (frame.style.boxShadow = '0 8px 24px rgba(37,99,235,0.12)');
      const onLeave = () => (frame.style.boxShadow = '');
      frame.addEventListener('mouseenter', onEnter);
      frame.addEventListener('mouseleave', onLeave);
      frame.addEventListener('focusin', onEnter);
      frame.addEventListener('focusout', onLeave);
    }

    favButtons.forEach((btn) => {
      btn.setAttribute('tabindex', '0');
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      };
      const onClick = () => {
        // Quick feedback animation
        btn.animate(
          [{ transform: 'scale(1)' }, { transform: 'scale(0.92)' }, { transform: 'scale(1)' }],
          { duration: 160, easing: 'ease-out' }
        );
      };
      btn.addEventListener('keydown', onKey);
      btn.addEventListener('click', onClick);
    });

    navItems.forEach((item) => {
      item.setAttribute('tabindex', '0');
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      };
      item.addEventListener('keydown', onKey);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeScreen);
  } else {
    initHomeScreen();
  }
})();
