/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const style = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  margin: 30px;
  box-sizing: border-box;

  .contents,
  .second {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 10px;
  }

  .list-item {
    width: 100%;
    padding: 10px 0;
  }

  .list-item h3 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #333;
    margin: 0;
    padding: 10px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .list-item h3:hover {
    background-color: #e0e0e0;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: #a775ff;
  }
`;

interface Report {
  id: number;
  boardId: number;
  commentId: number;
  reporterId: number;
  reason: string;
}

interface Board {
  category: string;
  id: number;
  title: string;
  content: string;
  createdAt: string;
  memberName: string;
}

export default function Freeboard() {
  const router = useRouter();
  const [freeboardData, setFreeboardData] = useState<Board[]>([]);
  const [marketData, setMarketData] = useState<Board[]>([]);
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    fetchBoardData();
  }, []);

  const fetchBoardData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/boards`
      );
      const data = response.data.content;

      setFreeboardData(
        data.filter((board: Board) => board.category === "freeboard")
      );
      setMarketData(data.filter((board: Board) => board.category === "market"));
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  const fetchReportData = async (boardId: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reports/${boardId}`
      );
      setReports(response.data);
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const handleClick = (id: number) => {
    router.push(`/posts/${id}`);
  };

  const handleReportClick = (id: number) => {
    fetchReportData(id);
  };

  return (
    <div css={style}>
      <div className="contents">
        <h2>자유게시판</h2>
        {freeboardData.map((item) => (
          <div key={item.id} className="list-item">
            <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
            <button onClick={() => handleReportClick(item.id)}>
              신고 내역 조회
            </button>
          </div>
        ))}
      </div>
      <div className="contents">
        <h2>알뜰구매 게시판</h2>
        {marketData.map((item) => (
          <div key={item.id} className="list-item">
            <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
            <button onClick={() => handleReportClick(item.id)}>
              신고 내역 조회
            </button>
          </div>
        ))}
      </div>
      <div className="second">
        <h2>신고 내역</h2>
        {reports.length > 0 ? (
          reports.map((report) => (
            <div key={report.id} className="list-item">
              <h3>{`신고 이유: ${report.reason}`}</h3>
              <p>{`신고자 ID: ${report.reporterId}`}</p>
              <p>{`댓글 ID: ${report.commentId}`}</p>
            </div>
          ))
        ) : (
          <p>신고 내역이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
