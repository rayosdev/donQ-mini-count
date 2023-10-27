import { useEffect, useState } from 'react';
import './ProgressBarArea.scss'


import { ClickElementsStore } from '../../../store/ClickElementStore'

interface IProgressBarArea {
    index: number;
}

function ProgressBarArea(props: IProgressBarArea){

    const [progress, setProgress] = useState(90)
    const elementsStore = ClickElementsStore()

    const thisElement = elementsStore.items[props.index]
    
    useEffect(() => {
        thisElement.currentSpeed = 0.5
        // startTimerRun()
    }, [])

    let timerRunRef: number | null = null;
    let lastTime: number = Math.floor(Date.now() / 10); // Get initial Unix time in seconds
  
    const startTimerRun = () => {
      if (timerRunRef !== null) return
      const animate = () => {
        const currentTime = Math.floor(Date.now() / 10)
        const deltaTime = currentTime - lastTime
        
        if (deltaTime >= 1) { // Update every 1 second
          lastTime = currentTime
          thisElement.currentRunProgress += thisElement.currentSpeed * deltaTime
          
          if (thisElement.currentRunProgress >= 100) {
            // console.log("progress is or is above 100", thisElement.currentRunProgress)
            thisElement.currentRunProgress = 0
            thisElement.isRunning = false
          }
          
          setProgress(thisElement.currentRunProgress)
        }
        
        timerRunRef = requestAnimationFrame(animate)
      }
      if(thisElement.isRunning) animate()
    }


    useEffect(() => {
    //   console.log("test", progress)
      setProgress(thisElement.currentRunProgress)
    }, [progress])
    

    const isRunning = ClickElementsStore(state => state.items[props.index].isRunning) as boolean

    useEffect(() => {
        console.log("run; ", thisElement.isRunning)
        if(thisElement.isRunning) startTimerRun()
    }, [thisElement.isRunning])
    

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