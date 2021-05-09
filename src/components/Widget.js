import "../styles/Widget.css";
import Image from './Image';

const Widget = (props) => {
    const data = props.item;
    return <div className="W-200">
        <div className="Image-wrapper">
            <Image src={data.links.mission_patch} alt={data.mission_name} />
        </div>
        <div className="label-wrapper"><b>Mission Id: </b>{data.flight_number}</div>
        <div className="label-wrapper"><b>Mission Name:</b> {data.mission_name}</div>
        <div className="label-wrapper"><b>Launch Year:</b> {data.launch_year}</div>
        <div className="label-wrapper"><b>Success Launch:</b> {String(data.launch_success).toLocaleUpperCase()}</div>
    </div>
}

export default Widget;