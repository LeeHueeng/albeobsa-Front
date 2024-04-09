/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PickItem from './PickItem';

export default function TopPicks() {
    return (
        <div css={styles}>
            <div className="container">
                <p className="username_picks">User_Name의 추천 리스트</p>
                <div className="Top_Picks">
                    <div className="Top_Picks_Item">
                        <PickItem />
                    </div>
                    <div className="Top_Picks_Item">
                        <PickItem />
                    </div>
                    <div className="Top_Picks_Item">
                        <PickItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = css`
    margin-top: 100px;
    width: 100%;
    height: 30%;

    .container {
        margin: 0 auto;
        padding: 0 15px;
        width: 90%;

        .username_picks {
            font-family: Poppins;
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            text-align: left;
            color: #858585;
        }
    }
    .Top_Picks {
        display: flex;
        justify-content: space-between;
        gap: 43px;
        .Top_Picks_Item {
            width: 313px;
            height: 164px;
            border-radius: 10px;
            background-color: white;
            border: 2px solid #f0f0f0;
        }
    }
`;
