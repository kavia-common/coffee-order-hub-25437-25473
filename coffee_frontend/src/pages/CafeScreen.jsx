import React, { useEffect } from 'react';
import '../assets/cafe-screen-1-6.css';
import { initCafeScreen, destroyCafeScreen } from '../assets/cafe-screen-1-6';

/**
 * PUBLIC_INTERFACE
 * CafeScreen
 * A React component that renders the "Cafe Screen" using the Ocean Professional theme.
 * It mirrors the provided HTML structure and loads the CSS. Minimal script behaviors are ported using useEffect.
 */
function CafeScreen() {
  useEffect(() => {
    // Initialize minimal interactive behaviors (hover/focus, keyboard support)
    const cleanup = initCafeScreen?.();
    return () => {
      // Cleanup any listeners/side-effects
      if (typeof destroyCafeScreen === 'function') {
        destroyCafeScreen();
      }
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  return (
    <main id="page" className="page" aria-labelledby="screen-title" role="main">
      <h1 id="screen-title" className="visually-hidden">Cafe Screen</h1>

      {/* Root frame 1:6 */}
      <section
        id="frame-1-6"
        className="frame"
        role="region"
        aria-label="Cafe Screen"
        data-node-id="1:6"
        data-node-name="Cafe Screen"
      >
        {/* Background top image Rectangle 1748 (205:198) */}
        <img
          src="/assets/figmaimages/figma_image_205_198.png"
          alt="Cafe hero background"
          className="bg-hero"
          width="375"
          height="334"
          decoding="async"
        />

        {/* Content surface Rectangle 1749 (205:199) */}
        <div className="content-surface" aria-hidden="true" data-node-id="205:199" data-node-name="Rectangle 1749"></div>

        {/* Dots Group 8 (205:203) */}
        <div className="dots-group" role="group" aria-label="carousel position" data-node-id="205:203" data-node-name="Group 8">
          <img
            src="/assets/figmaimages/figma_image_205_200.png"
            alt="active dot"
            className="dot dot-active"
            width="12"
            height="12"
            decoding="async"
            data-node-id="205:200"
            data-node-name="Ellipse 1"
          />
          {/* Ellipse 2,3 placeholders */}
          <span className="dot dot-placeholder" role="img" aria-label="placeholder for missing asset (Ellipse 2) expected style_5" data-node-id="205:201" data-node-name="Ellipse 2"></span>
          <span className="dot dot-placeholder" role="img" aria-label="placeholder for missing asset (Ellipse 3) expected style_5" data-node-id="205:202" data-node-name="Ellipse 3"></span>
        </div>

        {/* Categories Group 9 (207:57) */}
        <nav className="categories" aria-label="Categories" role="navigation" data-node-id="207:57" data-node-name="Group 9">
          {/* Frame 14 - Coffee */}
          <a href="#" className="category" role="link" data-node-id="207:34" data-node-name="Frame 14" aria-label="Category Coffee">
            <img
              src="/assets/figmaimages/figma_image_207_36.png"
              alt="coffee icon"
              className="cat-icon"
              width="22"
              height="24"
              decoding="async"
              data-node-id="207:36"
              data-node-name="Vector"
            />
            <span className="cat-label" data-node-id="207:37" data-node-name="Coffee">Coffee</span>
          </a>

          {/* Frame 13 - Drinks */}
          <a href="#" className="category" role="link" data-node-id="207:28" data-node-name="Frame 13" aria-label="Category Drinks">
            <img
              src="/assets/figmaimages/figma_image_207_20.png"
              alt="drinks icon"
              className="cat-icon"
              width="20"
              height="24"
              decoding="async"
              data-node-id="207:20"
              data-node-name="Vector"
            />
            <span className="cat-label" data-node-id="207:31" data-node-name="Drinks">Drinks</span>
          </a>

          {/* Frame 12 - Food */}
          <a href="#" className="category" role="link" data-node-id="207:24" data-node-name="Frame 12" aria-label="Category Food">
            <img
              src="/assets/figmaimages/figma_image_207_18.png"
              alt="food icon"
              className="cat-icon"
              width="24"
              height="24"
              decoding="async"
              data-node-id="207:18"
              data-node-name="Vector"
            />
            <span className="cat-label" data-node-id="207:27" data-node-name="Food">Food</span>
          </a>
        </nav>

        {/* Back chevron (207:48) - CSS chevron */}
        <button id="back-button-207-48" className="icon-button back-button" aria-label="Go back" data-node-id="207:48" data-node-name="chevron-left">
          <span aria-hidden="true" className="chevron"></span>
        </button>

        {/* Header info Frame 15 (207:63) */}
        <header className="header-info" data-node-id="207:63" data-node-name="Frame 15" aria-labelledby="cafe-name-207-40">
          <h2 id="cafe-name-207-40" className="cafe-name" data-node-id="207:40" data-node-name="Haus Coffee">Haus Coffee</h2>
          <div className="rating-row" data-node-id="207:59" data-node-name="Frame 1" aria-label="Rating">
            <img
              src="/assets/figmaimages/figma_image_207_60.png"
              alt="star"
              className="rating-star"
              width="13"
              height="12"
              decoding="async"
              data-node-id="207:60"
              data-node-name="Vector"
            />
            <span className="rating-text" data-node-id="207:61" data-node-name="4.4 429 reviews">4.4 429 reviews</span>
          </div>
          <div className="location" data-node-id="207:62" data-node-name="San Francisco, CA">San Francisco, CA</div>
        </header>

        {/* Products list Frame 18 (208:24) */}
        <section className="products" role="list" aria-label="Menu items" data-node-id="208:24" data-node-name="Frame 18">
          {/* Group 11 (207:91) - Item 1 */}
          <article className="product-card" role="listitem" data-node-id="207:91" data-node-name="Group 11">
            <div className="card-surface" aria-hidden="true" data-node-id="207:64" data-node-name="Rectangle 1750"></div>

            {/* Plus button group (207:79) */}
            <button className="icon-button plus-button" aria-label="Add item Cafè mocha" data-node-id="207:79" data-node-name="Group 2">
              <img
                src="/assets/figmaimages/figma_image_207_80.png"
                alt=""
                width="36"
                height="36"
                className="plus-ellipse"
                decoding="async"
                data-node-id="207:80"
                data-node-name="Ellipse 3"
              />
              <span className="plus-vertical" aria-hidden="true" data-node-id="207:88"></span>
              <span className="plus-horizontal" aria-hidden="true" data-node-id="207:89"></span>
            </button>

            {/* Group 10 (207:90) */}
            <img
              src="/assets/figmaimages/figma_image_207_65.png"
              alt="Cafè mocha image"
              className="product-image"
              width="89"
              height="105"
              decoding="async"
              data-node-id="207:65"
              data-node-name="Rectangle 1751"
            />
            <div className="product-info" data-node-id="207:83" data-node-name="Frame 17">
              <div className="product-text" data-node-id="207:82" data-node-name="Frame 16">
                <h3 className="product-title" data-node-id="207:66" data-node-name="Cafè mocha">Cafè mocha</h3>
                <p className="product-desc" data-node-id="207:67" data-node-name="A chocolate-flavored warm beverage that is a variant of a café latte">
                  A chocolate-flavored warm beverage that is a variant of a café latte
                </p>
              </div>
              <div className="product-price" data-node-id="207:78" data-node-name="$3.00">$3.00</div>
            </div>
          </article>

          {/* Group 12 (208:10) - Item 2 */}
          <article className="product-card" role="listitem" data-node-id="208:10" data-node-name="Group 12">
            <div className="card-surface" aria-hidden="true" data-node-id="208:11" data-node-name="Rectangle 1750"></div>

            {/* Plus group (208:12) placeholder */}
            <button className="icon-button plus-button" aria-label="Add item Caramel macchiato" data-node-id="208:12" data-node-name="Group 2">
              <span className="plus-ellipse placeholder" role="img" aria-label="placeholder for missing asset Ellipse 3 style_13"></span>
              <span className="plus-vertical" aria-hidden="true" data-node-id="208:15"></span>
              <span className="plus-horizontal" aria-hidden="true" data-node-id="208:16"></span>
            </button>

            {/* Missing imagePath placeholder */}
            <div
              className="product-image placeholder"
              role="img"
              aria-label="placeholder for missing asset /assets/figmaimages/figma_image_208_18.png"
              data-node-id="208:18"
              data-node-name="Rectangle 1751"
              title="Missing asset: expected /assets/figmaimages/figma_image_208_18.png"
            ></div>

            <div className="product-info" data-node-id="208:19" data-node-name="Frame 17">
              <div className="product-text" data-node-id="208:20" data-node-name="Frame 16">
                <h3 className="product-title" data-node-id="208:21" data-node-name="Caramel machiatto">Caramel machiatto</h3>
                <p className="product-desc" data-node-id="208:22" data-node-name="Steamed milk marked with an espresso and caramel topping">
                  Steamed milk marked with an espresso and  caramel topping
                </p>
              </div>
              <div className="product-price" data-node-id="208:23" data-node-name="$3.50">$3.50</div>
            </div>
          </article>
        </section>

        {/* Foreground bar Rectangle 1752 (208:30) */}
        <div className="overlay-divider" aria-hidden="true" data-node-id="208:30" data-node-name="Rectangle 1752"></div>
      </section>
    </main>
  );
}

export default CafeScreen;
