/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";

interface HotboxProps {
  deal: {
    label: string;
    title: string;
    name: string;
    image: string;
    link: string;
    dateTime: string;
    views: number;
    recommendCnt: number;
    unrecommendCnt: number;
    commentCnt: number;
    open: boolean;
    subLabel: string;
  };
  rank: number;
}

const Hotbox: React.FC<HotboxProps> = ({ deal, rank }) => {
  return (
    <div css={style}>
      {rank !== 0 && <div className="rank">{rank}위</div>}

      <div className="contents">
        <div className="left">
          <a href={deal.link} target="_blank" rel="noopener noreferrer">
            <Image src={deal.image} width={100} height={100} alt="상품" />
          </a>
        </div>
        <div className="right">
          <div className="rightcontents">
            <div className="rightleft">
              <div className="buttonset">
                <button className="color2">{deal.subLabel}</button>
                <button className="color1">{deal.label}</button>
              </div>
              <div className="rightcontentsright">
                <div className="rightright">{deal.dateTime}</div>
                <div className="report-hide">
                  <svg
                    width="18"
                    height="26"
                    viewBox="0 0 18 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect
                      x="0.5"
                      width="17"
                      height="26"
                      fill="url(#pattern0_203_1014)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_203_1014"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1">
                        <use
                          xlinkHref="#image0_203_1014"
                          transform="matrix(0.0104167 0 0 0.0068109 0 0.173077)"
                        />
                      </pattern>
                      <image
                        id="image0_203_1014"
                        width="96"
                        height="96"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABPUlEQVR4nO3aQU4CQRAFUA6CS8OJp6nqIxjCzUiUC2jGlQuDOAvLpt9LZsei0p8ioefvdgAAAADwjyzL8hQRp4i4Zub7rWf9TEScW2uH6rkf6fAvPx38N0Fceu/76vmHFxGn3x7+l+elev7hxR0/Ozeet+r5h5fbD//zqZ5/eCkAAUwtbYAAppY2QABTSxsw9B+x1+LxxxcR560BrNcY1fMPr7V22HoZdzwen6vnfwi99/16sbbe7dxz/7N+8x0+AAAAAGyw6IbWWXRDa4VuaHkAV93QQumlfK0UgACmljZAAFNLGyCAqaUNqBW6oeUBnHVDCzXd0HpdNxQAAAAA/saiG1pn0Q2tFbqh5QFcdUMLpZfytVIAApha2gABTC1tgACmljagVuiGlgdw1g0t1HRD63XdUAAAAAB24/sATKwdQvHyXlIAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                  <div className="report-hide-buttons">
                    <button>신고</button>
                    <button>숨기기</button>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={deal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="title">
              {deal.title}
            </a>
            <div className="price">{deal.name}</div>

            <div className="comment_views">
              <div className="comment">
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.5715 1H12.5717C13.9861 1 15.1432 2.07568 15.1432 3.39041V8.29075C15.1432 9.60547 13.9861 10.6812 12.5717 10.6812H7.49303L3.95722 13.5496V10.6812H2.80005C1.77145 10.6812 1 9.96403 1 9.06763V3.39041C1 2.07568 2.15717 1 3.5715 1Z"
                    stroke="#A775FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.7854 11.7571C6.7854 12.4144 7.36399 12.9523 8.07115 13.012L12.507 13.1315L16.0428 16V13.1315H17.2C18.1643 13.1315 19 12.4144 19 11.4583V5.78103C19 4.46631 17.8428 3.39062 16.4285 3.39062H15.1428"
                    stroke="#A775FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {deal.commentCnt}
              </div>
              <div className="views">
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 11C11.25 11 16 6.25 16 6C16 5.75 11.25 1 8.5 1C5.75 1 1 5.875 1 6C1 6.125 5.75 11 8.5 11Z"
                    stroke="#A775FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 7.25C9.88071 7.25 11 6.13071 11 4.75C11 3.36929 9.88071 2.25 8.5 2.25C7.11929 2.25 6 3.36929 6 4.75C6 6.13071 7.11929 7.25 8.5 7.25Z"
                    stroke="#A775FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {deal.views}
              </div>
              <div className="like">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="17" height="17" fill="url(#pattern0_239_394)" />
                  <defs>
                    <pattern
                      id="pattern0_239_394"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1">
                      <use
                        xlinkHref="#image0_239_394"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_239_394"
                      width="96"
                      height="96"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADlUlEQVR4nO2dPWgUQRTHV/wAvxoFC1sLkYgiWlmJtjYSYmFhaZ/svIvaXGshRiEBFREMZCZeJREthHyY2FgbewVFsDMmIn7wl9lcMBGLy+3uvN2b/x9eezvv/3tvZrg93iUJRVEURfWgxlPsdgbPXIoz2muJ0nwreOkEcIJlm+Ks9ppiq/y5tvlZWIMVJzinvbae1xPBXit4td78DRAaOK29xqgq3/0LQfDJCg5qrzVK893fuK+93mi2Hff/Lvj26Cr2a6+7l247s52avy7Oa6+99mo1sccZLHRhvj+QG9rrj7Xy0d6GUu0cal351mC+W/N9TBpc1s4jysp3ax0whBPaudROU03sKsR8g5XZJrZp51M/8w1m8pqfhcGcdj7xmi9ZB9zQzila890qgAvaeUVrvlu9gvK7IDXzDd4HqZ46a6ok89vxWDu/ypvvBNMlme9vQEPaOcZrvgB8IaNpvuBHaxA7w5ZVDTQVxny//bzWzjVe8yWLO9r5xmw+nMEl7ZzjNV8yAIe0866E7l3BdmfwIqT51uAzEmzRzr0Ssga3g1a+ZACeauddCbkGjljBr9AAXLhYdgaLvsgmUxxNqiYnGKmASQgSBr+dwViriR1JVeSrQ90YCR7TlYFgDZYqYAgUYrQjg/I+qOzPdzUNf+7ZBvoIQBRBGNwiAFHtgjcEIIoADJYIQHTPAgIQAkDMkfAaCgLQrkLHDtA3wnEL0jeDZ4DEFzyERRXAFwIQRQAGiwQgqgBuEoDoAZhIcZIARK36F/hCRvSq36a4SACiVv0f/W+hCEDUOuB6xy/N8z6M74SxcesRfB9PcYAARGnvN3jYsfnsABQPQHCKAESt+uc3ZT47AIUCmBQMEIAoVb/gQ8dXT3YAigfQwLVNm88tCDpXTwJA0dvPg67MZwegmMN3GMcJQHQO39zDoPIuoOzPdxWPCYN+AhAd8/0onNyz6NgByANhOJf5BIDuq7+oedTsAHQLoZiJ7ASAbvf/YwQgaofvTCHmswOgPwaTWxA2C+BdawBbawPAGnzV2ipcOSGFmR8EgOBtBUxDEeGHgLcGsa9eABRG1bjy4m6h5ocA4Ee49MK4GmvwsyU4XDsA2TMMxrQNdCF+6VxVAH50S/B5cVJg9QuelzZ+JgSAdRBG67Qdtdc6Uursn1AA1mQb6PNTRPwgiypeUbP/n1wdMjXix62V4zpFURRFURRFURRFURSVRKA/pmLynAbIqmgAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                {deal.recommendCnt}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotbox;

const style = css`
  width: 80%;
  height: 173px;
  border: 2px solid #f0f0f0;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .rank {
    font-size: 24px;
    font-weight: bold;
    color: #a775ff;
    margin-left: 50px;
  }

  .contents {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
  }

  .rightcontents {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 5px;
    .title {
      font-family: Poppins;
      font-size: 13px;
      font-weight: 400;
      line-height: 21.24px;
      text-align: left;
      color: #858585;
      text-decoration: none;
    }
    .price {
      font-family: Poppins;
      font-size: 13px;
      font-weight: 400;
      line-height: 21.24px;
      text-align: left;
      color: #f85d5d;
    }
  }

  .left {
    min-width: 100px;
    width: 10%;
    height: 100px;
    border-radius: 10px;
    border: 2px solid #f0f0f0;
    overflow: hidden;
    margin-left: 20px;
  }

  .right {
    flex-grow: 1;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    .rightleft {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;

      .color1 {
        background-color: #c4c4c4;
        color: white;
      }
      .color2 {
        background-color: #a775ff;
        color: white;
      }
      button {
        background-color: #f0f0f0;
        border: none;
        width: auto;
        height: 28px;
        border-radius: 10px;
        padding: 5px;
        margin-right: 10px;
      }
    }
  }

  .buttonset {
    display: flex;
  }

  .rightright {
    font-family: Poppins;
    font-size: 11px;
    font-weight: 400;
    line-height: 17.98px;
    text-align: left;
    color: #858585;
  }

  .rightcontentsright {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-right: 10px;
    position: relative;
    .report-hide-buttons {
      display: none;
      position: absolute;
      top: 20px;
      right: 0;
      flex-direction: column;
      gap: 0px;
      button {
        background-color: #f0f0f0;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #a775ff;
          color: white;
        }
      }
    }
    &:hover .report-hide-buttons {
      display: flex;
    }
  }

  .comment_views {
    margin-top: 3px;
    display: flex;
    gap: 10px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 19.61px;
    text-align: left;
  }

  .comment,
  .views,
  .like {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
