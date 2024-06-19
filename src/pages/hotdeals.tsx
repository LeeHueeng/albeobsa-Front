/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Hotbox from "@/components/hotdeal/hotbox";
import axios from "axios";

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
  subLabel: string; // subLabel 속성 추가
}

export default function Hotdeals() {
  const [hotDeals, setHotDeals] = useState<HotDeal[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadHotDeals = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/crawling/hotdeal?page=${page}`;
      console.log("서버에 데이터 요청을 시작합니다. 페이지:", page);

      setLoading(true);

      try {
        const response = await axios.get<HotDeal[]>(apiUrl);
        console.log("서버 응답:", response.data);
        setHotDeals((prevDeals) => [...prevDeals, ...response.data]);
        console.log("데이터 처리를 시작합니다.");
      } catch (error) {
        console.error("게시글 긁어오기 실패", error);
      } finally {
        setLoading(false);
      }
    };

    loadHotDeals();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (timer) {
        clearTimeout(timer);
      }

      setTimer(
        setTimeout(() => {
          if (
            window.innerHeight + document.documentElement.scrollTop >=
              document.documentElement.offsetHeight - 10 &&
            !loading
          ) {
            console.log("페이지 끝에 도달");
            setLoading(true);
            setTimeout(() => {
              setPage((page) => page + 1);
            }, 500); // 5초 딜레이
          }
        }, 300) // 300ms 디바운스 타임
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, timer]);

  return (
    <div css={style}>
      {hotDeals.map((deal, index) => (
        <Hotbox key={index} deal={deal} rank={0} />
      ))}
      {loading && <p>Loading...</p>}
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
