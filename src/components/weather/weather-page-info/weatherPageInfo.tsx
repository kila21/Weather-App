
import './weatherPageInfo.scss'

import hum from '../../../images/hum.svg'
import rain from '../../../images/rain.svg'
import wind from '../../../images/wind.svg'

const WeatherPageInfo = () => {

    const getContent = (imgURl: string, text: string, info: string) => {
        const container = (
            <div className='weatherPageInfo-container_content'>
                <img src={imgURl} alt={text}/>
                <p>{text}</p>
                <p>{info}</p>
            </div>
        )
        return container;
    }
    
    return (
        <div className='weatherPageInfo-container'>
            {getContent(wind, 'Wind', '10 Km/h') }
            {getContent(hum, 'Hum', '54 %') }
            {getContent(rain, 'Rain', '0.2 %') }
        </div>
    )
}

export default WeatherPageInfo;