/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Item {
  id: number;
  name: string;
  rank: number;
  change: "up" | "down" | "same";
}

export default function RealTimeSearch() {
  const [data, setData] = useState<Item[]>([]);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/realtime-search");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();

    const updateCurrentTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      setCurrentTime(now.toLocaleDateString("ko-KR", options));
    };

    updateCurrentTime();
    const timer = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div css={styles}>
      <div className="container">
        <div className="nametop">
          <p className="title">실시간 검색어</p>
          <p className="current-time">{currentTime}</p>
        </div>
        <div className="picklist">
          <div className="left">
            {data.slice(0, 5).map((item) => (
              <div className="pick-item-row" key={item.id}>
                <div className="rank">{item.rank}</div>
                <div className="details-row">
                  <p className="name">{item.name}</p>
                  <p className={`change ${item.change}`}>
                    {item.change === "up" && "▲"}
                    {item.change === "down" && "▼"}
                    {item.change === "same" && "■"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="right">
            {data.slice(5, 10).map((item) => (
              <div className="pick-item-row" key={item.id}>
                <div className="rank">{item.rank}</div>
                <div className="details-row">
                  <p className="name">{item.name}</p>
                  <p className={`change ${item.change}`}>
                    {item.change === "up" && "▲"}
                    {item.change === "down" && "▼"}
                    {item.change === "same" && "■"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = css`
  width: 96%;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #f0f0f0;
  .container {
    width: 100%;
    height: 100%;
    padding: 0 20px;

    .nametop {
      margin-bottom: 20px;

      .title {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
      }

      .current-time {
        font-family: Poppins;
        font-size: 11px;
        font-weight: 400;
        line-height: 19.8px;
        text-align: left;
        color: #a775ff;
      }
    }

    .picklist {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      .left,
      .right {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 45%;
        margin-right: 30px;
      }
    }

    .pick-item-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      .rank {
        font-family: Poppins;
        font-size: 15px;
        font-weight: 700;
        line-height: 22.5px;
        text-align: left;
      }

      .details-row {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        justify-content: space-between;

        .name {
          font-family: Poppins;
          font-size: 13px;
          font-weight: 400;
          line-height: 21.24px;
          text-align: left;
        }

        .change {
          font-size: 14px;
          margin-left: auto;
          &.up {
            color: green;
          }
          &.down {
            color: red;
          }
          &.same {
            color: gray;
          }
        }
      }
    }
  }
`;
