/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TopPicks from '@/components/index/TopPicks';
import Lank from '@/components/index/Lank';

export default function Home() {
    return (
        <div css={styles}>
            <div>
                <TopPicks />
            </div>
            <div className="second">
                <Lank />
            </div>
        </div>
    );
}

const styles = css`
  margin 0;
  whidth: 100%;
  height: 100%;
  .second {
    margin-top: 37px;
  }
`;
