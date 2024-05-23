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
                stroke="#A775FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.7085 10.4178C5.7085 10.9934 6.17938 11.4643 6.7549 11.5166L10.365 11.6212L13.2426 14.1326V11.6212H14.1844C14.9692 11.6212 15.6494 10.9934 15.6494 10.1562V5.1858C15.6494 4.03475 14.7076 3.09299 13.5566 3.09299H12.5102"
                stroke="#A775FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>{comments} </p>
          </div>
          <div className="like">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="17" height="17" fill="url(#pattern0_239_315)" />
              <defs>
                <pattern
                  id="pattern0_239_315"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use
                    xlinkHref="#image0_239_315"
                    transform="scale(0.0104167)"
                  />
                </pattern>
                <image
                  id="image0_239_315"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADlUlEQVR4nO2dPWgUQRTHV/wAvxoFC1sLkYgiWlmJtjYSYmFhaZ/svIvaXGshRiEBFREMZCZeJREthHyY2FgbewVFsDMmIn7wl9lcMBGLy+3uvN2b/x9eezvv/3tvZrg93iUJRVEURfWgxlPsdgbPXIoz2muJ0nwreOkEcIJlm+Ks9ppiq/y5tvlZWIMVJzinvbae1xPBXit4td78DRAaOK29xqgq3/0LQfDJCg5qrzVK893fuK+93mi2Hff/Lvj26Cr2a6+7l247s52avy7Oa6+99mo1sccZLHRhvj+QG9rrj7Xy0d6GUu0cal351mC+W/N9TBpc1s4jysp3ax0whBPaudROU03sKsR8g5XZJrZp51M/8w1m8pqfhcGcdj7xmi9ZB9zQzila890qgAvaeUVrvlu9gvK7IDXzDd4HqZ46a6ok89vxWDu/ypvvBNMlme9vQEPaOcZrvgB8IaNpvuBHaxA7w5ZVDTQVxny//bzWzjVe8yWLO9r5xmw+nMEl7ZzjNV8yAIe0866E7l3BdmfwIqT51uAzEmzRzr0Ssga3g1a+ZACeauddCbkGjljBr9AAXLhYdgaLvsgmUxxNqiYnGKmASQgSBr+dwViriR1JVeSrQ90YCR7TlYFgDZYqYAgUYrQjg/I+qOzPdzUNf+7ZBvoIQBRBGNwiAFHtgjcEIIoADJYIQHTPAgIQAkDMkfAaCgLQrkLHDtA3wnEL0jeDZ4DEFzyERRXAFwIQRQAGiwQgqgBuEoDoAZhIcZIARK36F/hCRvSq36a4SACiVv0f/W+hCEDUOuB6xy/N8z6M74SxcesRfB9PcYAARGnvN3jYsfnsABQPQHCKAESt+uc3ZT47AIUCmBQMEIAoVb/gQ8dXT3YAigfQwLVNm88tCDpXTwJA0dvPg67MZwegmMN3GMcJQHQO39zDoPIuoOzPdxWPCYN+AhAd8/0onNyz6NgByANhOJf5BIDuq7+oedTsAHQLoZiJ7ASAbvf/YwQgaofvTCHmswOgPwaTWxA2C+BdawBbawPAGnzV2ipcOSGFmR8EgOBtBUxDEeGHgLcGsa9eABRG1bjy4m6h5ocA4Ee49MK4GmvwsyU4XDsA2TMMxrQNdCF+6VxVAH50S/B5cVJg9QuelzZ+JgSAdRBG67Qdtdc6Uursn1AA1mQb6PNTRPwgiypeUbP/n1wdMjXix62V4zpFURRFURRFURRFURSVRKA/pmLynAbIqmgAAAAASUVORK5CYII="
                />
              </defs>
            </svg>

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
      color: #a775ff;
      margin: 0;
    }
    .shopingsite {
      width: 55px;
      height: 28px;
      background-color: #a775ff;
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
