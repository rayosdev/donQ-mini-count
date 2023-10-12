import './ClickerElementOne.scss'
import '@/components/clicker-area/common-components/ClickerElement.scss'

import ImageBubble from '../common-components/ImageBubble'
import ProgressBarArea from '../common-components/ProgressBarArea'

import useStore from '../../../store/store'
import { ClickElementsStore } from '../../../store/ClickElementStore'


function ClickerElementOne(){
    const store = useStore()
    const elementsStore = ClickElementsStore()

    return (
        <div className="clicker-element clicker-element__container clicker-element-one clicker-element-one__container">
            <ImageBubble />
            <ProgressBarArea />
            {/* {elementsStore.map((element, key) => 
                <span>{element.test}</span>
            )} */}
            {elementsStore.test}
            <button onClick={elementsStore.changeText}>push the button</button>
        </div>
    )
}

export default ClickerElementOne