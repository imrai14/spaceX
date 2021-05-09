import Widget from './Widget';
import { useEffect } from 'react';
import '../styles/WidgetContainer.css'

const WidgetContainer = (props) => {
    const rocketDetails = props.rocketDetails;
    useEffect(() => {

    }, [rocketDetails])

    if (rocketDetails) { 
        return rocketDetails.map(item =>{
            return <div className="flex-container" key={Math.random()}>
            <Widget item={item} />
        </div>
        })
      }
      else {
       return "";
      }
}

export default WidgetContainer;