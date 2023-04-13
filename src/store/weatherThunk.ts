import axios, { AxiosResponse } from "axios";

import { getCityCoordinates, getCityResponseApi } from "../../process.env";
import { getWeather } from "./weatherSlice";
import { weatherSliceState } from "../types/weatherSliceState.type";


export const getWeatherWithCity = (city: string) => {
    return async (dispatch: any) => {
        await axios.get(getCityCoordinates(city))
        .then(async (res: AxiosResponse<any, coordinateResponse[]>) => {
            const lat = res.data[0]?.lat
            const lon = res.data[0]?.lat

            await axios.get(getCityResponseApi(lat, lon))
            .then(res => {
                console.log(res)
                const data: weatherSliceState = {
                    temperature: res.data.main?.temp-273.15,
                    rain: res.data.rain?.['1h'],
                    humidity: res.data.main?.humidity,
                    wind: res.data.wind?.speed
                }
                
                return dispatch(getWeather(data))
            })
        })
        .catch(res => {
            // some logic
            alert('Sorry, Smth went Wrong, Try Later or Refresh Page')
            return res.data
        })

    }
}


export const getWeatherWithCoords = (lat: number, lon: number) => {
    return async (dispatch: any) => {
        await axios.get(getCityResponseApi(lat, lon))
        .then(res => {
            const data: weatherSliceState = {
                temperature: res.data.main?.temp-273.15,
                rain: res.data.rain?.['1h'],
                humidity: res.data.main?.humidity,
                wind: res.data.wind?.speed
            }

            return dispatch(getWeather(data))
        })
        .catch(err => {
            alert('Sorry, Smth went Wrong, Try Later or Refresh Page')
            return err.data
        })
    }
}