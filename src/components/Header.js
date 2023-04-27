import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#181818",
      }}
    >
      <Link to="/add">
        <h2>AddProduct</h2>
      </Link>
      <Link to="/list">
        <h2>ListProduct</h2>
      </Link>
    </div>
  );
}
export default Header;
