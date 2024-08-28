import React from "react";
import "../../assests/styles/body/MainFrontPage.css";
import MainFrontPageBackgroundImg from "../../assests/images/MainFrontPageBackgroundImg.jpg";

function MainFrontPage() {
  return (
    <div className="mainFrontPageWrap">
      <div className="mainFrontPageBox">
        <div className="MainFrontPageImgWrap">
          <img
            className="mainFrontPageBG"
            src={MainFrontPageBackgroundImg}
            alt="MainBG"
          />
        </div>
      </div>
      <div className="MainFrontPageGridWrap">
        <div className="MainFrontPageGrid"></div>
      </div>
    </div>
    // 123123
  );
}

export default MainFrontPage;
