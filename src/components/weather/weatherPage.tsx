


import WeatherPageContent from './weather-page-content/weatherPageContent';
import WeatherPageHeader from './weather-page-header/weatherPageHeader';
import WeatherPageInfo from './weather-page-info/weatherPageInfo';
import WeatherPageNextDays from './weather-page-next-days/weatherPageNextDays';

import './weatherPage.scss';

const WeatherPage = () => {

    return (
        <div className='weatherPage-container'>
            <WeatherPageHeader />
            <WeatherPageContent />
            <WeatherPageInfo />
            <div className='weatherPage-container-nextDays'>
                <WeatherPageNextDays day='Sun' temp='26'/> 
                <WeatherPageNextDays day='Mon' temp='20'/> 
                <WeatherPageNextDays day='Tue' temp='25'/> 
                <WeatherPageNextDays day='Fri' temp='10'/> 
            </div>
        </div>
    )
}

export default WeatherPage;