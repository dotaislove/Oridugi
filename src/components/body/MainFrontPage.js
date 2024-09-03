import React from "react";
import "../../assests/styles/body/MainFrontPage.css";
import MainFrontPageBackgroundImg from "../../assests/images/MainFrontPageBackgroundImg.jpg";
import ChichizickIcon from "../../assests/images/icons/chichizickIcon.svg";
import DiscordIcon from "../../assests/images/icons/discordIcon.svg";

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
      <div className="mainFrontPageGridWrap">
        <div className="mainFrontPageGrid">
          <div className="mainFrontPageHeadTextWrap">
            <div className="mainFrontPageHeadUpperText">오리더기와</div>
            <div className="mainFrontPageHeadMiddleText">
              <div className="mainFrontPageHeadMiddleText1">
                <span>함께한</span>
                <span> 순간,</span>
              </div>
              <div className="mainFrontPageHeadMiddleText2">
                <span>더욱</span>
                <span> 소중한 시간!</span>
              </div>
            </div>
            <div className="mainFrontPageHeadLowerText">
              <div className="mainFrontPageHeadLowerText1">
                오리더기의 기타 체널들
              </div>
              <div className="mainFrontPageHeadLowerText2">
                <a href="https://chzzk.naver.com/9d00372c1cec9544f8d54d7914d797b6">
                  <div className="mainFrontPageHeadLowerText2Area">
                    <div className="mainFrontPageHeadLowerText2ImgWrap">
                      <img src={ChichizickIcon} alt="Chichizick Icon"></img>
                    </div>
                    <div>보라더기 치치직 채널 바로가기</div>
                  </div>
                </a>
              </div>
              <div className="mainFrontPageHeadLowerText3">
                <a href="https://discord.gg/MN7M2C6Yt7">
                  <div className="mainFrontPageHeadLowerText3Area">
                    <div className="mainFrontPageHeadLowerText3ImgWrap">
                      <img src={DiscordIcon} alt="Discord Icon"></img>
                    </div>
                    <div>보라더기 디스코드 체널 참가</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFrontPage;
