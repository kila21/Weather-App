
import './weatherPageNextDays.scss'
import cloud from '../../../images/WeatherIcon-cloud.svg'


const WeatherPageNextDays = (props: {day: string, temp: string}) => {
    return (
        <div className='weatherPageNextDays-container'>
            <h3>{props.temp}<span> C</span></h3>
            <img src={cloud} alt='cloud'/>
            <p>{props.day}</p>
        </div>
    )
}

export default WeatherPageNextDays;