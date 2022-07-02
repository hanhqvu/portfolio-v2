import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="Layout">
        <header>
            <Nav />
        </header>
        <div className="content">
            { children }
        </div>
        <footer>
            <p>Copyright 2022 Hanh Vu</p>
        </footer>
    </div>
  )
}
