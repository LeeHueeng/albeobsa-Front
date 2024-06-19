/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

interface Title {
  id: number;
  createdAt: string;
  img: string;
  memberName: string;
  title: string;
  commentCnt: number;
  views: string;
}
const reasons = [
  { value: "INAPPROPRIATE_CONTENT", label: "부적절한 내용" },
  { value: "MISINFORMATION", label: "허위 정보" },
  { value: "SPAM", label: "스팸" },
  { value: "OTHER", label: "기타" },
];
export default function Alddle() {
  const [titleList, setTitleList] = useState<Title[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [reportReason, setReportReason] = useState<string>(
    "INAPPROPRIATE_CONTENT"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/boards`,
          {
            params: {
              sort: "createdAt,desc", // 최신순으로 정렬
            },
          }
        );
        if (response.data && Array.isArray(response.data.content)) {
          setTitleList(response.data.content);
          console.log(response.data.content);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleReport = async (boardId: number) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reports/${boardId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { reason: reportReason },
        }
      );
      console.log("Report response:", response);
      alert("신고가 접수되었습니다.");
    } catch (error: any) {
      console.error("Error reporting post:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      alert("신고 접수에 실패했습니다.");
    }
  };
  return (
    <div css={style}>
      <table>
        <thead>
          <tr className="name_title">
            <th>날짜</th>
            <th className="nicknames">작성자</th>
            <th className="titles">제목</th>
            <th>댓글</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {titleList.map((title, index) => (
            <tr key={title.id}>
              <td className="left">{title.createdAt}</td>
              <td className="nickname">{title.memberName}</td>
              <td className="titles">
                <Link href={`/posts/${title.id}`}>{title.title}</Link>
              </td>
              <td className="comment">
                <div className="circle">{title.commentCnt}</div>
              </td>
              <td
                className="right"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.86667 3.73333C0.835739 3.73333 4.05312e-06 2.8976 4.05312e-06 1.86667C4.05312e-06 0.835735 0.835739 0 1.86667 0C2.8976 0 3.73334 0.835735 3.73334 1.86667C3.73334 2.8976 2.8976 3.73333 1.86667 3.73333Z"
                    fill="#858585"
                  />
                  <path
                    d="M8 3.73333C6.96907 3.73333 6.13334 2.8976 6.13334 1.86667C6.13334 0.835735 6.96907 0 8 0C9.03093 0 9.86667 0.835735 9.86667 1.86667C9.86667 2.8976 9.03093 3.73333 8 3.73333Z"
                    fill="#858585"
                  />
                  <path
                    d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z"
                    fill="#858585"
                  />
                </svg>
                {hoveredIndex === index && (
                  <div className="report-container">
                    <select
                      value={reportReason}
                      onChange={(e) => setReportReason(e.target.value)}>
                      {reasons.map((reason) => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </select>
                    <button onClick={() => handleReport(title.id)}>신고</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const style = css`
  width: 90%;
  height: 100%;
  .name_title {
    font-weight: 700;

    td {
      padding: 20px;
      border: 0px;
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 700;
      line-height: 19.61px;
    }
  }
  table {
    width: 100%;
    height: 90%;
    border-collapse: separate;
    border-spacing: 0px 10px;
    tr {
      border-bottom: 1px solid #f0f0f0;
      border-radius: 10px;
    }
    td {
      padding: 20px;
      border: 1px solid #f0f0f0;
      border-left: 0;
      border-right: 0;
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
    .left {
      border-radius: 100px 0px 0px 100px;
      border: 1px solid #f0f0f0;
      border-right: 0;
      width: 60px;
    }
    .right {
      position: relative;
      border-radius: 0px 100px 100px 0px;
      border: 1px solid #f0f0f0;
      border-left: 0;
      width: 10px;

      svg {
        cursor: pointer;
      }
    }
    .nickname {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 180px;
    }
    .nicknames {
      width: 180px;
    }
    .titles {
      text-align: left;
    }
    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #e0ceff;
      font-family: Poppins;
      font-size: 8px;
      line-height: 12px;
      letter-spacing: -0.428571492433548px;
    }
    .comment {
      display: flex;
      justify-content: center;
    }
    img {
      border-radius: 50%;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    .report-container {
      position: absolute;
      top: 0px;
      right: 0;
      padding: 5px;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      select {
        margin-bottom: 5px;
      }

      button {
        padding: 5px 10px;
        background-color: #ff4d4d;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 10px;
      }
    }
  }
`;
