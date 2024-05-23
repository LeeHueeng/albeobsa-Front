/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Image from "next/image";

interface PickItemProps {
  img: string;
  name: string;
  percent: number;
}

const PickItem: React.FC<PickItemProps> = ({ img, name, percent }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div css={style}>
      <div
        className="top"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {isHovered && (
          <div className="dropdown">
            <ul>
              <li onClick={() => alert("신고 클릭됨")}>신고</li>
              <li onClick={() => alert("삭제 클릭됨")}>삭제</li>
            </ul>
          </div>
        )}
        <span>...</span>
      </div>
      <div className="contents">
        <div className="left">
          <Image src={img} width={100} height={100} alt={img} />
        </div>
        <div className="right">
          <div className="left-top">{name}</div>
          <div className="left-bottom">
            <div className="left-bottom-left">{percent}%</div>
            <div className="left-bottom-right">
              <svg
                width="63"
                height="26"
                viewBox="0 0 63 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 26V10.3755L5.60289 18.645L11.8586 14.0553L17.1566 8.95548L22.5442 6.43643L27.8222 8.95548L33.8206 14.6354L39.481 8.95548L45.2619 14.0553L50.9223 3.80797C50.9223 3.80797 52.9538 5.69498 53.7891 7.26675C53.9586 7.58562 62.0776 -1.1916 62.7162 0.137052C63.3548 1.4657 62.7162 26 62.7162 26H0Z"
                  fill="url(#paint0_linear_2_386)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_386"
                    x1="-25.6449"
                    y1="-18.7048"
                    x2="-25.6449"
                    y2="28.4624"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F85D5D" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickItem;

const style = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  position: relative;

  .top {
    width: 90%;
    text-align: right;
    margin-bottom: 11px;
    position: relative;
  }

  .dropdown {
    position: absolute;
    right: 0;
    top: 20px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        padding: 8px 12px;
        cursor: pointer;

        &:hover {
          background-color: #a775ff;
          color: white;
        }
      }
    }
  }

  .contents {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .left {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      border: 2px solid #f0f0f0;
      overflow: hidden;
    }

    .right {
      width: 128px;
      height: 100px;

      .left-top {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        margin-bottom: 30px;
      }

      .left-bottom {
        display: flex;
        gap: 10px;
        width: 100%;
        height: 26px;

        .left-bottom-left {
          color: red;
        }

        .left-bottom-right {
          width: 50%;
          height: 100%;
        }
      }
    }
  }
`;
