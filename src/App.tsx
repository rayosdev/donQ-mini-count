import React, { useState } from 'react'
import './App.css'

import ScoreCounter from './components/score-counter/ScoreCounter'
import { ScoreProvider } from './utils/ScoreContext'

// export const ScoreContext = React.createContext(0)

function App() {

  // const [score, setScore] = useState(1222)


  return (
    <>
      <ScoreProvider>
        <ScoreCounter />
      </ScoreProvider>
    </>
  )
}

export default App
