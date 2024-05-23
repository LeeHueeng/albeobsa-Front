/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

export default function recommend() {
  const [name, setName] = useState("후엥");
  const imagePaths = [
    "https://cdn.algumon.com/클리앙/0_0C8D182CA216434A8624837FD7960D6C.jpg?d=100x100",
    "https://cdn.algumon.com/클리앙/0_0C8D182CA216434A8624837FD7960D6C.jpg?d=100x100",
    "https://cdn.algumon.com/클리앙/0_0C8D182CA216434A8624837FD7960D6C.jpg?d=100x100",
  ];

  return (
    <div css={style}>
      <div className="name">
        {name}
        <span>의 추천 리스트</span>
      </div>
      <div className="image-container">
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`추천 이미지 ${index + 1}`}
            className="recommend-image"
          />
        ))}
      </div>
    </div>
  );
}

const style = css`
  .name {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
    color: #858585;
  }

  .image-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .recommend-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #f0f0f0;
  }
`;
