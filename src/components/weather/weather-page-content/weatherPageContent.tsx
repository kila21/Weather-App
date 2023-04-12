
import './weatherPageContent.scss'


const WeatherPageContent = () => {
    return (
        <div className='weatherPageContent-container'>
            <div className='weatherPageContent-container_temp'>
                <h1>26</h1>
                <span>C</span>
            </div>

            <p className='weatherPageContent-container_date'>
                <span>14th April</span>  MAr 22
            </p>
            
            <p className='weatherPageContent-container_time'>
                <span>Monday </span>  10:40 PM
            </p>
        </div>
    )
}

export default WeatherPageContent;