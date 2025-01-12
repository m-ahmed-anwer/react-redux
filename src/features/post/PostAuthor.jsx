import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);

  const author = users?.find((user) => user.id === userId);

  return <span>{author ? author.name : "Unknown Author"}</span>;
}

export default PostAuthor;
