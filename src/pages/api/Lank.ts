import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number;
  img: string;
  name: string;
  shoppingmall: string;
  community: string;
  
  comments: number;
  likes: number;   
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data: Data[] = [
    {
        id: 0,
      img: "https://cdn.algumon.com/클리앙/0_79AD8E0A24A346259496C921D11750ED.jpg?d=200x200",
      name: "CJ 햇반 큰공기 300g * 30개",
      shoppingmall: "쿠팡",
      community: "뽐뿌",
        comments: 10,
        likes: 10
        
      },
    {
        id: 1,
      img: "https://cdn.algumon.com/클리앙/0_1300B6F5F3454C8BAC006013F4508A0B.jpg?d=200x200",
      name: "스튜디오 니콜슨 토트백",
      shoppingmall: "쿠팡",
      community: "뽐뿌",
        comments: 10,
        likes: 10
    },
    {
        id: 2,
      img: "https://cdn.algumon.com/클리앙/0_0C8D182CA216434A8624837FD7960D6C.jpg?d=200x200",
      name: "PosterPrint Pro & 1 Minute Fitness 무료",
      shoppingmall: "쿠팡",
      community: "뽐뿌",
        comments: 10,
        likes: 10
    }
  ];
  res.status(200).json(data);
}