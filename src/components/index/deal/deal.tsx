/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";

export default function deal() {
  return (
    <div css={styles}>
      <div className="top">
        <svg
          width="17"
          height="26"
          viewBox="0 0 17 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="17" height="26" fill="url(#pattern0_58_2211)" />
          <defs>
            <pattern
              id="pattern0_58_2211"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1">
              <use
                xlinkHref="#image0_58_2211"
                transform="matrix(0.0104167 0 0 0.0068109 0 0.173077)"
              />
            </pattern>
            <image
              id="image0_58_2211"
              width="96"
              height="96"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABPUlEQVR4nO3aQU4CQRAFUA6CS8OJp6nqIxjCzUiUC2jGlQuDOAvLpt9LZsei0p8ioefvdgAAAADwjyzL8hQRp4i4Zub7rWf9TEScW2uH6rkf6fAvPx38N0Fceu/76vmHFxGn3x7+l+elev7hxR0/Ozeet+r5h5fbD//zqZ5/eCkAAUwtbYAAppY2QABTSxsw9B+x1+LxxxcR560BrNcY1fMPr7V22HoZdzwen6vnfwi99/16sbbe7dxz/7N+8x0+AAAAAGyw6IbWWXRDa4VuaHkAV93QQumlfK0UgACmljZAAFNLGyCAqaUNqBW6oeUBnHVDCzXd0HpdNxQAAAAA/saiG1pn0Q2tFbqh5QFcdUMLpZfytVIAApha2gABTC1tgACmljagVuiGlgdw1g0t1HRD63XdUAAAAAB24/sATKwdQvHyXlIAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </div>
      <div className="contents">
        <div className="img">
          <Image src="/sell.png" alt="deal" width={125} height={125} />
        </div>
        <div className="infomation">
          <div className="site">
            <div className="shoppingmall">쿠팡</div>
            <div className="communitiysite">루리웹</div>
          </div>
          <div className="title">청정원 카레여왕 구운마늘&양파, 108g, 1개</div>
          <div className="price">2,630원</div>
          <div className="summary">
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
                d="M5.7085 10.4178C5.7085 10.9933 6.17938 11.4642 6.7549 11.5165L10.365 11.6212L13.2426 14.1326V11.6212H14.1844C14.9692 11.6212 15.6494 10.9933 15.6494 10.1562V5.18577C15.6494 4.03472 14.7076 3.09296 13.5566 3.09296H12.5102"
                stroke="#BCEB00"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>0</p>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="17" height="17" fill="url(#pattern0_7_987)" />
              <defs>
                <pattern
                  id="pattern0_7_987"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use xlinkHref="#image0_7_987" transform="scale(0.0104167)" />
                </pattern>
                <image
                  id="image0_7_987"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADj0lEQVR4nO2cvWtUQRTFj/gBfjUKFrYWIhFFtLISbW0kaGHhH6Go6F9gIUYhARGxN2VEMTuzSUyCINipvRFD3LkbMJqIaGRkzOaDYLG7b9677+2cA7fdN/f87syd3bdcgKIoiqJ6UKNz2G0Ez43gjPZaUjX/lRV4K1isC85qrykp861gomX+aizVBOe019bzmhbsNYLpTeavQag3cFp7jalVvt8YRjBXExzUXmuS5tv1eKS93pSOHf+fXfDDLGC/9rp7p/Idxts1fw2Cw3nttVde4w3ssYKpTs1vxQ3t9SdZ+XY9rmnnUOnKN4LJDOZ708QV7TxSrXzf6gEntHOpnEZmsSuG+eEL2bjHNu18Kme+cRiLYH6ICe18UjbfG4c72jkla74N0cQF7bzSNV/g+VuQovnWYSb/0qm4RvIyfyWeaudXBfPrOZkfGvBV7RyTNd8KPF/IKJpvHH69/oSdxZZVBTRSgPktAG+0c03WfLsSD7TzTdl8bwSXtXNO1ny70oAPaeddCr312G4cakWabwXOe2zRzr0UMoL7BZvvreCZdt6lUK2JI9ZhWQGALygWjcP7UGSj8ziKsskIBkpgki8kHP5Yh6Fhjx0oi0J1qBsjxUa4bJQGgnH4pm2I1YEw2JZBWR+U9+fbqobDcn0efQQgqiDuEYCo7oJ3BCB6AEL/IwDR7QUEIATgUw7wGgoC0K5Cyx2gb4TlEaRvBnuApBdswqIIwGGBAEQPQPgpngBEFcBdAhA9AGOCkwQgagCm+EJG9Kq/5nCJAEQJgMNs+C8UAYgagNttvzTP+jC+E8ZmT36OzuEAAYhO9RvBk7bN5w5A/OYrOEUAolb9kx2Zzx2AqADqDhcJQJSq3+Fz21dP7gDEB9DErY7N5xEEnasnASB2833clfncAYjTfBs4TgCi03wzD4PKuoC8P9+WPEwD/QQgSgAcZjLPouMOQBYINzOZTwDo/uiJNY+aOwDdQogzkZ0A0B2ALzhGAKJ083EYi2I+dwD0x2DyCEKn1f9x2GNrZQAYwfeeOn4E16OZXwgAhw/aptl4sfTyK/ZVC4DOqBqfRxiHh1HNLwJAGOHSC+NqjMPvuuBw5QD8e4bDUBL/dC4rgDC6peh5cTam+YIXuY2fKQLABgiDlTqOHJbDwKlcZ/8UBWBV9Xn0hSkiYZBFSa+oS60RZANh3Fo+rlMURVEURVEURVEURVFIQH8BO1goSMUIv2EAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            <p>1</p>
          </div>
          <div className="subsummary">
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="23" height="19" fill="url(#pattern0_7_991)" />
              <defs>
                <pattern
                  id="pattern0_7_991"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use
                    xlinkHref="#image0_7_991"
                    transform="matrix(0.00860507 0 0 0.0104167 0.0869565 0)"
                  />
                </pattern>
                <image
                  id="image0_7_991"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLklEQVR4nO2dSahcRRSGK2qcDcZxIYioKBgFEd24MIoaRwQ1LUnX/1ebPGgRDepSHOJC1CAEXDiAuFAXcQA1CYoGjMkiESSL4MYJp6CISMSX5L1z+hm9Uh2jMYNJvztUVXd98MPbvO7zn1N1b9W9VdXGZDKZTCaTyWQymUwmk8lkMhVQtFrHK3mjkE8JsFrIz4X8VYApIX/3fyv5lQIfCLm8R7a2LVx4Sl3J37Zo0ak9a+/w3+W/0393Px4fy66YfGyfCblKgCfVuRu8B5MShTEzfOBCviGAKlkMIiF3KrCuZ+3CotudWTqebnem/ywF1vc/e9B4ABHydQGu995MzPgWLOSng5rUAwn4QYEHC+C4QWPx/6PkQ0r+WFU8Qm5W8jYTG0qep+SHlSWe+xTiewVuP+R4nJuvwJba4iHXCHCuiYFJ5yDk9hrNFntcDt4p2u3ZB4qlGBs7SciVDcWyzV/ams32nmaNmdG/UTVgVv/bG77tWXvJ3vFMkZcq+V3T8QjweOP3hv6NFni+8eTz39Yn1l69Ox4Brm2qFx5AzzVahCAtn/sUQcTaK8W5q6Yz2qqjJzR2zQ9tVnebJn/zCh3HbvWABbWPdgJ39SJmCTkuzp1TZwHqG2pyaLSmtklWBOaKJOTcrdUPOauc4Q65hNxc6ajIP1ALbUoTk5DXVVYAAd4MbUgTk5ArKkl+sXjxCTGMszUxCTlZdLvHli5Avvxw+kVwbl7pAviXKaFbkyYqIZ8oXwBgdWgjmqj809sqCvBFaCOaqPzrzSoKsDW0EU1Xv5QvANmLwEiRovzosYoCTIY2oolKgInSBei/GI/AjKYoYEsVPSA/A+I0ewC5uXwB8jC0KFGAlaULoMDS4F2ZiQp4uHwBrL0puBGmKb+arnQB/Docv24ytBlNTH74XnQ6J5YuQL8X7FrIGtyUJiQB3jNVIUA3tCFNTAKMVVYAv2Q8T8g4SPIn/DJJUyVKvhi6VWkqAl4wVdNzbo6QfwY3x/jVa7cvMnUgwLuhzWnk8rtrTF34ygrwR2iTGqn8DpwecKGpEwVeDW1UYxXwkqmbSfLMvD6U+2v94xPOnWGaQIEHgrc2xiUB7jFNUbRahwuwKbRpjURCfuJzYppErb0gT87Y3yhS27DzYAhwb+jWp6Fbv3N3mcAb9UZ23ZCQbwdL/j9FaLdn948bGL3kf1nZ4+ZKJmjkjhFK/o7aJ1yD4nenj8IsWbxH5+abGBHg7tAJ0vp1v4kZIZ8e2tZPLjOx099FT748hMlfUSxdephJAX9Gj9+uGTppWpWAtcWSJUeZlCisnaXAxuDJY2lt8Nu0TIr0D00C1iedfGtnmZRJtgjAxuSTn2wRMETJ3+uesC54cnlQfZTsNf9g+JFEzJu+hVxVtFrHmGHGv7iIco0R8Eoxd+4RZhT4+/CPZRG1/GeiPxO0DtTa+0Iu9vLfLeRjZpQRYGw6J9pWkPydlS6gTRm19pYm3y/77aP+AKrQvqNi0rkrmjiAz69pEvKa0H6jpOfcnFq3xQI/9Tqdi0P7jBrpdM6q6XyKr6M57zl2xsmTlfy4wmv+pu3AaaF9pffjD8D7FVx21g7dc52mKFqtIwV4rUTLf6vodI4O7WMYZs3Lp9Hyn03mFWIKKPnoAAV4JHS8Q4kAd/7fpvH+7DbkWs1RQJyb538/YD/J9yvzbg4d30gwZe1lSv68x8126yRweei4Rgppt8/2C2SV/EatPT90PCPJ9gULTvcKHUcmk8lkMplMJpPJZDIZc4j8Be+oGSCM5yQ1AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <div className="comments">
              <svg
                width="21"
                height="25"
                viewBox="0 0 21 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="21" height="25" fill="url(#pattern0_7_1013)" />
                <defs>
                  <pattern
                    id="pattern0_7_1013"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use
                      xlinkHref="#image0_7_1013"
                      transform="matrix(0.0104167 0 0 0.00875 0 0.08)"
                    />
                  </pattern>
                  <image
                    id="image0_7_1013"
                    width="96"
                    height="96"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVR4nO2cv24TQRDGvyahSU1JDeEBQDwQ8AZIaaCHhCDewg+AiHdCXiCdQ0NBC94xSIQUoCAdOtuyFCH/Ed652d37ftJUtnzn73c7d/L4DiCEEEIIIYQQQgghZAmn33A/KF6HiAtRXImiybyu5vt6JBPsFyt20GA3RLyViD8ZhNr8V832/c15gx2UFr5EBPcANU2FiGFREqZHfgbBSUoJimOU0vOLbju6dBVcDye4h9xpjxTvsMSuDpE7IeJjBkE1JhUxQu4ExU/3oNSmQsQlcsc7JDEu5I53QEIB/iEJV4B/UMIWVGchd7wDEgrwD0m4AvyDEragOgu54x2QUIB/SMIV4B+UsAXVWdi+BdvOnL0DkvwF2M6cvQOSkgRYzJy9A5ICBSSdOXsHJKUKSDVz9g5IChWQbObsHZCULCDFzNk7IClYQJKZs3dAUrCATT6fAtZAAcoV4N4mhC3IPyjhOaDOAs8BoADLq4DcC1wB8BMQ8WNV/u8+4Za14LVULmC06ruffMFtClA7ASHi5SoBwwkeUoCahX/9XnF3zep/QgFqtgKO1rXfoBhQgJoc/SfrRoZnY+yluBEd22LZg8Wh7bRH/ibz2qB4nGKbvRcQ2nvcIkYh4tWmI8L55efn4gQExQtUgEQcpFp12+/MphuLeI4KOB3jkSh+lSWgkvDDd9wJiq8pzztb71Rf2k5ow5/9xbApR0BFbSckPvLNBdRw5A9mj+E5kIjfFuGbCSg9/LMx9ubX+UkuNTsVUFr4gwa77a+aHyZ4IIqn858XOnvU2tZfwLrnS0dBeFW6gIxOuJJBSPkLMLzakQxCylqAdc+XDELKWoA1IeLSO6S+C7jwDqnXAqS9uzCDoPorYIL9Gh+LWYyAlvbWTu+gei3gvMFOe2und1i9FbCQoDiez23dg+udgBvnBMXhdI5bwTNLF1+MpEEUzyigIAne+4q+SwDxlWC4ebKJhOmbiJ8E402TdRIWbyA+EjrYLFkl4caLpHsJHW2SLJPwzwukO0r7DxUhhBBCCCEEnfAX/LR430ahT80AAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
              <p>1</p>
            </div>
            <svg
              width="29"
              height="21"
              viewBox="0 0 29 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="29" height="21" fill="url(#pattern0_7_995)" />
              <defs>
                <pattern
                  id="pattern0_7_995"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use
                    xlinkHref="#image0_7_995"
                    transform="matrix(0.0075431 0 0 0.0104167 0.137931 0)"
                  />
                </pattern>
                <image
                  id="image0_7_995"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAERElEQVR4nO2cv28URxTHv0I0oHQWBZBEUKaBfyGuIiQSpUqaCNESB3BHadHRpuCXQhKJMl1CwPa9Z51p6ENjsBGSLQW49w4jY0BRYuJo1kd8Nvb92t17czfvI43kwrL3zezOfHfmu1/AcRzHcRzHcRwnYWgZH1MNZ1kxRYIHrHgVWuPnKa7ju6nn+Mj6OocOruMwK66zYI0V6y2b4C0pfqk+xRHr6x4KWPElKVbbdvy2RoKXM4ovrK9/oGHB+XBHd9v5W54GwTnrOgb2zuc8nd80CP4kdEm1jg97mXZaTUcVxaFuryNZSPFTUZ3//yAofrCua2CkJneidrqfitbCk2VdX/SQ4Fzhnb/Zxqzrix5WTJY1AKS4bV1f9JBiobQBEDywri96qED1s8MTsGpdX9IDwIIV6/qihxXzJQ7AnHV9UVMRfEWCF74I97vj6/iEBNOl3fmba8CZftcWNbSCERZcKeXF630F9I+/iDWYWMcequMUK6Tsjm8agGvv/n/SsGKUFff71fHv1M+k4CCQ+g6n4GZfO36j88OW9udIld/+xH5SXCTFG4vOD2fISFlWsmCxx85byxboGk6TYLmXaYcEJ5EiMzUcZ8Vsjrt3NvyNbQc0P5Pg707UTjjAT3LOp7yyUrAYnprd/n4YiOycWHGLFI8yS0rYuhDMhZ1OUnybpNScyCkrw/pAgkvVGj6wrmXgIMWnpPgjx3Rza/opjlrXkZ6sFMxVavjMuo6B494S9rHiQq/bxpmiEZyvrmMvUmMXb+VrVjxmxe8sGG/lrawUICvDQo3UyNSD4sdO1EmQekHyNauJmYJlZVLk8FYuh5egMmXl0JPbW6m9tUxWKi6GbQikSmHeSu26uaws2lvJnbWwxTxqfeMNrbeSW60VqcrKvnordVtLWVYaeivXOXVZaeqtFLxIWlZaeytZMW9dX/S4t3KYB0Dw0rq+6GHFwxKnoIfW9UWPL8LGhM/1y5ahpLjrMnQXwn6+v4gZQ4obZT8FvLkw+1bETuEWQbH0axB4o/lm3JZBEJzoy1Sk7zXfjt6yL+QHMraEoIpepiNSKCu+IcFVP5LMSQiqCFkJHXbkX+F3m72VMzUcD9Izx7Tku6dN7ogxUtxp+ClXG/7KBRL8GiwrrVJFSPA1C5Z6GgQ/PyiGe27MioOqWxPjgNyca8+E29PjgFYwUqZsbXygMZ75WDf8rMHX6rmh2ynCS8rPcKyXT5TC4Gd7YXUcRupU8rupL2df3gied/0i6bmhkXym6rmhW2UrCf7t9yB4bqhxVIHnhsYQ1uG5obZxNZ4bGkFgk+eGtsEjyyKAPDfUfABWS1yIPTe0HZ4bOszeVvHc0LZ4ePcQe1vJc0PtvK2eG2rsbfXcUEtvq+eGGnpbU88NNfW2pp4baultTTo3tGjuPMEBVnzfyARtf9cLbiaZG2rhbfXcUMdxHMdxHMdxUDD/Af5GTtifidmZAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="comentline">
        <div className="line">댓글</div>
      </div>

      <div className="commentsboxs">
        <div className="comentbox">
          <div className="profill">
            <Image src="/sell.png" alt="comment" width={36} height={36} />
          </div>
          <div className="commentname">
            <p>익명1</p>
            <p>이거 먹어본사람</p>
          </div>
        </div>
        <div className="menu">
          <svg
            width="17"
            height="26"
            viewBox="0 0 17 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="17" height="26" fill="url(#pattern0_58_2210)" />
            <defs>
              <pattern
                id="pattern0_58_2210"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1">
                <use
                  xlinkHref="#image0_58_2210"
                  transform="matrix(0.0104167 0 0 0.0068109 0 0.173077)"
                />
              </pattern>
              <image
                id="image0_58_2210"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABPUlEQVR4nO3aQU4CQRAFUA6CS8OJp6nqIxjCzUiUC2jGlQuDOAvLpt9LZsei0p8ioefvdgAAAADwjyzL8hQRp4i4Zub7rWf9TEScW2uH6rkf6fAvPx38N0Fceu/76vmHFxGn3x7+l+elev7hxR0/Ozeet+r5h5fbD//zqZ5/eCkAAUwtbYAAppY2QABTSxsw9B+x1+LxxxcR560BrNcY1fMPr7V22HoZdzwen6vnfwi99/16sbbe7dxz/7N+8x0+AAAAAGyw6IbWWXRDa4VuaHkAV93QQumlfK0UgACmljZAAFNLGyCAqaUNqBW6oeUBnHVDCzXd0HpdNxQAAAAA/saiG1pn0Q2tFbqh5QFcdUMLpZfytVIAApha2gABTC1tgACmljagVuiGlgdw1g0t1HRD63XdUAAAAAB24/sATKwdQvHyXlIAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
        </div>
      </div>

      <div></div>
    </div>
  );
}

const styles = css`
  margin: 0px 60px;
  whidth: 100%;
  height: 100%;

  .top {
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: right;
  }
  .contents {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .img {
      width: 125px;
      height: 125px;
      border-radius: 10px;
      border: 1px solid #e0e0e0;
      overflow: hidden;
    }
    .infomation {
      width: 100%;
      height: 100%;
      margin-left: 15px;
    }
    .site {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 10px;

      .shoppingmall {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 28px;
        border-radius: 50px;
        background-color: #bceb00;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: white;
      }
      .communitiysite {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 28px;
        border-radius: 50px;
        background-color: #c4c4c4;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: white;
      }
    }
  }
  .title {
    margin-top: 5px;
    font-family: Poppins;
    font-size: 13px;
    font-weight: 400;
    line-height: 21.24px;
    text-align: left;
  }
  .price {
    margin-top: 5px;
    font-family: Poppins;
    font-size: 13px;
    font-weight: 400;
    line-height: 21.24px;
    text-align: left;
    color: #f85d5d;
  }
  .summary {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    gap: 11px;
    p {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 19.61px;
      text-align: left;
    }
  }
  .subsummary {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 15px;
  }
  .comments {
    display: flex;
    gap: 5px;
    align-items: center;
    p {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 19.61px;
      text-align: left;
    }
  }
  .comentline {
    display: flex;
    align-items: center;
  }
  .line {
    display: flex;
    width: 100%;
    justify-content: left;
  }
  .line::after {
    display: flex;
    align-items: center;
    content: "";
    display: block;
    border-bottom: 1px solid black;
    width: 90%;
  }
  .comentbox {
    display: flex;
    align-items: center;
  }
  .profill {
    margin-left: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    overflow: hidden;
  }
  .commentname {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    p {
      margin: 0;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 19.61px;
      text-align: left;
    }
  }
  .commentsboxs {
    margin-top: 20px;
    width: 100%;
    height: 65px;
    border-radius: 100px;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .menu {
    margin-right: 20px;
  }
`;
