import React from "react";
import "../../assests/styles/body/MainInfoPage.css";
import GroupIcon from "../../assests/images/icons/groupIcon650x650.png";
import TalkIcon from "../../assests/images/icons/talkIcon650x650.png";
import HouseIcon from "../../assests/images/icons/houseIcon650x650.png";
import ThreeOfHearts from "../../assests/images/threeOfHearts.svg";
import ThreeOfFlowers from "../../assests/images/threeOfFlowers.svg";
import ThreeOfFootprints from "../../assests/images/threeOfFootprints.svg";

function MainInfoPage() {
  return (
    <div className="mainInfoWrap">
      <div className="mainInfoTitle">
        <div className="mainInfoTitleUpperText">오리더기는</div>
        <div className="mainInfoTitleMiddleText over800px">
          <span className="mainInfoTitleMiddleText1">혼자가 아닌</span>
          <span className="mainInfoTitleMiddleText2"> 다함께!</span>
        </div>
        <div className="mainInfoTitleMiddleText less800px">
          <div className="mainInfoTitleMiddleText1">혼자가 아닌</div>
          <div className="mainInfoTitleMiddleText2"> 다함께!</div>
        </div>
      </div>
      <div className="mainInfoBodyGrid">
        <img
          className="threeOfHearts"
          alt="threeOfHearts"
          src={ThreeOfHearts}
        ></img>
        <img
          className="threeOfFlowers"
          alt="threeOfFlowers"
          src={ThreeOfFlowers}
        ></img>
        <img
          className="threeOfFootprints"
          alt="threeOfFootprints"
          src={ThreeOfFootprints}
        ></img>
        <div>
          <img
            className="mainInfoGroupIcon mainInfoIcons"
            alt="GroupIcon"
            src={GroupIcon}
          ></img>
          <div className="mainInfoTextHeader ">소수 인원의 단합화!</div>
          <div className="mainInfoTextBody">
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
              <div className="less600px">
                많은 인원은 필요치 않습니다. 서로 긴밀한 관계가 지속될 수 있게
                소수의 멤버로 모집하고 있어요 : )
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="mainInfoTalkIcon mainInfoIcons"
            alt="TalkIcon"
            src={TalkIcon}
          ></img>
          <div className="mainInfoTextHeader">실력보단 소통!</div>
          <div className="mainInfoTextBody">
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
        <div>
          <img
            className="mainInfoTalkIcon mainInfoIcons"
            alt="HouseIcon"
            src={HouseIcon}
          ></img>
          <div className="mainInfoTextHeader">다양한 매력의 부대집!</div>
          <div className="mainInfoTextBody">
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
