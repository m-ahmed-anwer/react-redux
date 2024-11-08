import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

function PostExcerpt({ postId }) {
  
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <p className="post-content">{post.body.substring(0, 100)}</p>
      <p>
        <Link to={`/post/${post.id}`}> View Post </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <ReactionButton post={post} />
    </article>
  );
}

export default PostExcerpt;
