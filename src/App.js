import React, { useCallback, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MainFrontPage from "./components/body/MainFrontPage";
import MainInfoPage from "./components/body/MainInfoPage";
import MainCallToActionArea from "./components/body/MainCallToActionArea";
import Footer from "./components/footer/Footer";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import IntroAnimation from "./components/animation/IntroAnimation";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [onIntroAnimation, setOnIntroAnimation] = useState(true);

  const ps = useRef();

  const handleScrollY = useCallback((container) => {
    const scrollPosition = container.scrollTop;
    setScrollY(scrollPosition);
  }, []);

  function scrollTop() {
    const curr = ps.current;
    if (curr) {
      const startPosition = curr.scrollTop;
      const duration = 300;
      const startTime = performance.now();

      function animateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const scrollPosition = startPosition * (1 - progress);

        curr.scrollTop = scrollPosition;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    }
  }

  return (
    <Router>
      {onIntroAnimation && (
        <IntroAnimation
          onIntroAnimationComplete={() => setOnIntroAnimation(false)}
        />
      )}
      <PerfectScrollbar
        className="app-scroll"
        onScrollY={handleScrollY}
        containerRef={(el) => (ps.current = el)}
      >
        <Header scrollY={scrollY} scrollTop={scrollTop} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainFrontPage
                  scrollY={scrollY}
                  onIntroAnimation={onIntroAnimation}
                />
                <MainInfoPage scrollY={scrollY} ps={ps} />
                <MainCallToActionArea scrollY={scrollY} ps={ps} />
              </>
            }
          />
        </Routes>
        <Footer scrollTop={scrollTop} />
      </PerfectScrollbar>
    </Router>
  );
}

export default App;
