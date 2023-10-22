import './ClickerArea.scss'

import ClickerElementOne from './click-element-one/ClickerElementOne'

interface IClickArea {
    index: number;
}

function ClickerArea(props: IClickArea){

    return (
        <div className="clicker-area clicker-area__container">
            <ClickerElementOne index={props.index}/>
        </div>
    )
}

export default ClickerArea