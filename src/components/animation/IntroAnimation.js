import React, { useEffect, useState } from "react";
import "../../assests/styles/animation/IntroAnimation.css";
import LargeDuck from "../../assests/images/bigDuck.svg";
import MediumDuck from "../../assests/images/mediumDuck.svg";
import SmallDuck from "../../assests/images/smallDuck.svg";

import { easeIn, motion } from "framer-motion";

function getRandomPosition() {
  return {
    x: Math.random() * 8 - 4, // x축에서 -5 ~ 5px 사이로 이동
    y: Math.random() * 8 - 4, // y축에서 -5 ~ 5px 사이로 이동
  };
}

function DuckAnimation({ className, src, alt }) {
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition()); // 1초마다 새로운 위치 설정
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  return (
    <motion.img
      className={className}
      src={src}
      alt={alt}
      animate={position} // x, y 좌표로 이동 애니메이션
      transition={{ duration: 1.5 }} // 부드러운 애니메이션 적용
    />
  );
}

function IntroAnimation({ onIntroAnimationComplete }) {
  return (
    <motion.div
      className="introAnimationWrap"
      animate={{
        display: ["fixed", "fixed", "none"],
        x: [0, "100%", "100%"], // x축 이동
      }}
      transition={{
        delay: 8.5,
        duration: 1, // 전체 애니메이션 지속 시간
        times: [0, 0.5, 1], // 각 애니메이션 단계의 상대 시간
        ease: easeIn,
      }}
      onAnimationComplete={onIntroAnimationComplete}
    >
      <div className="introAnimationBox">
        <motion.div
          className="introAnimationDuckWrap"
          animate={{
            opacity: [0, 1, 1, 0], // opacity 변화
            x: [-50, 0, 0, 50], // x축 이동
          }}
          transition={{
            duration: 8, // 전체 애니메이션 지속 시간
            times: [0, 0.0625, 0.9375, 1], // 각 애니메이션 단계의 상대 시간
            ease: easeIn,
            delay: 0.5,
          }}
          style={{ position: "relative" }}
        >
          <div className="duck1Wrap">
            <DuckAnimation
              className="largeDuck duck1"
              alt="Large Duck"
              src={LargeDuck}
            />
          </div>
          <div className="duck2Wrap">
            <DuckAnimation
              className="smallDuck duck2"
              alt="small Duck"
              src={SmallDuck}
            />
          </div>
          <div className="duck3Wrap">
            <DuckAnimation
              className="mediumDuck duck3"
              alt="medium Duck"
              src={MediumDuck}
            />
          </div>
          <div className="duck4Wrap">
            <DuckAnimation
              className="smallDuck duck4"
              alt="small Duck"
              src={SmallDuck}
            />
          </div>
        </motion.div>
        <motion.div
          className="introAniamtionLoadingBar"
          animate={{
            opacity: [0, 1, 1, 0], // opacity 변화
            x: [50, 0, 0, -50], // x축 이동
          }}
          transition={{
            duration: 8, // 전체 애니메이션 지속 시간
            times: [0, 0.0625, 0.9375, 1], // 각 애니메이션 단계의 상대 시간
            ease: easeIn,
            delay: 0.5,
          }}
          style={{ position: "relative" }}
        >
          <motion.div
            className="introAniamtionLoadingBarInnerBox"
            animate={{ width: "100%" }}
            transition={{
              duration: 4,
              ease: easeIn,
              delay: 1,
            }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="introAnimationTextWrap"
          animate={{
            opacity: [0, 1, 1, 0], // opacity 변화
            x: [50, 10, 10, -50], // x축 이동
          }}
          transition={{
            duration: 8, // 전체 애니메이션 지속 시간
            times: [0, 0.0625, 0.9375, 1], // 각 애니메이션 단계의 상대 시간
            ease: easeIn,
            delay: 0.5,
          }}
          style={{ position: "relative" }}
        >
          <motion.div
            className="introAnimationTextwrap1"
            animate={{
              opacity: [1, 0, 0], // opacity 변화
              x: [0, -50, -50], // x축 이동
              display: ["flex", "none", "none"],
            }}
            transition={{
              duration: 1, // 전체 애니메이션 지속 시간
              times: [0, 0.5, 1], // 각 애니메이션 단계의 상대 시간
              delay: 5,
              ease: easeIn,
            }}
          >
            <div className="introAnimationText">오리들이 환영인사를 준비중</div>
            <motion.div
              className="introAnimationTextDot1"
              animate={{ y: [0, -7, 0] }} // 위로 올라갔다 내려가는 애니메이션
              transition={{
                duration: 0.5, // 애니메이션 지속 시간
                repeat: Infinity, // 무한 반복
                delay: 0, // 첫 번째 점은 바로 시작

                repeatDelay: 1.2, // 반복 간 대기 시간 0.5초
              }}
            >
              .
            </motion.div>
            <motion.div
              className="introAnimationTextDot2"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: 0.4, // 두 번째 점은 0.3초 지연 후 시작

                repeatDelay: 1.2, // 반복 간 대기 시간 0.5초
              }}
            >
              .
            </motion.div>
            <motion.div
              className="introAnimationTextDot3"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: 0.8, // 세 번째 점은 0.6초 지연 후 시작

                repeatDelay: 1.2, // 반복 간 대기 시간 0.5초
              }}
            >
              .
            </motion.div>
          </motion.div>
          <motion.div
            className="introAnimationWelcome"
            animate={{
              display: ["none", "block", "block", "block"],
              opacity: [0, 1, 1, 0], // opacity 변화
              x: [50, 0, 0, -50], // x축 이동
            }}
            transition={{
              duration: 3, // 전체 애니메이션 지속 시간
              times: [0, 0.166, 0.833, 1], // 각 애니메이션 단계의 상대 시간
              delay: 5.5,
              ease: easeIn,
            }}
          >
            방문하신 걸 환영합니다!
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default IntroAnimation;
