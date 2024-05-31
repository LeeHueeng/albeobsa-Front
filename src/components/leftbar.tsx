/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import Mainpage from "@/styles/icon/mainpage";
import Community from "@/styles/icon/community";
import Revew from "@/styles/icon/calculator";
import Rank from "@/styles/icon/rank";
import Hotdeal from "@/styles/icon/hotdeil";
import Setting from "@/styles/icon/setting";

const categories = [
  { id: 1, name: "핫딜", path: "/hotdeals", icon: <Hotdeal /> },
  { id: 2, name: "커뮤니티", path: "/community", icon: <Community /> },
  { id: 3, name: "핫딜계산기", path: "/calculator", icon: <Revew /> },
  { id: 4, name: "랭킹", path: "/ranking", icon: <Rank /> },
  { id: 1, name: "메인 페이지", path: "/", icon: <Mainpage /> },
];

export default function Leftbar() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };
  return (
    <div css={leftbarstyle}>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            css={
              router.pathname === category.path
                ? activeCategoryStyle
                : undefined
            }
            onClick={() => handleClick(category.path)}>
            <div
              className="icon"
              css={
                router.pathname === category.path ? activeIconStyle : undefined
              }>
              {category.icon}
            </div>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const leftbarstyle = css`
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 59px;
  border-right: 1px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    width: 70%;
    height: 54px;
    padding-left: 50px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    align-items: center;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
  }
  .icon {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;
const activeCategoryStyle = css`
  background-color: #e0ceff;
`;
const activeIconStyle = css`
  svg {
    path {
      stroke: black;
    }
  }
`;
