import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { fetchUsers } from "./features/users/userSlice.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./features/post/SinglePost.jsx";
import AddPost from "./features/post/AddPost.jsx";
import Layout from "./component/Layout.jsx";
import PostList from "./features/post/PostList.jsx";
import { fetchPosts } from "./features/post/postSlice.jsx";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<PostList />} />

          <Route path="post">
            <Route index element={<AddPost />} />
            <Route path=":postId" element={<SinglePost />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
