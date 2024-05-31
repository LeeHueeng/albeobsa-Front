/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ProductInfo from "@/components/calculator/ProductInfo";
import axios from "axios";

export default function Calculator() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("서버에 데이터 요청을 시작합니다. 게시판");
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/boards`)
      .then((response) => {
        console.log("서버 응답:", response);
        console.log("데이터 처리를 시작합니다.");
        console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/boards`);
        setData(response.data);
      })
      .catch((error) => {
        console.error("게시글 긁어오기 실패:", error);
      });
  }, []);

  return (
    <div css={appStyle}>
      <ProductInfo />
    </div>
  );
}

const appStyle = css`
  padding: 20px;
`;