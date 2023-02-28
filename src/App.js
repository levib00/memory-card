import React, { useState } from "react";
import { CardContainer } from "./components/card-container";
import { ScoreBoard } from './components/scorebaord'

function App() {
  const [score, setScore] = useState(0)

  const [highScore, setHighScore] = useState(0)

  const incrementScore = () => {
    let newScore = score.valueOf();
    newScore = newScore + 1
    setScore(newScore)
    checkHighScore(newScore)
  }

  const resetScore = () => setScore(0)

  const checkHighScore = (score) => {
    if (highScore < score) {
      setHighScore(score)
    }
  }
  
  return (
    <div className="App">
      <ScoreBoard score={score} highScore={highScore} />
      <CardContainer incrementScore={incrementScore} resetScore={resetScore} checkHighScore={checkHighScore}/>
    </div>
  );
}

export default App;
