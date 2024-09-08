import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../../assests/styles/body/SignIn.css";
import SignInBG from "../../assests/images/recrutBG.png";
import CheckIcon from "../../assests/images/icons/checkIcon.png";
import AlretIcon from "../../assests/images/icons/alertIcon.png";
import CloseIcon from "../../assests/images/icons/closeIcon.svg";

function SignIn({ scrollTop }) {
  const form = useRef();
  const messageRef = useRef();
  const FF14UserNameRef = useRef();
  const successTostMessage = document.querySelector(".signInTostMessage");
  const errorTostMessage = document.querySelector(".signInFailTostMessage");
  const [errorMessage, setErrorMessage] = useState("");
  const handleTitleClick = () => {
    scrollTop();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const ff14messageLength = FF14UserNameRef.current.value.length;
    if (ff14messageLength === 0 || ff14messageLength > 10) {
      setErrorMessage("캐릭터명을 확인해주세요");
      errorTostMessage.classList.add("visible");
      setTimeout(() => {
        errorTostMessage.classList.remove("visible");
      }, 3000);
      return;
    }

    const messageLength = messageRef.current.value.length;
    if (messageLength === 0) {
      setErrorMessage("내용을 작성해주세요!");
      errorTostMessage.classList.add("visible");
      setTimeout(() => {
        errorTostMessage.classList.remove("visible");
      }, 3000);
      return;
    }

    if (messageLength > 1000) {
      setErrorMessage("메시지가 1000자를 초과했습니다! 메시지를 줄여주세요.");
      errorTostMessage.classList.add("visible");
      setTimeout(() => {
        errorTostMessage.classList.remove("visible");
      }, 3000);
      return;
    }

    successTostMessage.classList.add("visible");
    setTimeout(() => {
      successTostMessage.classList.remove("visible");
    }, 3000);

    emailjs
      .sendForm("service_ttz073s", "template_dcmgj9l", form.current, {
        publicKey: "urcnHUCruqcCwRUCB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="signInWrap">
      <div className="signInTostMessage">
        <div className="signIncheckIconWrap">
          <img
            src={CheckIcon}
            alt="SUCCESSIcon"
            className="signInCheckIcon"
          ></img>
        </div>
        <div className="signInMessageWrap">
          <div className="signInMessage1">전송 성공!</div>
          <div className="signInMessage2">
            메시지가 성공적으로 전송 되었습니다.
          </div>
        </div>
        <div className="signInCloseIconWrap">
          <img
            className="signInCloseIcon"
            src={CloseIcon}
            alt="Close Button"
            onClick={() => successTostMessage.classList.remove("visible")}
          ></img>
        </div>
      </div>

      <div className="signInFailTostMessage">
        <div className="signInFailcheckIconWrap">
          <img
            src={AlretIcon}
            alt="AlretIcon"
            className="signInCheckIcon"
          ></img>
        </div>
        <div className="signInMessageWrap">
          <div className="signInMessage1">오류 발생!</div>
          <div className="signInMessage2">{errorMessage}</div>
        </div>
        <div className="signInCloseIconWrap">
          <img
            className="signInCloseIcon"
            src={CloseIcon}
            alt="Close Button"
            onClick={() => errorTostMessage.classList.remove("visible")}
          ></img>
        </div>
      </div>

      <div className="signInImgWrap">
        <img src={SignInBG} alt="Oridugi members" className="signinImg"></img>
      </div>
      <div className="signInTextBox">
        <div className="signInFlex">
          <div className="signInTitle">
            <div className="signInTitle1">
              <span>오리더기는</span>
              <span> 언제나 새로운</span>
            </div>
            <div className="signInTitle2">
              <span>새끼 오리의 가입을 </span>
              <span>환영합니다!</span>
            </div>
          </div>
          <div className="signInText">
            오리더기에 가입을 원하실 경우 아래 양식과 접속시간을 적어주시면 빠른
            시일내로 연락 드리겠습니다.
          </div>
        </div>
      </div>
      <div className="signInMailBox">
        <div className="signInMailFlex">
          <form ref={form} onSubmit={sendEmail}>
            <div className="FF14UserNameTitle">캐릭터명</div>
            <input
              type="text"
              name="FF14UserName"
              className="FF14UserName"
              placeholder="캐릭터명을 입력해주세요!"
              ref={FF14UserNameRef}
              autoComplete="off"
            />
            <div className="messageTitle">오리더기에게 전하고 싶은 말</div>
            <textarea
              name="message"
              className="message"
              placeholder="오리더기에게 전하고 싶은 말과 연락을 위한 접속 시간을 적어주세요!"
              ref={messageRef}
            />
            <div className="signInInputWrap">
              <div className="signInCancleButton">
                <Link to="/" onClick={handleTitleClick}>
                  취소
                </Link>
              </div>
              <input type="submit" value="전송" className="signInSendButton" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
