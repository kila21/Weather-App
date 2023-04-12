import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


import App from './App'
import './index.scss'
import weatherReducer from './store/weatherSlice'


const store = configureStore({
  reducer: {
      weather: weatherReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <App /> 
    </Provider>
  </React.StrictMode>,
)
