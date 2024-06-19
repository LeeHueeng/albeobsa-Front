/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useRouter } from "next/router";
import Community from "@/components/index/community";
import Freeboard from "@/components/community/freeboard";
import Alddle from "@/components/community/alddle";

export default function CommunityPage() {
  const router = useRouter();

  const handleWriteClick = () => {
    router.push("/posts/new");
  };

  return (
    <div css={style}>
      <div className="write-button-container">
        <button onClick={handleWriteClick} className="write-button">
          글쓰기
        </button>
      </div>
      <div className="constents">
        <Alddle />
      </div>
      <div className="second">
        <Freeboard />
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  height: 100%;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  .constents {
    width: 90%;
    height: 100%;
    margin: 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .second {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 37px;
    justify-content: center;
  }
  .write-button-container {
    display: flex;
    justify-content: right;
    margin-top: 20px;
    margin-right: 10%;
  }
  .write-button {
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
    cursor: pointer;
  }
`;
