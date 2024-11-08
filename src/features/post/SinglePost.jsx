import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p className="post-content">{post.content}</p>
      <ReactionButton post={post} />
    </article>
  );
}

export default SinglePost;
