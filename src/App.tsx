
import { useEffect } from 'react';
 
import './App.scss'
import WeatherPage from './components/weather/weatherPage';
import SearchPage from './components/search/searchPage';
import { getWeatherWithCity, getWeatherWithCoords } from './store/weatherThunk';
import { useAppDispatch } from './store/hooks';


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res=>{
        dispatch(getWeatherWithCoords(res.coords.latitude, res.coords.longitude))
      })
    } else {
      dispatch(getWeatherWithCity('Rustavi'))
    }
  }, [])


  return (
    <div className='page'>
      <WeatherPage />
      <SearchPage />
    </div>
  )
}

export default App
