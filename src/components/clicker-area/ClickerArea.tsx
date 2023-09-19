import './ClickerArea.scss'

import ClickerElementOne from './click-element-one/ClickerElementOne'


function ClickerArea(){

    return (
        <div className="clicker-area clicker-area__container">
            <ClickerElementOne />
        </div>
    )
}

export default ClickerArea