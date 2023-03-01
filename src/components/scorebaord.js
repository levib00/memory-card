import React from 'react'
import ScoreboardCSS from '../styles/scoreboard.module.css'

export const ScoreBoard = (props) => {
  return (
    <div  className={ScoreboardCSS.scoreboard}>
      <div>
        score: {props.score}
      </div>
      <div>
        high Score: {props.highScore}
      </div>
    </div>
  )
}