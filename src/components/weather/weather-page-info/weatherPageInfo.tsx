
import './weatherPageInfo.scss'

import hum from '../../../images/hum.svg'
import rain from '../../../images/rain.svg'
import wind from '../../../images/wind.svg'
import { useAppSelector } from '../../../store/hooks'

const WeatherPageInfo = () => {
    const selector = useAppSelector(state=>state.weather)

    const getContent = (imgURl: string, text: string, info: number | null) => {
        const container = (
            <div className='weatherPageInfo-container_content'>
                <img src={imgURl} alt={text}/>
                <p>{text}</p>
                {info ? <p>{info}{text === 'Wind' ? 'KM/H' : '%'}</p> : ''}
            </div>
        )
        return container;
    }
    
    return (
        <div className='weatherPageInfo-container'>
            {getContent(wind, 'Wind', selector.wind) }
            {getContent(hum, 'Hum', selector.humidity) }
            {getContent(rain, 'Rain', selector.rain) }
        </div>
    )
}

export default WeatherPageInfo;