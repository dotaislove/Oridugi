import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../assests/styles/body/MainInfoPage.css";
import GroupIcon from "../../assests/images/icons/groupIcon650x650.png";
import TalkIcon from "../../assests/images/icons/talkIcon650x650.png";
import HouseIcon from "../../assests/images/icons/houseIcon650x650.png";
import ThreeOfHearts from "../../assests/images/threeOfHearts.svg";
import ThreeOfFlowers from "../../assests/images/threeOfFlowers.svg";
import ThreeOfFootprints from "../../assests/images/threeOfFootprints.svg";

function MainInfoPage({ scrollY, ps }) {
  const [onInfoPageScrollTrigger, setOnInfoPageScrollTrigger] = useState(false);
  const [
    onInfoPageSecondAnimationTrigger,
    setOnInfoPageSecondAnimationTrigger,
  ] = useState(false);

  const [divTriggers, setDivTriggers] = useState({
    div1: false,
    div2: false,
    div3: false,
  });

  const mainInfoRef = useRef(null);
  const mainInfoDiv1Ref = useRef(null);
  const mainInfoDiv2Ref = useRef(null);
  const mainInfoDiv3Ref = useRef(null);

  const triggerAnimation = useCallback(
    (ref, threshold, triggerKey) => {
      if (ref.current && ps.current && window.innerWidth < 800) {
        const topValue =
          ref.current.getBoundingClientRect().top + ps.current.scrollTop;
        if (scrollY >= topValue - window.innerHeight + threshold) {
          setDivTriggers((prev) => ({ ...prev, [triggerKey]: true }));
        }
      }
    },
    [scrollY, ps]
  );

  useEffect(() => {
    triggerAnimation(mainInfoDiv1Ref, 300, "div1");
    triggerAnimation(mainInfoDiv2Ref, 300, "div2");
    triggerAnimation(mainInfoDiv3Ref, 300, "div3");
  }, [scrollY, ps, triggerAnimation]);

  useEffect(() => {
    if (onInfoPageScrollTrigger && window.innerWidth >= 800) {
      const infoPageTimer = setTimeout(() => {
        setOnInfoPageSecondAnimationTrigger(true);
      }, 750);
      return () => clearTimeout(infoPageTimer);
    }
  }, [onInfoPageScrollTrigger]);

  useEffect(() => {
    if (mainInfoRef.current && ps.current && !onInfoPageScrollTrigger) {
      const mainInfoTopValue =
        mainInfoRef.current.getBoundingClientRect().top + ps.current.scrollTop;
      if (scrollY >= mainInfoTopValue - window.innerHeight + 400) {
        setOnInfoPageScrollTrigger(true);
      }
    }
  }, [scrollY, ps, onInfoPageScrollTrigger]);

  return (
    <div className="mainInfoWrap" ref={mainInfoRef}>
      <div className="mainInfoTitle">
        <div
          className={`mainInfoTitleUpperText ${
            onInfoPageScrollTrigger ? "animateSubObject2" : ""
          }`}
        >
          오리더기는
        </div>
        <div className="mainInfoTitleMiddleText over800px">
          <span
            className={`mainInfoTitleMiddleText1 ${
              onInfoPageScrollTrigger ? "animateTitle" : ""
            }`}
          >
            혼자가 아닌
          </span>
          <span
            className={`mainInfoTitleMiddleText2 ${
              onInfoPageScrollTrigger ? "animateTitle" : ""
            }`}
          >
            다함께!
          </span>
        </div>
        <div className="mainInfoTitleMiddleText less800px">
          <div
            className={`mainInfoTitleMiddleText1 ${
              onInfoPageScrollTrigger ? "animateTitle" : ""
            }`}
          >
            혼자가 아닌
          </div>
          <div
            className={`mainInfoTitleMiddleText2 ${
              onInfoPageScrollTrigger ? "animateTitle" : ""
            }`}
          >
            {" "}
            다함께!
          </div>
        </div>
      </div>
      <div className="mainInfoBodyGrid">
        <img
          className={`threeOfHearts ${
            onInfoPageScrollTrigger ? "animateSubObject4" : ""
          }`}
          alt="threeOfHearts"
          src={ThreeOfHearts}
        ></img>
        <img
          className={`threeOfFlowers ${
            onInfoPageSecondAnimationTrigger || divTriggers.div3
              ? "animateSubObject4"
              : ""
          }`}
          alt="threeOfFlowers"
          src={ThreeOfFlowers}
        ></img>
        <img
          className={`threeOfFootprints ${
            onInfoPageSecondAnimationTrigger || divTriggers.div2
              ? "animateSubObject4"
              : ""
          }`}
          alt="threeOfFootprints"
          src={ThreeOfFootprints}
        ></img>
        <div ref={mainInfoDiv1Ref}>
          <img
            className={`mainInfoGroupIcon mainInfoIcons ${
              onInfoPageSecondAnimationTrigger || divTriggers.div1
                ? "animateSubObject2"
                : ""
            }`}
            alt="GroupIcon"
            src={GroupIcon}
          ></img>
          <div
            className={`mainInfoTextHeader ${
              onInfoPageSecondAnimationTrigger || divTriggers.div1
                ? "animateSubObject"
                : ""
            }`}
          >
            소수 인원의 단합화!
          </div>
          <div
            className={`mainInfoTextBody ${
              onInfoPageSecondAnimationTrigger || divTriggers.div1
                ? "animateSubObject2"
                : ""
            }`}
          >
            <div>
              <div>많은 인원은 필요치 않습니다. 서로 긴밀한 관계가</div> 지속될
              수 있게 소수의 멤버로 모집하고 있어요 : )
            </div>
            <div>
              <div>많은 인원은 필요치 않습니다. </div>
              <div>서로 긴밀한 관계가 지속될 수 있게</div> 소수의 멤버로
              모집하고 있어요 : )
            </div>
            <div>
              <div>많은 인원은 필요치 않습니다.</div>
              <div>서로 긴밀한 관계가 지속될 수</div>
              <div>있게 소수의 멤버로 모집하고</div>
              <div>있어요 : )</div>
            </div>
            <div className="mainInfoMarginBottom">
              <div className="over600px">
                <div>
                  많은 인원은 필요치 않습니다. 서로 긴밀한 관계가 지속될 수 있게
                </div>

                <div>소수의 멤버로 모집하고 있어요 : )</div>
              </div>
            </div>
            <div className="less600px">
              많은 인원은 필요치 않습니다. 서로 긴밀한 관계가 지속될 수 있게
              소수의 멤버로 모집하고 있어요 : )
            </div>
          </div>
        </div>
        <div ref={mainInfoDiv2Ref}>
          <img
            className={`mainInfoTalkIcon mainInfoIcons ${
              onInfoPageSecondAnimationTrigger || divTriggers.div2
                ? "animateSubObject2"
                : ""
            }`}
            alt="TalkIcon"
            src={TalkIcon}
          ></img>
          <div
            className={`mainInfoTextHeader ${
              onInfoPageSecondAnimationTrigger || divTriggers.div2
                ? "animateSubObject"
                : ""
            }`}
          >
            실력보단 소통!
          </div>
          <div
            className={`mainInfoTextBody ${
              onInfoPageSecondAnimationTrigger || divTriggers.div2
                ? "animateSubObject2"
                : ""
            }`}
          >
            <div>
              <div>저희 부대원은 대부분 새싹 입니다. 그래서 실력을</div>
              <div>내세우기 보단 소통을 항상 중요시 하니 소통을</div>
              좋아하신다면 대환영입니다. : )
            </div>
            <div>
              <div>저희 부대원은 대부분 새싹 입니다.</div>
              <div>그래서 실력을 내세우기 보단 소통을</div>
              항상 중요시 하니 소통을 좋아하신다면 <div>대환영입니다. : )</div>
            </div>
            <div>
              <div className="mainInfoTextLetterSpaceing">
                저희 부대원은 대부분 새싹 입니다.
              </div>
              <div> 그래서 실력을 내세우기 보단</div>
              <div>소통을 항상 중요시 하니 소통을</div>
              좋아하신다면 대환영입니다. : )
            </div>
            <div className="mainInfoMarginBottom over600px">
              <div>
                저희 부대원은 대부분 새싹 입니다. 그래서 실력을 내세우기
              </div>
              <div>
                보단 소통을 항상 중요시 하니 소통을 좋아하신다면 대환영입니다. :
                )
              </div>
            </div>
            <div className="mainInfoMarginBottom less600px">
              저희 부대원은 대부분 새싹 입니다. 그래서 실력을 내세우기 보단
              소통을 항상 중요시 하니 소통을 좋아하신다면 대환영입니다. : )
            </div>
          </div>
        </div>
        <div ref={mainInfoDiv3Ref}>
          <img
            className={`mainInfoTalkIcon mainInfoIcons ${
              onInfoPageSecondAnimationTrigger || divTriggers.div3
                ? "animateSubObject2"
                : ""
            }`}
            alt="HouseIcon"
            src={HouseIcon}
          ></img>
          <div
            className={`mainInfoTextHeader ${
              onInfoPageSecondAnimationTrigger || divTriggers.div3
                ? "animateSubObject"
                : ""
            }`}
          >
            다양한 매력의 부대집!
          </div>
          <div
            className={`mainInfoTextBody ${
              onInfoPageSecondAnimationTrigger || divTriggers.div3
                ? "animateSubObject2"
                : ""
            }`}
          >
            <div>
              <div>저희 부대집에는 미니 만추바 등 컨셉 하우징이 있습니다.</div>
              <div>하우징을 좋아하신다면 같이 집 꾸미면 좋겠어요 : )</div>
            </div>
            <div>
              <div>저희 부대집에는 미니 만추바 등 컨셉</div>
              <div>하우징이 있습니다.</div>
              <div>하우징을 좋아하신다면 같이 집 꾸미면</div>
              <div>좋겠어요 : )</div>
            </div>
            <div>
              저희 부대집에는 미니 만추바 등 컨셉 하우징이 있습니다. 하우징을
              좋아하신다면 같이 집 꾸미면 좋겠어요 : )
            </div>
            <div className="mainInfoMarginBottom over600px">
              <div>저희 부대집에는 미니 만추바 등 컨셉 하우징이 있습니다.</div>
              <div>하우징을 좋아하신다면 같이 집 꾸미면 좋겠어요 : )</div>
            </div>
            <div className="mainInfoMarginBottom less600px">
              저희 부대집에는 미니 만추바 등 컨셉 하우징이 있습니다. 하우징을
              좋아하신다면 같이 집 꾸미면 좋겠어요 : )
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfoPage;
