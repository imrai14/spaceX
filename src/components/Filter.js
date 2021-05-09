import '../styles/Filter.css';

const Filter = (props) => {
    if (props.launchYear) {
        return props.launchYear.map(item => {
            return <button className="Common-btn" onClick= { () =>
                props.launchFunc(item)} key={ item.toString() }>{ item }</button>;
        })
    }
    else {
        return "";
    }
}


const SucessLaunchFilter = (props) => {

    return <div>
        <div>Success Launch</div>
        <button onClick= { () =>
                props.launchSucc('true')} className="Common-btn">True-Netlify Test</button>
        <button onClick= { () =>
                props.launchSucc('false')} className="Common-btn">False</button>
    </div>

}


const SucessLandingFilter = (props) => {
    return <div>
        <div>Success Landing</div>
        <button onClick= { () =>
                props.landSucc('true')} className="Common-btn">True</button>
        <button onClick= { () =>
                props.landSucc('false')} className="Common-btn">False</button>
    </div>

}

export {
    Filter,
    SucessLandingFilter,
    SucessLaunchFilter
}