import Widget from './Widget';
import '../styles/WidgetContainer.css'

const WidgetContainer = () => {
    return <div className="flex-container">
            <Widget />
            <Widget />
        </div>
}

export default WidgetContainer;