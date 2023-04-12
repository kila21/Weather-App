import { createSlice } from "@reduxjs/toolkit";
import { weatherSliceState } from "../types/weatherSliceState.type";


const  initialState: weatherSliceState = {
    temperature: null,
    wind: null,
    rain: null,
    humidity: null
}


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeather: (state,action) => {
            console.log(action)
            state.humidity = action.payload.humidity,
            state.rain = action.payload.rain,
            state.wind = action.payload.wind,
            state.temperature = action.payload.temperature
        }
    }
})

export const { getWeather } = weatherSlice.actions;

export default weatherSlice.reducer;