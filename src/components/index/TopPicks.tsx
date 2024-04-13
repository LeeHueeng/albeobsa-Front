/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import PickItem from "./PickItem";

export default function TopPicks() {
  return (
    <div css={styles}>
      <div className="container">
        <div className="nametop">
          <p className="username_picks">User_Name의 추천 리스트</p>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 2.82568H0.75V20.1632H19V2.82568Z"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.75 7.38818H19"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.3125 1V4.65"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4375 1V4.65"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.13733 13.0786L9.50307 15.6L12.6123 10.125"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="Top_Picks">
          <div className="Top_Picks_Item">
            <PickItem />
          </div>
          <div className="Top_Picks_Item hidden-when-smalltow">
            <PickItem />
          </div>
          <div className="Top_Picks_Item hidden-when-small">
            <PickItem />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = css`
  margin-top: 100px;
  width: 100%;

  .nametop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .container {
    width: 100%;
    .username_picks {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      text-align: left;
      color: #858585;
    }
  }
  .Top_Picks {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .Top_Picks_Item {
      width: 100%;
      max-width: 313px;
      height: 164px;
      border-radius: 10px;
      background-color: white;
      border: 2px solid #f0f0f0;
    }
    @media (max-width: 900px) {
      .hidden-when-small {
        display: none;
      }
    }
    @media (max-width: 650px) {
      .hidden-when-smalltow {
        display: none;
      }
    }
  }
`;
