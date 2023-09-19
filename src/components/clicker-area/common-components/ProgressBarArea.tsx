import { useState } from 'react';
import './ProgressBarArea.scss'


function ProgressBarArea(){

    const [progress, setProgress] = useState(90) 

    const stripes = Array.from({ length: 25 }, (_, index) => (
        <div className='progress-bar-element__strip' key={index}></div>
    ));



    return (
        <div className="progress-bar-area progress-bar-area__container">
            <div className="progress-bar-area__level-up-progress level-up-progress level-up-progress__container">
                <div className="level-up-progress__bar"></div>
            </div>
            <div className="progress-bar-area__bar-container">
                <div className="progress-bar-area__bar-outline">
                    <div className="progress-bar-area__progress-element">
                        <div className="progress-bar-area__progress-bar-container progress-bar-element">
                            <div 
                                className="progress-bar-element__progress-container"
                                style={{width: progress + '%'}}
                            >
                                <div className="progress-bar-element__strip-container">
                                    {stripes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBarArea