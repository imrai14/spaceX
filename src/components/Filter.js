import '../styles/Filter.css';

const Filter = (props) => {
    if (props.launchYear) {
        return props.launchYear.map(item => {
            return <button className="Common-btn" key={ item.toString() }>{ item }</button>;
        })
    }
    else {
        return "";
    }
}


const SucessLaunchFilter = () => {

    return <div>
        <div>Success Launch</div>
        <button className="Common-btn">True</button>
        <button className="Common-btn">False</button>
    </div>

}


const SucessLandingFilter = () => {
    return <div>
        <div>Success Landing</div>
        <button className="Common-btn">True</button>
        <button className="Common-btn">False</button>
    </div>

}

export {
    Filter,
    SucessLandingFilter,
    SucessLaunchFilter
}