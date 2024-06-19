/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopPicks from "@/components/index/TopPicks";
import Lank from "@/components/index/Lank";
import Community from "@/components/index/community";
import Deal from "@/components/index/deal/deal";
import RealTimeSearch from "@/components/index/RealTimeSearch";
import Hotdeals from "./hotdeals";

interface HotDeal {
  label: string;
  title: string;
  name: string;
  image: string;
  link: string;
  dateTime: string;
  views: number;
  recommendCnt: number;
  unrecommendCnt: number;
  commentCnt: number;
  open: boolean;
  subLabel: string;
}
export default function Home() {
  const [hotDeals, setHotDeals] = useState<HotDeal[]>([]);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/crawling/hotdeal`;
    console.log("서버에 데이터 요청을 시작합니다. 게시판");

    axios
      .get<HotDeal[]>(apiUrl)
      .then((response) => {
        console.log("서버 응답:", response.data);
        setHotDeals(response.data);
        console.log("데이터 처리를 시작합니다.");
      })
      .catch((error) => {
        console.error("게시글 긁어오기 실패", error);
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
      <div className="realtime">
        <RealTimeSearch />
      </div>

      <div className="community">
        <Community />
      </div>
      <h2>실시간 핫딜</h2>
      <Hotdeals />
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
  .realtime {
    margin-top: 37px;
    width: 100%;
  }
  .deal {
    width: 100%;
    margin-top: 37px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 50px;
    border: 2px solid #f0f0f0;
  }
  .hotdeal {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    margin-top: 37px;
  }
  h2 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #858585;
    margin-top: 37px;
  }
`;
