/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import LankNumber from './LankNumber';

export default function Lank() {
    return (
        <div css={style}>
            <div className="contanier">
                <div className="contanierin">
                    랭킹
                    <div className="lanklist">
                        <LankNumber />
                        <LankNumber />
                        <LankNumber />
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

    .contanier {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 311px;
        border-radius: 10px;
        border: 2px solid #f0f0f0;
        background-color: white;
    }
    .contanierin {
        width: 90%;
        height: 90%;
    }
    .lanklist {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;
