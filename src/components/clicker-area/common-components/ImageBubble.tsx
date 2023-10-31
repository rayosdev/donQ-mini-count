import { useState, useRef } from 'react';
import handCountImage from '@/assets/graphics/hand-counter.png'

import './ImageBubble.scss'
import { ClickElementsStore } from '../../../store/ClickElementStore'

interface IClickArea {
    index: number;
}

function ImageBubble(props: IClickArea){

    const { items, updateItem } = ClickElementsStore()
    const thisElement = items[props.index]
    const [randomNumber, setRandomNumber] = useState(0)
    // const isRunning = ClickElementsStore(state => state.items[props.index].isRunning)
    // console.log(isRunning, " : ", ClickElementsStore(state => state.items[props.index].isRunning)

    const handleGenerateRandomNumber = () => {
        if(thisElement.isRunning == false){
            const newRandomNumber = Math.floor(Math.random() * 6)
            setRandomNumber(newRandomNumber)
            const speech = new SpeechSynthesisUtterance()
            speech.text = newRandomNumber.toString()
            speech.lang = 'de-DE'
            window.speechSynthesis.speak(speech)
            updateItem(props.index, { isRunning: true })
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