import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex gap-8 underline bg-red-500 text-white">
      <Link to="/">Home</Link>
      <Link to="/:category">Category</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
