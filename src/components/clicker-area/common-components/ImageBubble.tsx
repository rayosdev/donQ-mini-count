import { useState } from 'react';
import handCountImage from '@/assets/graphics/hand-counter.png'

import './ImageBubble.scss'
import { ClickElementsStore } from '../../../store/ClickElementStore'

interface IClickArea {
    index: number;
}

function ImageBubble(props: IClickArea){

    const elementsStore = ClickElementsStore()
    const thisElement = elementsStore.items[props.index]
    const [randomNumber, setRandomNumber] = useState(0)
    const isRunning = ClickElementsStore(state => state.items[props.index].isRunning)
    // console.log(isRunning, " : ", ClickElementsStore(state => state.items[props.index].isRunning)

    const handleGenerateRandomNumber = () => {
      const newRandomNumber = Math.floor(Math.random() * 6)
      setRandomNumber(newRandomNumber)
      if(isRunning == false){
        thisElement.isRunning = true
      }
    }

    return (
        <div 
            className="bubble-image bubble-image__container"
            onClick={handleGenerateRandomNumber}
        >
            <div className="bubble-image__image-frame">
                <img 
                    className="bubble-image__hand-image" 
                    src={handCountImage} 
                    style={{ objectPosition: `${-6 + (60 * -randomNumber)}px -40px`}}
                    alt="hand showing number"
                />
            </div>
        </div>
    )
}

export default ImageBubble