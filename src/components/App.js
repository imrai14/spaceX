import getSpaceXLauch from '../utils/HttpData'
import { useEffect, useState } from 'react';
import WidgetContainer from './WidgetContainer';
import Header from './Header';
import Footer from './Footer';
import { Filter , SucessLaunchFilter, SucessLandingFilter } from './Filter';
import '../styles/App.css';

const App = () => {
    const [launchYear, setLaunchYear] = useState([]);
    const [rocketDetails, setrocketDetails] = useState([]);

    async function getApiData() {
        let resp =  await getSpaceXLauch('limit=100');
        setrocketDetails(resp.data);
        if(resp){
            const lYearArr = resp.data.map((data)=> {
                return data.launch_year
            })
            setLaunchYear([...new Set(lYearArr)])
        }
    }

    useEffect(() => {
        getApiData();

    }, [])

    return <div>
            <Header />
                <div className="main-container">
                    <div className="left-container">
                        <Filter launchYear={launchYear}/>
                        <SucessLaunchFilter />
                        <SucessLandingFilter />

                    </div>
                    <div className="right-container">
                        <WidgetContainer  rocketDetails={rocketDetails}/>
                    </div>
                </div>
            <Footer />
        </div>
}

export default App;