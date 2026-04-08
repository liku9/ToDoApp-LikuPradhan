import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading"> <FaBookOpen className="book" /> My <span className="task-color">Notes</span></h1>
    </header>
  );
};

export default Header;