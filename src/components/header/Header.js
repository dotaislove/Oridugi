import React, { useEffect, useState } from "react";
import "../../assests/styles/header/Header.css";

function Header({ scrollY, onResetScrollY }) {
  const [onScrollTrigger, setOnScrollTrigger] = useState(false);
  useEffect(() => {
    if (scrollY > 50) {
      setOnScrollTrigger(true);
    } else {
      setOnScrollTrigger(false);
    }
  }, [scrollY]);

  const handleTitleClick = () => {
    onResetScrollY(); // 부모 컴포넌트의 scrollY 값을 0으로 리셋
  };
  return (
    <div className="headerWrap">
      <div className={`headerBox ${onScrollTrigger ? "active" : ""}`}>
        <div className="headerTitle" onClick={handleTitleClick}>
          오리더기
        </div>
        <div className="headerButtonWrap">
          <div className="gallery">갤러리</div>
          <div className="thread">게시판</div>
          <div className="inquiry">가입문의</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
