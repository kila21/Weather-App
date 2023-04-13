
import './searchPage.scss'
import location from '../../images/location.svg'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useEffect, useState } from 'react'
import { getWeatherWithCity } from '../../store/weatherThunk'


const SearchPage =  () => {
    const selector = useAppSelector(state => state.weather)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')


    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(()=> {
        const timer = setTimeout(()=> {
            if(value) {
                dispatch(getWeatherWithCity(value))
            }
        }, 2000)

        return () => clearTimeout(timer)
    }, [value])

    return (
        <div className='searchPage-container'>
            <div className='searchPage-container-search'>
                <img src={location} alt='location'/>
                <input type="text" placeholder='Rustavi' onChange={inputHandler}/>
            </div>

            <div className='searchPage-container-info'>
                <div className='searchPage-container-info_content'>
                    <h4>Humidity</h4>
                    {selector.humidity ? <p>{selector.humidity} %</p> : ''}
                </div>

                {selector.rain ?  <div className='searchPage-container-info_content'>
                    <h4>Chance of Rain</h4>
                    {selector.rain ? <p>{selector.rain} %</p> : ''}
                </div> : ''}

               <div className='searchPage-container-info_content'>
                    <h4>Air Quality</h4>
                    <p>3/10</p>
                </div>

                <div className='searchPage-container-info_content'>
                    <h4>Wind Speed</h4>
                    {selector.wind ? <p>{selector.wind} km/h</p> : ''}
                </div>
            </div>
        </div>
    )
}

export default SearchPage;