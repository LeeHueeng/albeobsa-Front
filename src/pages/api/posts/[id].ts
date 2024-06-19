import type { NextApiRequest, NextApiResponse } from 'next';

interface Post {
  id: number;
  title: string;
  content: string;
  memberName: string;
  heartCnt: number;
  commentCnt: number;
  createdAt: string;
  lastModifiedAt: string;
  comments: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Post>) {
  const { id } = req.query;

  // Example data, replace with your database fetching logic
  const post: Post = {
    id: Number(id),
    title: '처음 글 씁니다.',
    content: '저는 ~~~',
    memberName: '사용자명',
    heartCnt: 0,
    commentCnt: 0,
    createdAt: '2024.02.02',
    lastModifiedAt: '2024.02.03',
    comments: '화이팅, 응원합니다.',
  };

  res.status(200).json(post);
}
