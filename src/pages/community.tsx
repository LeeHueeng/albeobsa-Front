/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Community from "@/components/index/community";
import Freeboard from "@/components/community/freeboard";
import Alddle from "@/components/community/alddle";

export default function community() {
  return (
    <div css={style}>
      <div className="constents">
        <Community />
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
`;
