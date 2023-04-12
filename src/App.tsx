
import axios  from 'axios';
import { AxiosResponse } from 'axios'

import { getCityCoordinates, getCityResponseApi } from '../process.env'
import { useEffect } from 'react';
 
import './App.scss'
import WeatherPage from './components/weather/weatherPage';
import SearchPage from './components/search/searchPage';

function App() {
  let coordinateLat = 0;
  let coordinateLon = 0;

  // useEffect(() => {
  //   axios.get(getCityCoordinates('Rustavi'))
  //   .then((res: AxiosResponse<any, coordinateResponse[]>) => {
  //     console.log(res.data)
  //     coordinateLat = res.data[0]?.lat
  //     coordinateLon = res.data[0]?.lon 

  //     setTimeout(() => {
  //       axios.get(getCityResponseApi(coordinateLat, coordinateLon)).then(res => {
  //         console.log(res)
  //       })
  //     }, 5000)
  //   })

  // }, [])
  


  return (
    <div className='page'>
      <WeatherPage />
      <SearchPage />
    </div>
  )
}

export default App
