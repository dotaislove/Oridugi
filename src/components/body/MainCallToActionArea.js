import React, { useRef, useState, useEffect } from "react";
import "../../assests/styles/body/MainCallToActionArea.css";
import MainActionBG from "../../assests/images/MainCallToActionAreaBG.jpg";
import Crown from "../../assests/images/Crown.png";
import Diamond from "../../assests/images/Diamond.png";
import FourHearts from "../../assests/images/FourHearts.png";
import LineWithHeart from "../../assests/images/LineWithHeart.png";
import { ReactComponent as DiscordIcon } from "../../assests/images/icons/discordIcon.svg";

function MainCallToActionArea({ scrollY, ps }) {
  const callToActionImgRef = useRef(null);
  const callToActionImgWrapRef = useRef(null);
  const callToActionRef = useRef(null);

  const [
    onCallToActionPageScrollTrigger,
    setOnCallToActionPageScrollTrigger,
  ] = useState(false);
  const [
    onCallToActionSecondAnimationTrigger,
    setOnCallToActionSecondAnimationTrigger,
  ] = useState(false);
  useEffect(() => {
    if (
      callToActionRef.current &&
      ps.current &&
      !onCallToActionPageScrollTrigger
    ) {
      const mainCallToActionTopValue =
        callToActionRef.current.getBoundingClientRect().top +
        ps.current.scrollTop;
      if (scrollY >= mainCallToActionTopValue - window.innerHeight + 400) {
        setOnCallToActionPageScrollTrigger(true);
      }
    }
  }, [scrollY, ps, onCallToActionPageScrollTrigger]);

  useEffect(() => {
    if (onCallToActionPageScrollTrigger) {
      const callToActionTimer = setTimeout(() => {
        setOnCallToActionSecondAnimationTrigger(true);
      }, 750);
      return () => clearTimeout(callToActionTimer);
    }
  }, [onCallToActionPageScrollTrigger]);

  useEffect(() => {
    function callToActionResizeImg() {
      const callToActionImg = callToActionImgRef.current;
      const callToActionImgWrap = callToActionImgWrapRef.current;

      if (!callToActionImg || !callToActionImgWrap) {
        return; // 이미지나 래퍼가 아직 렌더링되지 않았다면 함수 종료
      }

      const callToActionContainerAspect =
        callToActionImgWrap.offsetWidth / callToActionImgWrap.offsetHeight;
      const callToActionImgAspect =
        callToActionImg.naturalWidth / callToActionImg.naturalHeight;

      if (callToActionImgAspect > callToActionContainerAspect) {
        callToActionImg.style.width = "auto";
        callToActionImg.style.height = "100%";
      } else {
        callToActionImg.style.width = "100%";
        callToActionImg.style.height = "auto";
      }
    }
    const callToActionImg = callToActionImgRef.current;
    if (callToActionImg) {
      callToActionImg.addEventListener("load", callToActionResizeImg);
      if (callToActionImg.complete) {
        callToActionResizeImg();
      }
    }
    window.addEventListener("resize", callToActionResizeImg);

    return () => {
      if (callToActionImg) {
        callToActionImg.removeEventListener("load", callToActionResizeImg);
      }
      window.removeEventListener("resize", callToActionResizeImg);
    };
  }, []);
  return (
    <div className="mainActionWrap" ref={callToActionRef}>
      <div className="mainActionBGWrap" ref={callToActionImgWrapRef}>
        <img
          className="mainActionBG"
          alt="MainActionBG"
          src={MainActionBG}
          ref={callToActionImgRef}
        ></img>
      </div>
      <div className="mainActionGrid">
        <img
          alt="LineWithHeart"
          className={`LineWithHeart ${
            onCallToActionSecondAnimationTrigger ? "animateSubObject3" : ""
          }`}
          src={LineWithHeart}
        ></img>
        <img
          alt="Crown"
          className={`Crown ${
            onCallToActionPageScrollTrigger ? "animateSubObject4" : ""
          }`}
          src={Crown}
        ></img>
        <img
          alt="Diamond"
          className={`Diamond ${
            onCallToActionSecondAnimationTrigger ? "animateSubObject4" : ""
          }`}
          src={Diamond}
        ></img>
        <img
          alt="FourHearts"
          className={`FourHearts ${
            onCallToActionSecondAnimationTrigger ? "animateSubObject4" : ""
          }`}
          src={FourHearts}
        ></img>
        <div
          className={`mainActionTitle over800px ${
            onCallToActionPageScrollTrigger ? "animateTitle" : ""
          }`}
        >
          <div className="mainActionTitle1">
            <span>현재</span>
            <span> 오리더기</span>
            <span>에서</span>
          </div>
          <div className="mainActionTitle2">
            <span>오리를</span>
            <span> 모집중!</span>
          </div>
        </div>
        <div
          className={`mainActionTitle less800px ${
            onCallToActionPageScrollTrigger ? "animateTitle" : ""
          }`}
        >
          <div className="mainActionTitle1">
            <div>
              <span>오리더기</span>
              <span> 에서</span>
            </div>
          </div>
          <div className="mainActionTitle2">
            <span>오리를</span>
            <span> 모집중!</span>
          </div>
        </div>
        <div
          className={`mainActionTextWrap ${
            onCallToActionSecondAnimationTrigger ? "animateSubObject2" : ""
          }`}
        >
          <div className="mainActionText over800px">
            <div className="mainActionText1">
              <div>
                안녕하세요 오리더기의 창설 부대장인 보라더기 입니다. : )
              </div>
              <div>
                컨텐츠 공유를 위해 창설한 부대지만 현재는 이에 더 해 ‘소통’ 까지
                발전하고 있습니다. : )
              </div>
            </div>
            <div className="mainActionText2">
              <div>
                본인이 즐기는 컨텐츠를 적극적인 소통과 함께 ‘공유’ 하고
                싶으시다면 부디 오리더기의
              </div>
              <div>
                문을 두드려 주세요. 저 포함 모든 부대원들이 기다리고 있겠습니다.
                : )
              </div>
              <div>
                오리더기의 부대원이 된 이상 누구 한분이라도 소외되지 않고
                분위기에 잘 녹아들어
              </div>
              <div>재마있게 게임할 수 있도록 돕겠습니다. 감사합니다. : )</div>
            </div>
          </div>
          <div className="mainActionText less800px">
            <div className="over600px">
              <div className="mainActionText1">
                <div>
                  안녕하세요 오리더기의 창설 부대장인 보라더기 입니다. : )
                </div>
                <div>
                  컨텐츠 공유를 위해 창설한 부대지만 현재는 이에 더 해 ‘소통’
                  까지
                  <div>발전하고 있습니다. : )</div>
                </div>
              </div>
              <div className="mainActionText2">
                <div>
                  본인이 즐기는 컨텐츠를 적극적인 소통과 함께 ‘공유’ 하고
                  싶으시다면
                </div>
                <div>
                  부디 오리더기의 문을 두드려 주세요. 저 포함 모든 부대원들이
                </div>
                기다리고 있겠습니다. 오리더기의 부대원이 된 이상 누구 한분이라도
                <div>
                  소외되지 않고 분위기에 잘 녹아들어 재마있게 게임할 수 있도록
                </div>
                <div> 돕겠습니다. 감사합니다. : )</div>
              </div>
            </div>
          </div>
          <div className="mainActionText less800px less600px">
            <div className="mainActionText1">
              <div>
                오리더기의 창설 부대장인 보라더기 입니다. &nbsp;컨텐츠 공유를
                위해 창설한 부대지만 현재는 ‘소통’ 까지 발전하고 있습니다. : )
              </div>
            </div>
            <div className="mainActionText2">
              <div>
                본인이 즐기는 컨텐츠를 적극적인 소통과 함께 ‘공유’ 하고
                싶으시다면 부디 오리더기의 문을 두드려 주세요.&nbsp;저 포함 모든
                부대원들이 기다리고 있겠습니다.&nbsp;오리더기의 부대원이 된 이상
                누구 한분이라도 소외되지 않고 분위기에 잘 녹아들어 재마있게
                게임할 수 있도록 돕겠습니다.&nbsp;감사합니다. : )
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://discord.gg/MN7M2C6Yt7"
          className={`mainActionCallToActionButtonWrap ${
            onCallToActionSecondAnimationTrigger ? "animateSubObject" : ""
          }`}
        >
          <div className="mainActionCallToActionButton">
            <DiscordIcon className="mainActionCallToDiscordIcon" /> 오리더기
            가입 문의하기
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainCallToActionArea;
