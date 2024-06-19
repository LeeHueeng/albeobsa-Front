
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
  rank: number;
  change: "up" | "down" | "same";
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data: Data[] = [
    { id: 1, name: "Y700 2세대, 샤오신패드 프로 12.7", rank: 1, change: "up" },
    { id: 2, name: "우주패스", rank: 2, change: "same" },
    { id: 3, name: "스마트 워치", rank: 3, change: "same" },
    { id: 4, name: "만두", rank: 4, change: "same" },
    { id: 5, name: " 코카콜라", rank: 5, change: "same" },
    { id: 6, name: "에디파이어 mr4 스피커", rank: 6, change: "same" },
    { id: 7, name: "엘지 그램", rank: 7, change: "same" },
    { id: 8, name: "제로 음료", rank: 8, change: "up" },
    { id: 9, name: "빼빼로", rank: 9, change: "same" },
    { id: 10, name: "햇반", rank: 10, change: "down" },
  ];
  res.status(200).json(data);
}
