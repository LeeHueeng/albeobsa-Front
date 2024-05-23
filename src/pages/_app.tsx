/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import MobileView from "@/components/MobileView";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const appContainer = css`
  display: flex;
  flex-direction: column;
`;

const navBarContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const contentsContainer = css`
  display: flex;
  margin: 0px;
  align-items: top;
  width: 100%;
  height: 100%;
`;

const contentsLeftContainer = css`
  display: flex;
  align-items: center;
  margin: 0px;
  background-color: white;
  width: 20%;
  @media (max-width: 600px) {
    display: none;
  }
`;

const contentsRightContainer = css`
  margin: 0px;
  padding: 0px;
  height: 100%;
  border: 1px solid #f0f0f0;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>알법사</title>
        <meta name="description" content="알뜰마법사 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? (
        <MobileView />
      ) : (
        <div css={appContainer} className={inter.className}>
          <div css={navBarContainer}>
            <Navbar />
          </div>
          <div css={contentsContainer}>
            <div css={contentsLeftContainer}>
              <Leftbar />
            </div>
            <div css={contentsRightContainer}>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
