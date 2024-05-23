/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";

const style = css`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 60px);
  height: 80%;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  margin: 30px;
  .contents,
  .second {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .list-item {
    width: 100%;
    padding: 10px 0;
  }
  .list-item h3 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #333;
    margin: 0;
    padding: 10px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .list-item h3:hover {
    background-color: #e0e0e0;
  }
  h2 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: #a775ff;
  }
`;

const freeboardData = [
  { id: 1, title: "자유게시판 글 제목 1", content: "자유게시판 내용 1" },
  { id: 2, title: "자유게시판 글 제목 2", content: "자유게시판 내용 2" },
  { id: 3, title: "자유게시판 글 제목 3", content: "자유게시판 내용 3" },
  { id: 4, title: "자유게시판 글 제목 4", content: "자유게시판 내용 4" },
  { id: 5, title: "자유게시판 글 제목 5", content: "자유게시판 내용 5" },
];

const marketData = [
  { id: 1, title: "알뜰구매 게시판 글 제목 1", content: "알뜰구매 내용 1" },
  { id: 2, title: "알뜰구매 게시판 글 제목 2", content: "알뜰구매 내용 2" },
  { id: 3, title: "알뜰구매 게시판 글 제목 3", content: "알뜰구매 내용 3" },
  { id: 4, title: "알뜰구매 게시판 글 제목 4", content: "알뜰구매 내용 4" },
  { id: 5, title: "알뜰구매 게시판 글 제목 5", content: "알뜰구매 내용 5" },
];

export default function Freeboard() {
  const handleClick = (id) => {
    alert(`글 ID: ${id}`);
    // 여기에 라우팅 로직 추가
    // 예: history.push(`/post/${id}`);
  };

  return (
    <div css={style}>
      <div className="contents">
        <h2>자유게시판</h2>
        {freeboardData.map((item) => (
          <div key={item.id} className="list-item">
            <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="second">
        <h2>알뜰구매 게시판</h2>
        {marketData.map((item) => (
          <div key={item.id} className="list-item">
            <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
