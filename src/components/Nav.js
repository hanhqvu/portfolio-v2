import React from "react";
import { Link } from "gatsby";

export default function Nav() {
    return (
        <nav>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}