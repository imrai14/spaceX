
const Widget = (props) => {
    const data = props.item;
    return <div>
        <img src={data.links.mission_patch} alt="This is Space X" width="50px"/>
        <div>Mission Id: {data.flight_number}</div>
        <div>launch_year: {data.launch_year}</div>
        <div>launch_success: {(data.launch_success).toString()}</div>
    </div>
}

export default Widget;