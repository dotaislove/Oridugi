import React from "react";
import "../../assests/styles/body/MainCallToActionArea.css";
import MainActionBG from "../../assests/images/MainCallToActionAreaBG.jpg";
import Crown from "../../assests/images/Crown.png";
import Diamond from "../../assests/images/Diamond.png";
import FourHearts from "../../assests/images/FourHearts.png";
import LineWithHeart from "../../assests/images/LineWithHeart.png";

function MainCallToActionArea() {
  return (
    <div className="mainActionWrap">
      <div className="mainActionBGWrap">
        <img
          className="mainActionBG"
          alt="MainActionBG"
          src={MainActionBG}
        ></img>
      </div>
      <div className="mainActionGrid">
        <img
          alt="LineWithHeart"
          className="LineWithHeart"
          src={LineWithHeart}
        ></img>
        <img alt="Crown" className="Crown" src={Crown}></img>
        <img alt="Diamond" className="Diamond" src={Diamond}></img>
        <img alt="FourHearts" className="FourHearts" src={FourHearts}></img>
        <div className="mainActionTitle">
          <div className="mainActionTitle1">
            <span>현재</span>
            <span> 오리더기</span>
            <span>에서</span>
          </div>
          <div className="mainActionTitle2">
            <span>새끼 오리를</span>
            <span> 모집중!</span>
          </div>
        </div>
        <div className="mainActionText">
          <div className="mainActionText1">
            <div>안녕하세요 오리더기의 창설 부대장인 보라더기 입니다. :)</div>
            <div>
              컨텐츠 공유를 위해 창설한 부대지만 현재는 이에 더 해 ‘소통’ 까지
              발전하고 있습니다. :)
            </div>
          </div>
          <div className="mainActionText2">
            <div>
              본인이 즐기는 컨텐츠를 적극적인 소통과 함께 ‘공유’ 하고 싶으시다면
              부디 오리더기의
            </div>
            <div>
              문을 두드려 주세요. 저 포함 모든 부대원들이 기다리고 있겠습니다.
              :)
            </div>
            <div>
              오리더기의 부대원이 된 이상 누구 한분이라도 소외되지 않고 분위기에
              잘 녹아들어
            </div>
            <div>재마있게 게임할 수 있도록 돕겠습니다. 감사합니다. :)</div>
          </div>
        </div>
        <div className="mainActionCallToActionButton">
          가입 문의글 작성하러 가기
        </div>
      </div>
    </div>
  );
}

export default MainCallToActionArea;
