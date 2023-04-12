import axios, { AxiosResponse } from "axios";

import { getCityCoordinates, getCityResponseApi } from "../../process.env";
import { getWeather } from "./weatherSlice";
import { weatherSliceState } from "../types/weatherSliceState.type";


export const getLocFromApi = (city: string) => {
    return async (dispatch: any) => {
        await axios.get(getCityCoordinates(city))
        .then(async (res: AxiosResponse<any, coordinateResponse[]>) => {
            const lat = res.data[0]?.lat
            const lon = res.data[0]?.lat

            await axios.get(getCityResponseApi(lat, lon))
            .then(res => {
                console.log(res.data)
                const data: weatherSliceState = {
                    temperature: res.data.main?.temp-273.15,
                    rain: res.data.rain['1h'],
                    humidity: res.data.main?.humidity,
                    wind: res.data.wind?.speed
                }
                
                return dispatch(getWeather(data))
            })
        })
        .catch(res => {
            // some logic
            return res.data
        })

    }
}

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