import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainFrontPage from "./components/body/MainFrontPage";
import MainInfoPage from "./components/body/MainInfoPage";
import MainCallToActionArea from "./components/body/MainCallToActionArea";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const scrollbarRef = useRef(null); // PerfectScrollbar 참조

  const handleScrollY = useCallback((container) => {
    const scrollPosition = container.scrollTop;
    setScrollY(scrollPosition);
  }, []);

  const resetScrollY = () => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTop = 0; // PerfectScrollbar의 스크롤 위치를 0으로 설정
      setScrollY(0); // 상태도 0으로 업데이트
    }
  };

  return (
    <PerfectScrollbar
      className="app-scroll"
      onScrollY={handleScrollY}
      ref={scrollbarRef}
    >
      <Header scrollY={scrollY} onResetScrollY={resetScrollY} />
      <MainFrontPage />
      <MainInfoPage />
      <MainCallToActionArea />
    </PerfectScrollbar>
  );
}

export default App;
