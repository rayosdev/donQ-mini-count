import handCountImage from '@/assets/graphics/hand-counter.png'
import { useState } from 'react';


function ImageBubble(){

    const [randomNumber, setRandomNumber] = useState(0)

    const handleGenerateRandomNumber = () => {
      const newRandomNumber = Math.floor(Math.random() * 6)
      setRandomNumber(newRandomNumber)
    }

    return (
        <div className="clicker-element-one clicker-element-one__container"
            onClick={handleGenerateRandomNumber}
        >
            <div className="bubble-image bubble-image__container">
                <div className="bubble-image__image-frame">
                    <img 
                        className="bubble-image__hand-image" 
                        src={handCountImage} 
                        style={{ objectPosition: `${-6 + (60 * -randomNumber)}px -40px`}}
                        alt="hand showing number"
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageBubble