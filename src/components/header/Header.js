import React from "react";
import "../../assests/styles/header/Header.css";

function Header() {
  return (
    <div className="headerWrap">
      <div className="headerBox">
        <div className="headerTitle">더기</div>
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
