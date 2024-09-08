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

function App() {
  const [scrollY, setScrollY] = useState(0);
  const ps = useRef();

  const handleScrollY = useCallback((container) => {
    const scrollPosition = container.scrollTop;
    setScrollY(scrollPosition);
  }, []);

  function scrollTop() {
    const curr = ps.current;
    if (curr) {
      curr.scrollTop = 0;
    }
  }

  return (
    <Router>
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
                <MainFrontPage />
                <MainInfoPage />
                <MainCallToActionArea />
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
