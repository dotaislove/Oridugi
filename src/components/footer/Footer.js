import React from "react";
import "../../assests/styles/footer/Footer.css";
import { ReactComponent as ChichizickIcon } from "../../assests/images/icons/chichizickIcon.svg";
import { ReactComponent as DiscordIcon } from "../../assests/images/icons/discordIcon.svg";

function Footer() {
  return (
    <div className="footerWrap">
      <div className="footerFlex">
        <div className="footerLeft">
          <div className="footerLeftGrid1">부대장</div>
          <div className="footerLeftGrid2">보라더기</div>
          <div className="footerLeftGrid3">하우징 위치</div>
          <div className="footerLeftGrid4">톤베리 시로가네 20 - 43</div>
          <div className="footerLeftGrid5 over600px">
            <div>
              본 웹사이트는 상업적 목적이 아닌 개인 프로젝트 또는 비영리 활동의
              일환으로 운영됩니다.
            </div>
            <div>
              모든 콘텐츠는 정보 제공을 위해 제작되었으며, 상업적 이용은
              의도하지 않았음을 알려드립니다.
            </div>
          </div>
          <div className="footerLeftGrid5 less600px">
            <div>
              본 웹사이트는 상업적 목적이 아닌 개인 프로젝트 또는 비영리 활동의
              일환으로 운영됩니다. 모든 콘텐츠는 정보 제공을 위해 제작되었으며,
              상업적 이용은 의도하지 않았음을 알려드립니다.
            </div>
          </div>
        </div>
        <div className="footerRight">
          <div>
            <a href="https://chzzk.naver.com/9d00372c1cec9544f8d54d7914d797b6">
              <ChichizickIcon className="footerChichizickIcon" />
            </a>
          </div>
          <div>
            <a href="https://discord.gg/MN7M2C6Yt7">
              <DiscordIcon className="footerDiscordIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
