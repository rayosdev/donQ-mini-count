import './ClickerArea.scss'

import ClickerElementOne from './ClickElementOne/ClickerElementOne'


function ClickerArea(){

    return (
        <div className="clicker-area clicker-area__container">
            <ClickerElementOne></ClickerElementOne>
        </div>
    )
}

export default ClickerArea