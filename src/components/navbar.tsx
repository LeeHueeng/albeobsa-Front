/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Logo from "@/styles/icon/logo";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div css={container}>
      <div className="logo" onClick={() => handleClick()}>
        <Logo />
        <svg
          width="43"
          height="15"
          viewBox="0 0 43 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.41777 0H11.5408V7.4838H9.41777V0ZM10.6788 2.86717H13.4882V4.63283H10.6788V2.86717ZM1.77182 8.08315H11.5408V12.1976H3.91077V13.9795H1.80374V10.6425H9.44969V9.73542H1.77182V8.08315ZM1.80374 13.1533H11.9717V14.838H1.80374V13.1533ZM3.94269 0.437364C6.20934 0.437364 7.88539 1.84665 7.88539 3.83909C7.88539 5.81533 6.20934 7.24082 3.94269 7.24082C1.69201 7.24082 0 5.81533 0 3.83909C0 1.84665 1.69201 0.437364 3.94269 0.437364ZM3.94269 2.17063C2.85726 2.17063 2.05914 2.78618 2.05914 3.83909C2.05914 4.89201 2.85726 5.52376 3.94269 5.52376C5.04409 5.52376 5.84221 4.89201 5.84221 3.83909C5.84221 2.78618 5.04409 2.17063 3.94269 2.17063Z"
            fill="#575868"
          />
          <path
            d="M15.2108 0.761339H17.3179V2.65659H20.1272V0.761339H22.2023V7.77538H15.2108V0.761339ZM17.3179 4.29266V6.05831H20.1272V4.29266H17.3179ZM21.7235 3.41793H25.315V5.15119H21.7235V3.41793ZM24.8361 0H26.9591V8.21274H24.8361V0ZM17.1423 8.84449H19.2493V10.189H24.8521V8.84449H26.9591V14.8218H17.1423V8.84449ZM19.2493 11.8413V13.1048H24.8521V11.8413H19.2493Z"
            fill="#575868"
          />
          <path
            d="M32.5926 1.15011H34.3165V3.33693C34.3165 7.04644 33.0395 10.5292 30.2461 11.9222L28.9691 10.189C31.4592 9.00648 32.5926 6.12311 32.5926 3.33693V1.15011ZM33.0235 1.15011H34.7156V3.33693C34.7156 6.02592 35.7691 8.7635 38.1315 9.92981L36.8545 11.6469C34.1888 10.27 33.0235 6.93305 33.0235 3.33693V1.15011ZM38.7221 0H40.861V15H38.7221V0ZM40.3822 5.76674H43V7.5648H40.3822V5.76674Z"
            fill="#575868"
          />
        </svg>
      </div>

      <div className="nav-right">
        <div className="input">
          <input type="text" placeholder="검색" />
        </div>

        <div className="user-box">
          <div className="img-box"></div>
          USER PROFILE
        </div>
        <div>
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.15385 3.5564C9.76923 3.5564 11.9231 5.71021 11.9231 8.32559C11.9231 9.17174 11.6923 10.0179 11.2308 10.7871L11 11.2487L11.4615 12.7102C11.6154 13.2486 12 13.6333 12.5385 13.941C13 14.1718 13.3077 14.6334 13.3077 15.1719V15.4795C13.3077 16.0949 12.7692 16.6333 12.1538 16.6333H2.15385C1.53846 16.6333 1 16.0949 1 15.4795V15.1719C1 14.6334 1.30769 14.1718 1.76923 13.941C2.23077 13.7102 2.61539 13.2486 2.84616 12.7102L3.30769 11.2487L3.07692 10.7871C1.69231 8.55632 2.46154 5.55632 4.69231 4.24863C5.46154 3.78709 6.30769 3.5564 7.15385 3.5564Z"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.15379 21.2487C8.00346 21.2487 8.69225 20.5599 8.69225 19.7103C8.69225 18.8606 8.00346 18.1718 7.15379 18.1718C6.30412 18.1718 5.61533 18.8606 5.61533 19.7103C5.61533 20.5599 6.30412 21.2487 7.15379 21.2487Z"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.61533 3.5572V2.78797C5.61533 1.94182 6.30763 1.24951 7.15379 1.24951C7.99994 1.24951 8.69225 1.94182 8.69225 2.78797V3.5572"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  padding: 10px 0px;
  width: 80%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .logo {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    p {
      width: 43px;
      height: 15px;
    }
  }
  .input {
    width: 100%;
    max-width: 1000px;
    height: 40px;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 100px;
    border: 1px solid #bceb00;
  }
  .nav-right {
    display: flex;
    gap: 50px;
    align-items: center;
    width: 70%;
  }
  .img-box {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: black;
  }
  .user-box {
    display: flex;
    gap: 10px;
    align-items: center;
    white-space: nowrap;
  }
`;
