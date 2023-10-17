import './ScoreCounter.scss'

import { GameStore } from '../../store/GameStore';

function ScoreCounter() {

  const gameStore = GameStore()
  const score = gameStore.score
  const countString = score.toString().padStart(8, '0');
  

  const updateScore = gameStore.updateScore

  const returNumbersAsHTML = (numberString: string): JSX.Element[] => {
    let nonPaddedNumberFound = false
    return numberString.split('').map((digit, i) => {
      if(digit !== '0') nonPaddedNumberFound = true
      return <span className={nonPaddedNumberFound ? '' : 'zero-pad'} key={i}>{digit}</span>
    })
  }

  return (
    <>
    <div className="score-counter score-counter__container" onClick={() => updateScore(+10)}>
      <div className="score-counter__numbers">
        {returNumbersAsHTML(countString)}
        <i>¤</i></div>
    </div>
    </>
  )
}

export default ScoreCounter
