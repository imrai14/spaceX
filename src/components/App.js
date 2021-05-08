import getSpaceXLauch from '../utils/HttpData'
import { useEffect } from 'react';
import WidgetContainer from './WidgetContainer';
import Header from './Header';
import Footer from './Footer';
import Filter from './Filter';
import '../styles/App.css';

const App = () => {

    useEffect(() => {
        console.log(getSpaceXLauch('limit=100'))
    }, [])

    return <div>
            <Header />
                <div className="main-container">
                    <div className="left-container">
                        <Filter />
                    </div>
                    <div className="right-container">
                        <WidgetContainer />
                    </div>
                </div>
            <Footer />
        </div>
}

export default App;