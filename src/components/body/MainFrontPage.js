import React, { useEffect, useRef, useState } from "react";
import "../../assests/styles/body/MainFrontPage.css";
import MainFrontPageBackgroundImg from "../../assests/images/MainFrontPageBackgroundImg.jpg";
import { ReactComponent as ChichizickIcon } from "../../assests/images/icons/chichizickIcon.svg";
import { ReactComponent as DiscordIcon } from "../../assests/images/icons/discordIcon.svg";

function MainFrontPage({ scrollY, onIntroAnimation }) {
  const frontPageImgRef = useRef(null);
  const frontPageImgWrapRef = useRef(null);
  const [onMainFrontScrollTrigger, setMainFrontOnScrollTrigger] = useState(
    false
  );
  const [
    onSecondMainFrontScrollTrigger,
    setOnSecondMainFrontScrollTrigger,
  ] = useState(false);

  useEffect(() => {
    if (scrollY <= 100) {
      setMainFrontOnScrollTrigger(true);
    }
  }, [scrollY]);

  useEffect(() => {
    if (onMainFrontScrollTrigger && !onIntroAnimation) {
      const timer = setTimeout(() => {
        setOnSecondMainFrontScrollTrigger(true);
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [onMainFrontScrollTrigger, onIntroAnimation]);

  useEffect(() => {
    function frontPageResizeImg() {
      const frontPageImg = frontPageImgRef.current;
      const frontPageImgWrap = frontPageImgWrapRef.current;

      if (!frontPageImg || !frontPageImgWrap) {
        return;
      }

      const frontPageContainerAspect =
        frontPageImgWrap.offsetWidth / frontPageImgWrap.offsetHeight;
      const frontPageImgAspect =
        frontPageImg.naturalWidth / frontPageImg.naturalHeight;

      if (frontPageImgAspect > frontPageContainerAspect) {
        frontPageImg.style.width = "auto";
        frontPageImg.style.height = "100%";
      } else {
        frontPageImg.style.width = "100%";
        frontPageImg.style.height = "auto";
      }
    }
    const frontPageImg = frontPageImgRef.current;
    if (frontPageImg) {
      frontPageImg.addEventListener("load", frontPageResizeImg);
      if (frontPageImg.complete) {
        frontPageResizeImg();
      }
    }
    window.addEventListener("resize", frontPageResizeImg);

    return () => {
      if (frontPageImg) {
        frontPageImg.removeEventListener("load", frontPageResizeImg);
      }
      window.removeEventListener("resize", frontPageResizeImg);
    };
  }, []);

  return (
    <div className="mainFrontPageWrap">
      <div className="mainFrontPageBox">
        <div className="MainFrontPageImgWrap" ref={frontPageImgWrapRef}>
          <img
            className="mainFrontPageBG"
            src={MainFrontPageBackgroundImg}
            alt="MainBG"
            ref={frontPageImgRef}
          />
        </div>
      </div>
      <div className="mainFrontPageGridWrap">
        <div className="mainFrontPageGrid">
          <div className="mainFrontPageHeadTextWrap">
            <div
              className={`mainFrontPageHeadUpperText ${
                onMainFrontScrollTrigger && !onIntroAnimation
                  ? "animateSubObject2"
                  : ""
              }`}
            >
              오리더기와
            </div>
            <div className="mainFrontPageHeadMiddleText">
              <div
                className={`mainFrontPageHeadMiddleText1 ${
                  onMainFrontScrollTrigger && !onIntroAnimation
                    ? "animateTitle"
                    : ""
                }`}
              >
                <span>함께한</span>
                <span> 순간,</span>
              </div>
              <div
                className={`mainFrontPageHeadMiddleText2 over800px ${
                  onMainFrontScrollTrigger && !onIntroAnimation
                    ? "animateTitle"
                    : ""
                }`}
              >
                <span>더욱</span>
                <span> 소중한 시간!</span>
              </div>
              <div
                className={`mainFrontPageHeadMiddleText2 less800px ${
                  onMainFrontScrollTrigger && !onIntroAnimation
                    ? "animateTitle"
                    : ""
                }`}
              >
                <span> 소중한</span>
                <span> 시간!</span>
              </div>
            </div>
            <div
              className={`mainFrontPageHeadLowerText ${
                onSecondMainFrontScrollTrigger ? "animateSubObject" : ""
              }`}
            >
              <div className="mainFrontPageHeadLowerText2">
                <a href="https://chzzk.naver.com/9d00372c1cec9544f8d54d7914d797b6">
                  <div className="mainFrontPageHeadLowerText2Area">
                    <div className="mainFrontPageHeadLowerText2ImgWrap">
                      <ChichizickIcon className="mainFrontChichizickIcon" />
                    </div>
                    <div>보라더기 치지직 채널 바로가기</div>
                  </div>
                </a>
              </div>

              <div className="mainFrontPageHeadLowerText3">
                <a href="https://discord.gg/MN7M2C6Yt7">
                  <div className="mainFrontPageHeadLowerText3Area">
                    <div className="mainFrontPageHeadLowerText3ImgWrap">
                      <DiscordIcon className="mainFrontDiscordIcon" />
                    </div>
                    <div>오리더기 채널 참가</div>
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
