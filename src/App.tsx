import './App.css'

import ScoreCounter from './components/score-counter/ScoreCounter'
import ClickerArea from './components/clicker-area/ClickerArea'

import { ClickElementsStore, addItemToStore } from './store/ClickElementStore'

function App() {

  const elementsStore = ClickElementsStore()
  const { addItem } = ClickElementsStore()

  return (
    <>
      <ScoreCounter />
      <div>
        <button onClick={() => addItemToStore(addItem)}>ADD</button>
        {elementsStore && elementsStore.items.map((item, index) => (
          <div>
            <h3 key={index}>Earnings: {item.currentEarnings}</h3>
            <ClickerArea />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
