import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  img: string;
  name: string;
  percent: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data: Data[] = [
    {
      img: "https://cdn.algumon.com/클리앙/0_79AD8E0A24A346259496C921D11750ED.jpg?d=200x200",
      name: "CJ 햇반 큰공기 300g * 30개",
      percent: 20
    },
    {
      img: "https://cdn.algumon.com/클리앙/0_1300B6F5F3454C8BAC006013F4508A0B.jpg?d=200x200",
      name: "스튜디오 니콜슨 토트백",
      percent: 15
    },
    {
      img: "https://cdn.algumon.com/클리앙/0_0C8D182CA216434A8624837FD7960D6C.jpg?d=200x200",
      name: "PosterPrint Pro & 1 Minute Fitness 무료",
      percent: 30
    }
  ];
  res.status(200).json(data);
}