import React, { useEffect, useState } from "react";
import "../../assests/styles/header/Header.css";
import { Link } from "react-router-dom";

function Header({ scrollY, scrollTop }) {
  const [onScrollTrigger, setOnScrollTrigger] = useState(false);
  useEffect(() => {
    if (scrollY > 50) {
      setOnScrollTrigger(true);
    } else {
      setOnScrollTrigger(false);
    }
  }, [scrollY]);

  const handleTitleClick = () => {
    scrollTop(); // 부모 컴포넌트의 scrollY 값을 0으로 리셋
  };
  return (
    <div className="headerWrap">
      <div className={`headerBox ${onScrollTrigger ? "active" : ""}`}>
        <div className="headerTitle" onClick={handleTitleClick}>
          <Link to="/">오리더기</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
