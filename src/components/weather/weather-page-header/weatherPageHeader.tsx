


import sunRainCloud from '../../../images/sun-rain-cloud.svg'
import './weatherPageHeader.scss'


const WeatherPageHeader = () => {
    return (
        <div className='weatherPageHeader-container'>
            <img src={sunRainCloud} alt='sun-Rain-Cloud' />
            <div className='weatherPageHeader-container_image__temp'>
                <div className='temp-c'>C</div>
                <div className='temp-f'>F</div>
            </div>
        </div>
    )
}

export default WeatherPageHeader;