import { useState, useContext } from 'react'
import './ScoreCounter.scss'

import { useScore, useScoreUpdate } from '../../utils/ScoreContext'

function ScoreCounter() {

  const score = useScore()
  const countString = score.toString().padStart(8, '0');
  
  const updateScore = useScoreUpdate()

  const handleCounterClick = () => {
    updateScore()
  };

  const returNumbersAsHTML = (numberString: string): JSX.Element[] => {
    let nonPaddedNumberFound = false
    return numberString.split('').map((digit, i) => {
      if(digit !== '0') nonPaddedNumberFound = true
      return <span className={nonPaddedNumberFound ? '' : 'zero-pad'} key={i}>{digit}</span>
    })
  }

  return (
    <>
    <div className="score-counter score-counter__container" onClick={handleCounterClick}>
      <div className="score-counter__numbers">
        {returNumbersAsHTML(countString)}
        <i>¤</i></div>
    </div>
    </>
  )
}

export default ScoreCounter
