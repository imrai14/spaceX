import "../styles/Widget.css";

const Widget = (props) => {
    const data = props.item;
    return <div>
        <div className="Image-wrapper">
            <img src={data.links.mission_patch} alt="This is Space X" width="200px"/>
        </div>
        <div className="label-wrapper">Mission Id: {data.flight_number}</div>
        <div className="label-wrapper">launch_year: {data.launch_year}</div>
        <div className="label-wrapper">launch_success: {String(data.launch_success)}</div>
    </div>
}

export default Widget;