/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

export default function LankNumber() {
    return (
        <div css={style}>
            <div className="top">
                <p>1위</p>
                <div className="shopingsite"></div>
                <div className="communitysite"></div>
            </div>
            <div className="second">
                <p>Y700 2세대, 샤오신패드 프로 12.7 (카카오페이 32만, 21.2만 / 무료)</p>
            </div>
            <div className="third">
                <div className="third-left"></div>
                <div className="third-right"></div>
            </div>
        </div>
    );
}

const style = css`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        p {
            font-family: Poppins;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            text-align: left;
        }
        .shopingsite {
            width: 30px;
            height: 30px;
            background-color: red;
        }
        .communitysite {
            width: 30px;
            height: 30px;
            background-color: blue;
        }
    }
`;
