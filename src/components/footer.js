import React from "react"

import linkedin from "../images/linkedin.png"
import github from "../images/GitHub-Mark-120px-plus.png"
import gmail from "../images/gmail.png"

export default function Footer() {
  return (
    <div className="centerFlexRow">
      <a href="https://linkedin.com/in/chase-helton-30a689171/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="LinkedIn" width="50"/>
      </a>
      <a href="https://github.com/chasehelton/" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub" width="50"/>
      </a>
      <a target="_top" href="mailto:jchasehelton@gmail.com">
        <img src={gmail} alt="GMail" width="50"/>
      </a>
    </div>
  )
}