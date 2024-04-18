/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import LankNumber from "./LankNumber";
import axios from "axios";

interface Item {
  id: number;
  img: string;
  name: string;
  shoppingmall: string;
  community: string;
  comments: number;
  likes: number;
}
export default function Lank() {
  const [data, setData] = useState<Item[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    axios
      .get("/api/Lank")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    function handleResize() {
      const width = window.innerWidth;
      if (width < 550) {
        setVisibleCount(3);
      } else if (width < 800) {
        setVisibleCount(1);
      } else if (width < 1200) {
        setVisibleCount(2);
      } else if (width < 1600) {
        setVisibleCount(3);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div css={style}>
      <div className="contanier">
        <div className="contanierin">
          <div className="tops">
            <p>랭킹</p>
            <svg
              width="17"
              height="26"
              viewBox="0 0 17 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="17" height="26" fill="url(#pattern0_58_2214)" />
              <defs>
                <pattern
                  id="pattern0_58_2214"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use
                    xlinkHref="#image0_58_2214"
                    transform="matrix(0.0104167 0 0 0.0068109 0 0.173077)"
                  />
                </pattern>
                <image
                  id="image0_58_2214"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABPUlEQVR4nO3aQU4CQRAFUA6CS8OJp6nqIxjCzUiUC2jGlQuDOAvLpt9LZsei0p8ioefvdgAAAADwjyzL8hQRp4i4Zub7rWf9TEScW2uH6rkf6fAvPx38N0Fceu/76vmHFxGn3x7+l+elev7hxR0/Ozeet+r5h5fbD//zqZ5/eCkAAUwtbYAAppY2QABTSxsw9B+x1+LxxxcR560BrNcY1fMPr7V22HoZdzwen6vnfwi99/16sbbe7dxz/7N+8x0+AAAAAGyw6IbWWXRDa4VuaHkAV93QQumlfK0UgACmljZAAFNLGyCAqaUNqBW6oeUBnHVDCzXd0HpdNxQAAAAA/saiG1pn0Q2tFbqh5QFcdUMLpZfytVIAApha2gABTC1tgACmljagVuiGlgdw1g0t1HRD63XdUAAAAAB24/sATKwdQvHyXlIAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>

          <div className="lanklist">
            <div className="list">
              {data.slice(0, visibleCount).map((item) => (
                <LankNumber key={item.id} {...item} />
              ))}
            </div>
            <div className="svg-container">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill="#BCEB00" />
                <path
                  d="M22 15L29 22L22 29"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 22H27.25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = css`
display: flex;
align-items: center;
justify-content: center;
height: auto;

  .contanier {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid #f0f0f0;
    background-color: white;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    overflow: hidden;

  }
  .tops {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin-left: 20px;
    }
  }
  .contanierin {
    width: 90%;
    height: auto; 
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .lanklist {
    margin-top: 20px;
    display: flex;
    justify-content: start;
    width: 100%;
    height: 200px;
    align-items: center;
  }
  .list {
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: start;
  }
  .svg-container {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1100px) {
    .hidden-first {
      display: none;
    }
  }
  @media (max-width: 795px) {
    .hidden-second {
      display: none;
    }
  }
  @media (max-width: 550px) {
    .list{
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
    }
    .lanklist{
      flex-direction: column;
      justify-content: center;
    }
    .tops{
      display: none;
    }
    height: 800px;
   
`;
