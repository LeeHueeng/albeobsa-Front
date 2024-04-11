/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopPicks from "@/components/index/TopPicks";
import Lank from "@/components/index/Lank";
import Community from "@/components/index/community";
import Deal from "@/components/index/deal/deal";
export default function Home() {
  return (
    <div css={styles}>
      <div className="topicks">
        <TopPicks />
      </div>
      <div className="second">
        <Lank />
      </div>
      <div className="community">
        <Community />
      </div>
      <div className="deal">
        <Deal />
      </div>
    </div>
  );
}

const styles = css`
  margin: 0px 60px;
  whidth: 100%;
  height: 100%;
  .topicks {
    width: 100%;
  }
  .second {
    margin-top: 37px;
  }
  .community {
    margin-top: 37px;
  }
  .deal {
    width: 100%;
    margin-top: 37px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 50px;
    border: 2px solid #f0f0f0;
  }
`;
