/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Comment {
  id: number;
  content: string;
  memberName: string;
  createdAt: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  memberName: string;
  heartCnt: number;
  commentCnt: number;
  createdAt: string;
  lastModifiedAt: string;
  comments: Comment[];
  isLiked: boolean;
}

export default function PostDetails() {
  const [post, setPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingCommentContent, setEditingCommentContent] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get<Post>(
            `${process.env.NEXT_PUBLIC_API_URL}/api/boards/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setPost(response.data);
        } catch (error) {
          console.error("Failed to fetch post", error);
        }
      };

      fetchPost();
    }
  }, [id, token]);

  const handleLike = async () => {
    if (post?.isLiked) {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/api/boards/${id}/hearts`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPost(
          (prevPost) =>
            prevPost && {
              ...prevPost,
              heartCnt: prevPost.heartCnt - 1,
              isLiked: false,
            }
        );
      } catch (error) {
        console.error("Failed to unlike post", error);
      }
    } else {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/boards/${id}/hearts`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPost(
          (prevPost) =>
            prevPost && {
              ...prevPost,
              heartCnt: prevPost.heartCnt + 1,
              isLiked: true,
            }
        );
      } catch (error) {
        console.error("Failed to like post", error);
      }
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post<Comment>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/boards/${id}/comments`,
        {
          content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPost(
        (prevPost) =>
          prevPost && {
            ...prevPost,
            comments: [...prevPost.comments, response.data],
            commentCnt: prevPost.commentCnt + 1,
          }
      );
      setNewComment("");
      window.location.reload();
    } catch (error) {
      console.error("Failed to submit comment", error);
    }
  };

  const handleCommentDelete = async (commentId: number) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/boards/${id}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPost(
        (prevPost) =>
          prevPost && {
            ...prevPost,
            comments: prevPost.comments.filter(
              (comment) => comment.id !== commentId
            ),
            commentCnt: prevPost.commentCnt - 1,
          }
      );
    } catch (error) {
      console.error("Failed to delete comment", error);
    }
  };

  const handleCommentEdit = async (commentId: number) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/boards/${id}/comments/${commentId}`,
        {
          content: editingCommentContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPost(
        (prevPost) =>
          prevPost && {
            ...prevPost,
            comments: prevPost.comments.map((comment) =>
              comment.id === commentId
                ? { ...comment, content: editingCommentContent }
                : comment
            ),
          }
      );
      setEditingCommentId(null);
      setEditingCommentContent("");
    } catch (error) {
      console.error("Failed to edit comment", error);
    }
  };

  const handlePostDelete = async () => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/boards/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      router.push("/community"); // 게시글 삭제 후 커뮤니티 페이지로 이동
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div css={style}>
      <div className="post-container">
        <h1 className="post-title">{post.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="post-meta">
          <span className="post-author">작성자: {post.memberName}</span>
          <span className="post-date">작성일: {post.createdAt}</span>
          <span className="post-date">수정일: {post.lastModifiedAt}</span>
        </div>
        <div className="post-stats">
          <span
            className={`post-hearts ${post.isLiked ? "liked" : ""}`}
            onClick={handleLike}>
            ♥ {post.heartCnt}
          </span>
          <span className="post-comments">댓글 {post.commentCnt}</span>
        </div>
        <div className="post-actions">
          <button onClick={() => router.push(`/edit/${id}`)}>수정</button>
          <button onClick={handlePostDelete}>삭제</button>
        </div>
        <div className="post-comments-section">
          <h2>댓글</h2>
          {post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="comment">
                {editingCommentId === comment.id ? (
                  <div>
                    <textarea
                      value={editingCommentContent}
                      onChange={(e) => setEditingCommentContent(e.target.value)}
                    />
                    <button onClick={() => handleCommentEdit(comment.id)}>
                      저장
                    </button>
                    <button onClick={() => setEditingCommentId(null)}>
                      취소
                    </button>
                  </div>
                ) : (
                  <div>
                    <div
                      className="comment-content"
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                    />
                    <div className="comment-meta">
                      <span className="comment-author">
                        {comment.memberName}
                      </span>
                      <span className="comment-date">{comment.createdAt}</span>
                    </div>
                    <button
                      onClick={() => {
                        setEditingCommentId(comment.id);
                        setEditingCommentContent(comment.content);
                      }}>
                      수정
                    </button>
                    <button onClick={() => handleCommentDelete(comment.id)}>
                      삭제
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
          )}
          <div className="new-comment">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요..."
            />
            <button className="submit" onClick={handleCommentSubmit}>
              댓글 작성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = css`
  .post-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .post-title {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .post-content {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .post-meta {
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
    color: #555;
    margin-bottom: 20px;

    span {
      margin-bottom: 5px;
    }
  }

  .post-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    .post-hearts,
    .post-comments {
      font-size: 1.1em;
      font-weight: bold;
      cursor: pointer;
    }

    .post-hearts.liked {
      color: red;
    }
  }

  .post-actions {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:last-child {
      background-color: #dc3545;
    }
  }

  .post-comments-section {
    margin-top: 40px;

    h2 {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .comment {
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .comment-content {
      font-size: 1.1em;
      line-height: 1.6;
      margin-bottom: 5px;
    }

    .comment-meta {
      display: flex;
      gap: 10px;
      font-size: 0.9em;
      color: #555;

      .comment-author {
        font-weight: bold;
      }
    }

    .new-comment {
      margin-top: 20px;

      textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-bottom: 10px;
      }

      button {
        padding: 10px 20px;
        background-color: #0056b3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    button {
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 5px;
    }

    button:last-child {
      background-color: #dc3545;
    }

    textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }
`;
