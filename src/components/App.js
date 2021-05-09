import getSpaceXLauch from '../utils/HttpData'
import { useEffect, useState } from 'react';
import WidgetContainer from './WidgetContainer';
import Header from './Header';
import Footer from './Footer';
import { Filter , SucessLaunchFilter, SucessLandingFilter } from './Filter';
import '../styles/App.css';
import  LoadingIndicator  from './LoadingIndicator';

const App = () => {
    const [launchYear, setLaunchYear] = useState([]);
    const [rocketDetails, setrocketDetails] = useState([]);
    const [loading , setLoading] = useState(false);

    async function getApiData() {
        setLoading(true);
        let resp =  await getSpaceXLauch('limit=100');
        setLoading(false);
        setrocketDetails(resp.data);
        if(resp){
            const lYearArr = resp.data.map((data)=> {
                return data.launch_year
            })
            setLaunchYear([...new Set(lYearArr)])
        }
    }

    async function getDataWithLaunchYear(year){
        setLoading(true);
        let resp =  await getSpaceXLauch(`limit=100&launch_year=${year}`);
        setLoading(false);
        setrocketDetails(resp.data); 
    }

    async function getDataForLaunchSuccess(type){
        setLoading(true);
        let resp =  await getSpaceXLauch(`limit=100&launch_success=${type}`);
        setLoading(false);
        setrocketDetails(resp.data); 
    }

    async function getDataForLandSuccess(type){
        setLoading(true);
        let resp =  await getSpaceXLauch(`limit=100&land_success=${type}`);
        setLoading(false);
        setrocketDetails(resp.data); 
    }

    useEffect(() => {
        getApiData();

    }, [])

    if(!loading) {
        return <div>
            <Header />
                <div className="main-container">
                    <div className="left-container">
                        <Filter launchYear={launchYear} launchFunc={getDataWithLaunchYear}/>
                        <SucessLaunchFilter  launchSucc={getDataForLaunchSuccess}/>
                        <SucessLandingFilter landSucc={getDataForLandSuccess} />

                    </div>
                    <div className="right-container">
                        <WidgetContainer  rocketDetails={rocketDetails}/>
                    </div>
                </div>
            <Footer />
        </div>
    }else {
        return <LoadingIndicator promiseInProgress={loading} />

    }
}

export default App;
