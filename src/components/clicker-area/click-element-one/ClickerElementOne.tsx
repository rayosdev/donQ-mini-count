import './ClickerElementOne.scss'
import '@/components/clicker-area/common-components/ClickerElement.scss'

import ImageBubble from '../common-components/ImageBubble'
import ProgressBarArea from '../common-components/ProgressBarArea'

import useStore from '../../../store/store'


function ClickerElementOne(){
    const store = useStore()

    return (
        <div className="clicker-element clicker-element__container clicker-element-one clicker-element-one__container">
            <ImageBubble />
            <ProgressBarArea />
            {store.test}
        </div>
    )
}

export default ClickerElementOne