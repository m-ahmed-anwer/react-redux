import React from "react";
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import PostExcerpt from "./PostExcerpt";

function PostList() {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}

export default PostList;
