import React, { useEffect } from 'react';
import '../assets/home-screen-1-3.css';
import { /* optional named exports if needed later */ } from '../assets/home-screen-1-3';

/**
 * PUBLIC_INTERFACE
 * HomeScreen
 * A React component that renders the "Home Screen" using the Ocean Professional theme.
 * It mirrors the provided HTML structure and loads the CSS. Minimal script behaviors are mounted via useEffect.
 */
function HomeScreen() {
  useEffect(() => {
    // Import the IIFE side effects by referencing the module.
    // The copied assets/home-screen-1-3.js runs immediately and registers interactions on DOMContentLoaded or immediately.
    // To ensure interactions after mount, we can manually trigger a custom init if exposed in future.
    // Currently, the IIFE suffices; no explicit cleanup handlers available.
    // No-op cleanup to conform with React expectations.
    return () => {};
  }, []);

  return (
    <main id="page" className="page" aria-labelledby="screen-title" role="main">
      <h1 id="screen-title" className="visually-hidden">Home Screen</h1>

      {/* Root frame 1:3 */}
      <section
        id="frame-1-3"
        className="frame"
        role="region"
        aria-label="Home Screen"
        data-node-id="1:3"
        data-node-name="Home Screen"
      >
        {/* Header text: Find a coffee shop anywhere (203:37) */}
        <header className="hero-header" aria-labelledby="hero-title-203-37">
          <h2
            id="hero-title-203-37"
            className="hero-title"
            data-node-id="203:37"
            data-node-name="Find a coffee shop anywhere"
          >
            Find a coffee shop<br />anywhere
          </h2>
        </header>

        {/* Floating profile ellipse (203:66) */}
        <img
          src="/assets/figmaimages/figma_image_203_66.png"
          alt="Profile"
          className="ellipse-profile"
          width="50"
          height="50"
          decoding="async"
          data-node-id="203:66"
          data-node-name="Ellipse 1"
        />

        {/* Search content (206:16) */}
        <section
          className="search-content"
          data-node-id="206:16"
          data-node-name="Search content"
          aria-label="Search and filter"
          role="search"
        >
          {/* Search box (206:15) */}
          <div
            className="search-box"
            data-node-id="206:15"
            data-node-name="Search"
            role="searchbox"
            aria-label="Search coffee shops"
          >
            <div className="search-icon" data-node-id="205:204" data-node-name="search" aria-hidden="true">
              {/* Vector (205:205) */}
              <img
                src="/assets/figmaimages/figma_image_205_205.png"
                alt=""
                className="search-vector"
                width="16"
                height="16"
                decoding="async"
                data-node-id="205:205"
                data-node-name="Vector"
              />
              {/* Vector (205:206) has no imagePath; omitted */}
            </div>
            <span className="search-label" data-node-id="203:71" data-node-name="Search">Search</span>
          </div>

          {/* Filter (206:13) */}
          <button
            className="filter-button"
            type="button"
            data-node-id="206:13"
            data-node-name="Filter"
            aria-label="Open filter options"
          >
            <span className="filter-icon" data-node-id="205:122" data-node-name="Group 5" aria-hidden="true">
              {/* Ellipse 4 (205:120) */}
              <img
                src="/assets/figmaimages/figma_image_205_120.png"
                alt=""
                className="filter-ellipse"
                width="8"
                height="8"
                decoding="async"
                data-node-id="205:120"
                data-node-name="Ellipse 4"
              />
              {/* Other lines/dot drawn with CSS due to missing imagePaths */}
              <span className="filter-line line-top" data-node-id="205:118" aria-hidden="true"></span>
              <span className="filter-line line-bottom" data-node-id="205:119" aria-hidden="true"></span>
              <span className="filter-dot" data-node-id="205:121" aria-hidden="true"></span>
            </span>
          </button>
        </section>

        {/* Featured title (203:70) */}
        <h3
          className="featured-title"
          id="featured-title-203-70"
          data-node-id="203:70"
          data-node-name="Featured coffee shops"
        >
          Featured coffee shops
        </h3>

        {/* Cards grid container */}
        <section className="cards" aria-labelledby="featured-title-203-70" role="region" aria-label="Featured cards">
          {/* Card 1 (205:112) */}
          <article className="card" data-node-id="205:112" data-node-name="Card 1" aria-label="Home Coffee Roasters">
            <div className="card-media-group" data-node-id="205:110" data-node-name="Group 3" aria-hidden="true">
              {/* Rectangle 1747 (203:72) */}
              <img
                src="/assets/figmaimages/figma_image_203_72.png"
                alt="Home Coffee Roasters photo"
                className="card-image"
                width="153"
                height="168"
                decoding="async"
                data-node-id="203:72"
                data-node-name="Rectangle 1747"
              />
              {/* Group 1 (205:108) - favorite circle with heart */}
              <button
                className="fav-button"
                type="button"
                aria-label="Save Home Coffee Roasters"
                data-node-id="205:108"
                data-node-name="Group 1"
              >
                <img
                  src="/assets/figmaimages/figma_image_205_84.png"
                  alt=""
                  className="fav-ellipse"
                  width="36"
                  height="36"
                  decoding="async"
                  data-node-id="205:84"
                  data-node-name="Ellipse 2"
                />
                <img
                  src="/assets/figmaimages/figma_image_205_91.png"
                  alt=""
                  className="fav-icon"
                  width="16"
                  height="14"
                  decoding="async"
                  data-node-id="205:91"
                  data-node-name="Vector"
                />
              </button>
            </div>

            {/* Frame 2 (205:101) */}
            <div className="card-info" data-node-id="205:101" data-node-name="Frame 2">
              <h4 className="card-title" data-node-id="204:76" data-node-name="Home Coffee Roasters">
                Home Coffee Roasters
              </h4>
              {/* Frame 1 (205:100) */}
              <div
                className="card-rating"
                data-node-id="205:100"
                data-node-name="Frame 1"
                aria-label="Rating 4.5 out of 5 from 1,200 reviews"
              >
                <img
                  src="/assets/figmaimages/figma_image_205_98.png"
                  alt=""
                  className="rating-star"
                  width="13"
                  height="12"
                  decoding="async"
                  data-node-id="205:98"
                  data-node-name="Vector"
                />
                <span className="rating-text" data-node-id="205:94" data-node-name="4.5 1,200 reviews">
                  4.5 1,200 reviews
                </span>
              </div>
              <div className="card-distance" data-node-id="205:96" data-node-name="3.8 miles">3.8 miles</div>
            </div>
          </article>

          {/* Card 2 (205:113) */}
          <article className="card" data-node-id="205:113" data-node-name="Card 2" aria-label="Haus Coffee">
            <div className="card-media-group" data-node-id="205:111" data-node-name="Group 4" aria-hidden="true">
              {/* Rectangle 1748 (203:73) */}
              <img
                src="/assets/figmaimages/figma_image_203_73.png"
                alt="Haus Coffee photo"
                className="card-image"
                width="153"
                height="190"
                decoding="async"
                data-node-id="203:73"
                data-node-name="Rectangle 1748"
              />
              {/* Group 2 (205:109) - placeholders */}
              <button
                className="fav-button placeholder"
                type="button"
                aria-label="Save Haus Coffee"
                data-node-id="205:109"
                data-node-name="Group 2"
              >
                <span className="fav-ellipse placeholder" aria-hidden="true"></span>
                <span className="fav-icon placeholder" aria-hidden="true"></span>
              </button>
            </div>

            {/* Frame 3 (205:102) */}
            <div className="card-info" data-node-id="205:102" data-node-name="Frame 3">
              <h4 className="card-title" data-node-id="205:103" data-node-name="Haus Coffee">Haus Coffee</h4>
              {/* Frame 1 (205:104) */}
              <div
                className="card-rating"
                data-node-id="205:104"
                data-node-name="Frame 1"
                aria-label="Rating 4.4 out of 5 from 429 reviews"
              >
                {/* Vector (205:105) no imagePath -> placeholder star */}
                <span className="rating-star placeholder" aria-hidden="true"></span>
                <span className="rating-text" data-node-id="205:106" data-node-name="4.4 429 reviews">
                  4.4 429 reviews
                </span>
              </div>
              <div className="card-distance" data-node-id="205:107" data-node-name="2.5 miles">2.5 miles</div>
            </div>
          </article>

          {/* Card 3 (205:172) */}
          <article className="card" data-node-id="205:172" data-node-name="Card 3" aria-label="Home Coffee Roasters">
            <div className="card-media-group" data-node-id="205:173" data-node-name="Group 3" aria-hidden="true">
              {/* Rectangle 1747 (205:174) no imagePath -> placeholder image */}
              <div
                className="card-image placeholder"
                role="img"
                aria-label="placeholder for missing asset /assets/figmaimages/figma_image_205_174.png"
                data-node-id="205:174"
                data-node-name="Rectangle 1747"
                title="Missing asset: expected /assets/figmaimages/figma_image_205_174.png"
              ></div>
              {/* Group 1 (205:175) placeholders */}
              <button
                className="fav-button placeholder"
                type="button"
                aria-label="Save Home Coffee Roasters"
                data-node-id="205:175"
                data-node-name="Group 1"
              >
                <span className="fav-ellipse placeholder" aria-hidden="true"></span>
                <span className="fav-icon placeholder" aria-hidden="true"></span>
              </button>
            </div>

            {/* Frame 2 (205:178) */}
            <div className="card-info" data-node-id="205:178" data-node-name="Frame 2">
              <h4 className="card-title" data-node-id="205:179" data-node-name="Home Coffee Roasters">
                Home Coffee Roasters
              </h4>
              <div className="card-rating" data-node-id="205:180" data-node-name="Frame 1" aria-label="Rating 4.5 out of 5 from 1,200 reviews">
                <span className="rating-star placeholder" aria-hidden="true"></span>
                <span className="rating-text" data-node-id="205:182" data-node-name="4.5 1,200 reviews">4.5 1,200 reviews</span>
              </div>
              <div className="card-distance" data-node-id="205:183" data-node-name="3.8 miles">3.8 miles</div>
            </div>
          </article>

          {/* Card 4 (205:184) */}
          <article className="card" data-node-id="205:184" data-node-name="Card 4" aria-label="Haus Coffee">
            <div className="card-media-group" data-node-id="205:185" data-node-name="Group 4" aria-hidden="true">
              {/* Rectangle 1748 (205:186) no imagePath -> placeholder */}
              <div
                className="card-image placeholder"
                role="img"
                aria-label="placeholder for missing asset /assets/figmaimages/figma_image_205_186.png"
                data-node-id="205:186"
                data-node-name="Rectangle 1748"
                title="Missing asset: expected /assets/figmaimages/figma_image_205_186.png"
              ></div>
              {/* Group 2 (205:187) placeholders */}
              <button
                className="fav-button placeholder"
                type="button"
                aria-label="Save Haus Coffee"
                data-node-id="205:187"
                data-node-name="Group 2"
              >
                <span className="fav-ellipse placeholder" aria-hidden="true"></span>
                <span className="fav-icon placeholder" aria-hidden="true"></span>
              </button>
            </div>

            {/* Frame 3 (205:190) */}
            <div className="card-info" data-node-id="205:190" data-node-name="Frame 3">
              <h4 className="card-title" data-node-id="205:191" data-node-name="Haus Coffee">Haus Coffee</h4>
              <div className="card-rating" data-node-id="205:192" data-node-name="Frame 1" aria-label="Rating 4.4 out of 5 from 429 reviews">
                <span className="rating-star placeholder" aria-hidden="true"></span>
                <span className="rating-text" data-node-id="205:194" data-node-name="4.4 429 reviews">
                  4.4 429 reviews
                </span>
              </div>
              <div className="card-distance" data-node-id="205:195" data-node-name="2.5 miles">2.5 miles</div>
            </div>
          </article>
        </section>

        {/* Bottom Navigation (205:169) */}
        <nav
          className="bottom-nav"
          role="navigation"
          aria-label="Bottom navigation"
          data-node-id="205:169"
          data-node-name="Navigation"
        >
          {/* Home selected group (205:168) */}
          <a href="#home" className="nav-item selected" aria-current="page" data-node-id="205:168" data-node-name="Home selected">
            <img
              src="/assets/figmaimages/figma_image_205_165.png"
              alt=""
              className="nav-bg"
              width="70"
              height="58"
              decoding="async"
              data-node-id="205:165"
              data-node-name="Rectangle 1749"
            />
            <span className="nav-icon home" aria-hidden="true" data-node-id="205:153" data-node-name="home">
              <img
                src="/assets/figmaimages/figma_image_205_154.png"
                alt=""
                className="home-vector"
                width="18"
                height="20"
                decoding="async"
                data-node-id="205:154"
                data-node-name="Vector"
              />
            </span>
            <span className="visually-hidden">Home</span>
          </a>

          {/* heart (205:161) */}
          <a href="#favorites" className="nav-item" data-node-id="205:161" data-node-name="heart" aria-label="Favorites">
            <img
              src="/assets/figmaimages/figma_image_205_162.png"
              alt=""
              className="heart-vector"
              width="21"
              height="18"
              decoding="async"
              data-node-id="205:162"
              data-node-name="Vector"
            />
          </a>

          {/* bookmark (205:156) */}
          <a href="#bookmarks" className="nav-item" data-node-id="205:156" data-node-name="bookmark" aria-label="Bookmarks">
            <img
              src="/assets/figmaimages/figma_image_205_157.png"
              alt=""
              className="bookmark-vector"
              width="14"
              height="18"
              decoding="async"
              data-node-id="205:157"
              data-node-name="Vector"
            />
          </a>

          {/* user (205:158) */}
          <a href="#profile" className="nav-item" data-node-id="205:158" data-node-name="user" aria-label="Profile">
            {/* Vector 205:159 no imagePath; render via CSS */}
            <span className="user-base" aria-hidden="true"></span>
            <img
              src="/assets/figmaimages/figma_image_205_160.png"
              alt=""
              className="user-head"
              width="8"
              height="8"
              decoding="async"
              data-node-id="205:160"
              data-node-name="Vector"
            />
          </a>
        </nav>
      </section>
    </main>
  );
}

export default HomeScreen;
