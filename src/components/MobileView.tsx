/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from "@emotion/react";
import Recommend from "./mobile/recommend";
import Lank from "./mobile/Lank";

const mobileContainer = css`
  width: 100%;

  .top {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom {
    margin: 30px;
    padding: 20px;
  }
  .lank {
    margin-top: 20px;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
  }
`;

const MobileView = () => {
  const [userName, setuserName] = useState("이현우");
  return (
    <div css={mobileContainer}>
      <div className="top">
        <div className="topleft">
          <svg
            width="80"
            height="39"
            viewBox="0 0 80 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.7612 37.9776H25.5522C27.0149 37.9776 29.5 36 29.5 33.3454C29.5 29.5 27 28.7132 25 28.7132C24.4776 28.7132 25.0224 28.5 24.5 28.5C17.5 14.5 16.5 7.99995 13 8.4999C13 9.4999 10 21.4999 6.22388 28.7132H5.1791C2.8806 28.7132 1 30.8087 1 33.3454C1 35.8821 2.8806 37.9776 5.1791 37.9776H10.403H18.7612Z"
              stroke="#A775FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.75 30.7633H13.25L12.4211 33H11L14.7303 23H16.2845L20 33H18.5789L17.75 30.7633ZM17.3651 29.6955L15.5 24.6162L13.6349 29.6955H17.3651Z"
              fill="#A775FF"
            />
            <path
              d="M13.5 0L14.5623 3.05573H18L15.2188 4.94427L16.2812 8L13.5 6.11146L10.7188 8L11.7812 4.94427L9 3.05573H12.4377L13.5 0Z"
              fill="#A775FF"
            />
            <path
              d="M46.4178 21H48.5408V28.4838H46.4178V21ZM47.6788 23.8672H50.4882V25.6328H47.6788V23.8672ZM38.7718 29.0832H48.5408V33.1976H40.9108V34.9795H38.8037V31.6425H46.4497V30.7354H38.7718V29.0832ZM38.8037 34.1533H48.9717V35.838H38.8037V34.1533ZM40.9427 21.4374C43.2093 21.4374 44.8854 22.8467 44.8854 24.8391C44.8854 26.8153 43.2093 28.2408 40.9427 28.2408C38.692 28.2408 37 26.8153 37 24.8391C37 22.8467 38.692 21.4374 40.9427 21.4374ZM40.9427 23.1706C39.8573 23.1706 39.0591 23.7862 39.0591 24.8391C39.0591 25.892 39.8573 26.5238 40.9427 26.5238C42.0441 26.5238 42.8422 25.892 42.8422 24.8391C42.8422 23.7862 42.0441 23.1706 40.9427 23.1706Z"
              fill="#575868"
            />
            <path
              d="M52.2108 21.7613H54.3179V23.6566H57.1272V21.7613H59.2023V28.7754H52.2108V21.7613ZM54.3179 25.2927V27.0583H57.1272V25.2927H54.3179ZM58.7235 24.4179H62.315V26.1512H58.7235V24.4179ZM61.8361 21H63.9591V29.2127H61.8361V21ZM54.1423 29.8445H56.2493V31.189H61.8521V29.8445H63.9591V35.8218H54.1423V29.8445ZM56.2493 32.8413V34.1048H61.8521V32.8413H56.2493Z"
              fill="#575868"
            />
            <path
              d="M69.5926 22.1501H71.3165V24.3369C71.3165 28.0464 70.0395 31.5292 67.2461 32.9222L65.9691 31.189C68.4592 30.0065 69.5926 27.1231 69.5926 24.3369V22.1501ZM70.0235 22.1501H71.7156V24.3369C71.7156 27.0259 72.7691 29.7635 75.1315 30.9298L73.8545 32.6469C71.1888 31.27 70.0235 27.933 70.0235 24.3369V22.1501ZM75.7221 21H77.861V36H75.7221V21ZM77.3822 26.7667H80V28.5648H77.3822V26.7667Z"
              fill="#575868"
            />
          </svg>
        </div>
        <div className="topright">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 8H21"
              stroke="#A775FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 16H21"
              stroke="#A775FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="bottom">
        <Recommend />
        <div className="lank">
          <Lank />
        </div>
      </div>
    </div>
  );
};

export default MobileView;
