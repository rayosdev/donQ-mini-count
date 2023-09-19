import './App.css'

import { ScoreProvider } from './utils/ScoreContext'

import ScoreCounter from './components/score-counter/ScoreCounter'
import ClickerArea from './components/clicker-area/ClickerArea'


function App() {

  return (
    <>
      <ScoreProvider>
        <ScoreCounter />
        <ClickerArea />
      </ScoreProvider>
    </>
  )
}

export default App
