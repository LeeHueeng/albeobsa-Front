/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import LankNumber from "../index/LankNumber";
import axios from "axios";

interface Item {
  id: number;
  img: string;
  name: string;
  shoppingmall: string;
  community: string;
  comments: number;
  likes: number;
}
export default function Lank() {
  const [data, setData] = useState<Item[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    axios
      .get("/api/Lank")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    function handleResize() {
      const width = window.innerWidth;
      if (width < 550) {
        setVisibleCount(3);
      } else if (width < 800) {
        setVisibleCount(1);
      } else if (width < 1200) {
        setVisibleCount(2);
      } else if (width < 1600) {
        setVisibleCount(3);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {data.slice(0, visibleCount).map((item) => (
        <LankNumber key={item.id} {...item} />
      ))}
    </div>
  );
}
