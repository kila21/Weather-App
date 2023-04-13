
import { useEffect } from 'react';
 
import './App.scss'
import WeatherPage from './components/weather/weatherPage';
import SearchPage from './components/search/searchPage';
import { getLocFromApi } from './store/weatherThunk';
import { useAppDispatch } from './store/hooks';


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLocFromApi('Rustavi'))
  }, [])


  return (
    <div className='page'>
      <WeatherPage />
      <SearchPage />
    </div>
  )
}

export default App
