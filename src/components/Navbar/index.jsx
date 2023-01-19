import React from "react";

export default function Navbar({ logo, children }) {
  return (
    <header>
      <nav className="navbar">
        {logo}
        <ul className = "right-0" >{children}</ul>
      </nav>
    </header>
  );
}