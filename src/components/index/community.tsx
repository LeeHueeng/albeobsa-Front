/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useRouter } from "next/router";
import Communitytitle from "./communitytitle";

export default function community() {
  const router = useRouter();

  const handleMoreClick = () => {
    router.push("/community");
  };

  return (
    <div css={style}>
      <div className="constents">
        <div className="title">커뮤니티 최신글</div>
        <div>
          <Communitytitle />
        </div>
        <div className="bottom">
          <button onClick={handleMoreClick}>더보기</button>
        </div>
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  .constents {
    width: 100%;
    height: 100%;
    margin: 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .title {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    margin-bottom: 30px;
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 134px;
      height: 42px;
      background-color: #995dff;
      border-radius: 100px;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-align: center;
      color: white;
      border: none;
    }
  }
`;
