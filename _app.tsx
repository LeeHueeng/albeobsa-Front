import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>알법사</title>
        <meta name="description" content="알뜰마법사 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <div className="nav-barContainer">
          <Navbar />
        </div>

        <div className="contents-Container">
          <div className="contents-Left-Container">
            <Leftbar />
          </div>
          <div className="contents-Right-Container">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
