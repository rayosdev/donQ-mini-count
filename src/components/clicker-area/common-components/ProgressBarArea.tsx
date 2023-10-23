import { useEffect, useState } from 'react';
import './ProgressBarArea.scss'


import { ClickElementsStore } from '../../../store/ClickElementStore'

interface IProgressBarArea {
    index: number;
}

function ProgressBarArea(props: IProgressBarArea){

    const [progress, setProgress] = useState(90)
    const elementsStore = ClickElementsStore()

    useEffect(() => {
        thisElement.currentSpeed = 0.5
        startTimerRun()
    }, [])
    

    
    let timerRunRef: number | null = null
    const startTimerRun = () => {
        if(timerRunRef !== null) return
        timerRunRef = setInterval(() => {
            thisElement.currentRunProgress += thisElement.currentSpeed
            // console.log(thisElement.currentRunProgress)
            setProgress(thisElement.currentRunProgress)
            if(thisElement.currentRunProgress >= 100){
                // console.log("progress is or is above 100", progress)
                thisElement.currentRunProgress = 0
            }
        }, 10)
    }

    const thisElement = elementsStore.items[props.index]

    useEffect(() => {
    //   console.log("test", progress)
      setProgress(thisElement.currentRunProgress)
    }, [progress])
    
    useEffect(() => {
    //   console.log("first run: ", thisElement.currentRunProgress, " - ", props.index)
      thisElement.currentRunProgress = 25 * props.index
    //   console.log("thisElement: ", thisElement)
    }, [])
    

    const stripes = Array.from({ length: 25 }, (_, index) => (
        <div className='progress-bar-element__strip' key={index}></div>
    ));

    

    return (
        <div className="progress-bar-area progress-bar-area__container" data-index={props.index}>
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