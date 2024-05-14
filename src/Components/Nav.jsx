import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/:category">Category</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
