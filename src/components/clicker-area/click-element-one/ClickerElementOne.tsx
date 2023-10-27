import './ClickerElementOne.scss'
import '@/components/clicker-area/common-components/ClickerElement.scss'

import ImageBubble from '../common-components/ImageBubble'
import ProgressBarArea from '../common-components/ProgressBarArea'

import { ClickElementsStore, addItemToStore } from '../../../store/ClickElementStore'

interface IClickerElementOne {
    index: number;
}

function ClickerElementOne(props: IClickerElementOne){
    const { addItem } = ClickElementsStore()

    return (
        <>
            <div className="clicker-element clicker-element__container clicker-element-one clicker-element-one__container">
                <ImageBubble index={props.index} />
                <ProgressBarArea index={props.index} />
                <button onClick={() => addItemToStore(addItem)}>push the button</button>
            </div>
        </>
    )
}

export default ClickerElementOne