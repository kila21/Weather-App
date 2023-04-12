
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import './weatherPageContent.scss'


const WeatherPageContent = () => {
    const selector = useAppSelector(state => state.weather)
    const date = new Date()

    useEffect(() => {
    },[selector])
    return (
        <div className='weatherPageContent-container'>
            <div className='weatherPageContent-container_temp'>
                <h1>{selector.temperature?.toFixed(2)}</h1>
                <span>C</span>
            </div>

            <p className='weatherPageContent-container_date'>
                <span>{date.getDate()}th </span>  {date.toLocaleString('default', {month: 'short'})}
            </p>
            
            <p className='weatherPageContent-container_time'>
                <span>{date.toLocaleString('default', {weekday: 'long'})} </span>
                  {date.toLocaleString('default', {hour: '2-digit'})}:{date.toLocaleString('default', {minute: '2-digit'})} PM
            </p>
        </div>
    )
}

export default WeatherPageContent;