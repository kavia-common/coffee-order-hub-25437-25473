import React, { useEffect } from 'react';
import '../assets/notes-delete-after-reading-8-3.css';

/**
 * PUBLIC_INTERFACE
 * NotesDeleteAfterReading
 * A React component that renders the "Notes [Delete after reading]" screen using the Ocean Professional theme.
 * It mirrors the provided HTML structure and loads the CSS. Minimal script behaviors are ported using useEffect.
 */
function NotesDeleteAfterReading() {
  useEffect(() => {
    // Adapt essential behaviors from assets/notes-delete-after-reading-8-3.js
    const frame = document.getElementById('frame-8-3');
    const notes = document.getElementById('notes-container-8-18');
    const title = document.getElementById('notes-title-8-4');

    if (frame) {
      frame.style.transition = 'box-shadow 160ms ease, transform 160ms ease';
      const onEnter = () => { frame.style.boxShadow = '0 4px 14px rgba(37,99,235,0.15)'; };
      const onLeave = () => { frame.style.boxShadow = ''; };
      frame.addEventListener('mouseenter', onEnter);
      frame.addEventListener('mouseleave', onLeave);
      frame.addEventListener('focusin', onEnter);
      frame.addEventListener('focusout', onLeave);

      // Cleanup
      return () => {
        frame.removeEventListener('mouseenter', onEnter);
        frame.removeEventListener('mouseleave', onLeave);
        frame.removeEventListener('focusin', onEnter);
        frame.removeEventListener('focusout', onLeave);
      };
    }

    return undefined;
  }, []);

  useEffect(() => {
    // Ensure focusability as per original script
    const notes = document.getElementById('notes-container-8-18');
    const title = document.getElementById('notes-title-8-4');
    if (notes) {
      notes.tabIndex = 0;
      notes.setAttribute('role', 'group');
    }
    if (title) {
      title.tabIndex = 0;
    }
  }, []);

  return (
    <main id="page" className="page" aria-labelledby="screen-title" role="main">
      <h1 id="screen-title" className="visually-hidden">Notes - Delete after reading</h1>

      <section
        id="frame-8-3"
        className="frame"
        aria-label="Notes frame"
        data-node-id="8:3"
        data-node-name="Notes [Delete after reading]"
        role="region"
      >
        <article
          id="notes-container-8-18"
          className="notes-container"
          data-node-id="8:18"
          data-node-name="Notes"
          aria-labelledby="notes-title-8-4"
        >
          <header className="notes-header">
            <h2 id="notes-title-8-4" className="notes-title" data-node-id="8:4" data-node-name="Notes ✏️">
              Notes ✏️
            </h2>
          </header>

          <div className="notes-body">
            <p
              id="notes-text-8-5"
              className="notes-text"
              data-node-id="8:5"
              data-node-name="• Icons are from @ Feather Icons and Flaticon • Raleway can be downloaded for free @ Google Fonts"
            >
              • Icons are from @ Feather Icons and Flaticon
            </p>
            <p className="notes-text">• Raleway can be downloaded for free @ Google Fonts</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default NotesDeleteAfterReading;
