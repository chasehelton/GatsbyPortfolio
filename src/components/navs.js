import React from "react"
import { Link } from "gatsby"

function Navs() {
    return (
        <>
          <Link to="/projects" activeStyle={{ textDecoration: `underline` }} className="nav">Projects</Link>
          <Link to="/about" activeStyle={{ textDecoration: `underline` }} className="nav">About</Link>
        </>
    );
}

export default Navs