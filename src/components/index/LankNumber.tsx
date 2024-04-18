/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import React from "react";

interface LankNumberProps {
  id: number;
  img: string;
  name: string;
  shoppingmall: string;
  community: string;
  comments: number;
  likes: number;
}

const LankNumber: React.FC<LankNumberProps> = ({
  id,
  img,
  name,
  shoppingmall,
  community,
  comments,
  likes,
}) => {
  return (
    <div css={style}>
      <div className="top">
        <p>{id + 1}위</p>
        <div className="shopingsite">{shoppingmall}</div>
        <div className="communitysite">{community}</div>
      </div>
      <div className="second">
        <p>{name}</p>
      </div>
      <div className="third">
        <div className="third-left">
          <Image src={img} width={100} height={100} alt="상품 이미지" />
        </div>
        <div className="third-right">
          <div className="comment">
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.09282 1H10.4177C11.5687 1 12.5105 1.94177 12.5105 3.09282V7.38309C12.5105 8.53414 11.5687 9.47591 10.4177 9.47591H6.28436L3.40674 11.9873V9.47591H2.46497C1.62785 9.47591 1 8.84806 1 8.06326V3.09282C1 1.94177 1.94177 1 3.09282 1Z"
                stroke="#BCEB00"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.7085 10.4178C5.7085 10.9934 6.17938 11.4643 6.7549 11.5166L10.365 11.6212L13.2426 14.1326V11.6212H14.1844C14.9692 11.6212 15.6494 10.9934 15.6494 10.1562V5.1858C15.6494 4.03475 14.7076 3.09299 13.5566 3.09299H12.5102"
                stroke="#BCEB00"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>{comments} </p>
          </div>
          <div className="like">
            <Image src="/like.png" width={15} height={15} alt="좋아요" />

            <p>{likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LankNumber;
const style = css`
  width: 250px;
  height: 230px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  .top {
    width: 80%;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0 10px;
    p {
      font-family: Poppins;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      text-align: left;
      color: #bceb00;
      margin: 0;
    }
    .shopingsite {
      width: 55px;
      height: 28px;
      background-color: #bceb00;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
    }
    .communitysite {
      width: 55px;
      height: 28px;
      border-radius: 50px;
      background-color: #c4c4c4;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
    }
  }
  .second {
    margin: 0px;
    width: 75%;
    p {
      margin: 0;
      font-family: Poppins;
      font-size: 13px;
      font-weight: 400;
      line-height: 21.24px;
      text-align: left;
    }
  }

  .third {
    width: 80%;
    display: flex;
    gap: 10px;
    .third-left {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      border: 2px solid #f0f0f0;
      overflow: hidden;
    }
    .third-right {
      width: 20%;
      height: 1px;
    }
  }
  .comment {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0;
    gap: 7px;
    p {
      margin: 0;
    }
  }
  .like {
    gap: 7px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0;
    p {
      margin: 0;
    }
  }
`;
