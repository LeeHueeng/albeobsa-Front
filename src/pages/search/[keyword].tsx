/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Hotbox from "@/components/hotdeal/hotbox";
import axios from "axios";
import { useRouter } from "next/router";

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

export default function Search() {
  const [hotDeals, setHotDeals] = useState<HotDeal[]>([]);
  const router = useRouter();
  const { keyword } = router.query;

  useEffect(() => {
    if (!keyword) return;

    const loadHotDeals = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/crawling/search?keyword=${keyword}`;
      try {
        const response = await axios.get(apiUrl);
        console.log("서버 응답:", response.data);
        if (Array.isArray(response.data)) {
          setHotDeals(response.data);
        } else if (response.data.content) {
          setHotDeals(response.data.content);
        } else {
          console.error("Unexpected response format:", response.data);
        }
        console.log("데이터 처리를 시작합니다.");
      } catch (error) {
        console.error("게시글 긁어오기 실패", error);
      }
    };

    loadHotDeals();
  }, [keyword]);

  return (
    <div css={style}>
      {hotDeals.map((deal, index) => (
        <Hotbox key={index} deal={deal} rank={0} />
      ))}
    </div>
  );
}

const style = css`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
