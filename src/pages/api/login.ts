import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  img: string;
  email: string;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data: Data = {  
        img: "https://cdn.algumon.com/클리앙/0_79AD8E0A24A346259496C921D11750ED.jpg?d=200x200",
        name: "이현우",
        email: "zzxx373014@gmail.com"
      };
  
  res.status(200).json(data);
}