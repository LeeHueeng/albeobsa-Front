/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
const titlelist = [
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "후엥",
    title: "커뮤니티 인기글",
    comment: 10,
    views: "조회수",
  },
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "뿌엥",
    title: "커뮤니티 인기글",
    comment: 10,
    views: "조회수",
  },
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "즐거운 오랑우탄가락지",
    title: "커뮤니티 인기글",
    comment: 10,
    views: "조회수",
  },
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "행복한 오징어대가리",
    title: "커뮤니티 인기글",
    comment: 10,
    views: "조회수",
  },
];

export default function communitytitle() {
  return (
    <div css={style}>
      <table>
        <tbody>
          <tr className="name_title">
            <td>날짜</td>
            <td className="nicknames">작성자</td>
            <td className="titles">제목</td>
            <td>댓글</td>
            <td></td>
          </tr>
          {titlelist.map((title, index) => (
            <tr key={index}>
              <td className="left">{title.date}</td>
              <td className="nickname">
                <Image
                  src={title.img}
                  width={30}
                  height={30}
                  alt="상품 이미지"
                />
                {title.nickname}
              </td>
              <td className="titles">{title.title}</td>
              <td className="comment">
                <div className="circle">{title.comment}</div>{" "}
              </td>
              <td className="right">
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.86667 3.73333C0.835739 3.73333 4.05312e-06 2.8976 4.05312e-06 1.86667C4.05312e-06 0.835735 0.835739 0 1.86667 0C2.8976 0 3.73334 0.835735 3.73334 1.86667C3.73334 2.8976 2.8976 3.73333 1.86667 3.73333Z"
                    fill="#858585"
                  />
                  <path
                    d="M8 3.73333C6.96907 3.73333 6.13334 2.8976 6.13334 1.86667C6.13334 0.835735 6.96907 0 8 0C9.03093 0 9.86667 0.835735 9.86667 1.86667C9.86667 2.8976 9.03093 3.73333 8 3.73333Z"
                    fill="#858585"
                  />
                  <path
                    d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z"
                    fill="#858585"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const style = css`
  width: 90%;
  height: 100%;
  .name_title {
    font-weight: 700;

    td {
      padding: 20px;
      border: 0px;
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 700;
      line-height: 19.61px;
    }
  }
  table {
    width: 100%;
    height: 90%;
    border-collapse: separate;
    border-spacing: 0px 10px;
    tr {
      border-bottom: 1px solid #f0f0f0;
      border-radius: 10px;
    }
    td {
      padding: 20px;
      border: 1px solid #f0f0f0;
      border-left: 0;
      border-right: 0;
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
    .left {
      border-radius: 100px 0px 0px 100px;
      border: 1px solid #f0f0f0;
      border-right: 0;
      width: 60px;
    }
    .right {
      border-radius: 0px 100px 100px 0px;
      border: 1px solid #f0f0f0;
      border-left: 0;
      width: 10px;
    }
    .nickname {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 180px;
    }
    .nicknames {
      width: 180px;
    }
    .titles {
      text-align: left;
    }
    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #bceb00;
      font-family: Poppins;
      font-size: 8px;
      line-height: 12px;
      letter-spacing: -0.428571492433548px;
    }
    .comment {
      display: flex;
      justify-content: center;
    }
    img {
      border-radius: 50%;
    }
  }
`;
