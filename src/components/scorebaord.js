import React from 'react'

export const ScoreBoard = (props) => {
  return (
    <div>
      <div>
        score: {props.score}
      </div>
      <div>
        high Score: {props.highScore}
      </div>
    </div>
  )
}