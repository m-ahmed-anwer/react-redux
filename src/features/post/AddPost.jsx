import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

function AddPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const canSave =
    [postTitle, postContent, userId].every(Boolean) &&
    addRequestStatus === "idle";

  const onSubmit = (event) => {
    event.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title: postTitle, body: postContent, userId }));
        setPostTitle("");
        setPostContent("");
        setUserId("");
      } catch (error) {
        console.error("Failed to save the post: ", error);
      } finally {
        setAddRequestStatus("idle");
        
      }
    }
  };

  const userOptions = users.length
    ? users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))
    : [<option key="loading">Loading...</option>];

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor="userId">Author:</label>
        <select
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select an author</option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />

        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}

export default AddPost;
