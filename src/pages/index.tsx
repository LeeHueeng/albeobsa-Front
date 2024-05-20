/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import axios from "axios";
import TopPicks from "@/components/index/TopPicks";
import Lank from "@/components/index/Lank";
import Community from "@/components/index/community";
import Deal from "@/components/index/deal/deal";
export default function Home() {
  useEffect(() => {
    console.log("서버에 데이터 요청을 시작합니다. 게시판");
    axios
      .get("https://jijijig.duckdns.org/api/boards/")
      .then((response) => {
        console.log("서버 응답: ㅔㅔ", response);
        console.log("데이터 처리를 시작합니다.");

        console.log("데이터 처리 완료.");
      })
      .catch((error) => {
        console.error("게시글 긁어오기 실패 ㅔㅔㄴ", error);
      });
  }, []);
  return (
    <div css={styles}>
      <div className="topicks">
        <TopPicks />
      </div>
      <div className="second">
        <Lank />
      </div>
      <div className="community">
        <Community />
      </div>
      <div className="deal">
        <Deal />
      </div>
    </div>
  );
}

const styles = css`
  margin: 0px 60px;
  whidth: 100%;
  height: 100%;
  .topicks {
    width: 100%;
    height: 100%;
  }
  .second {
    margin-top: 37px;
  }
  .community {
    margin-top: 37px;
  }
  @media (max-width: 800px) {
    .community {
      display: none;
    }
  }
  .deal {
    width: 100%;
    margin-top: 37px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 50px;
    border: 2px solid #f0f0f0;
  }
`;
