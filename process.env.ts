
const getApiKey = () => {
    return 'a7ad3e07634820d796acea406f9b4275'
}

//limit chan be change
export const getCityCoordinates = (city: string): string => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${getApiKey()}`
    
}

export const getCityResponseApi = (lat: number, lon: number): string => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${getApiKey()}`
}