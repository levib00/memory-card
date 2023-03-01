import React from "react";
import headerCSS from '../styles/header.module.css'

export const Header = () => {
  return (
    <div className={headerCSS.header}>
      <div>
        <img className={headerCSS.logo} src={require('../images/Overwatch_circle_logo.svg.png')} alt="overwatch logo"/>
      </div>
      <div className={headerCSS.textContainer}>
        <img className={headerCSS.textLogo} src={require('../images/Overwatch_text_logo.svg.png')} alt="overwatch text"/>
        MEMORY GAME
      </div>
      
    </div>
  )
}