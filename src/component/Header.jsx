import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Redux Essentials Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/addPost">Add Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
