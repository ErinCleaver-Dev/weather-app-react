import React, {useContext} from 'react'
import { WeatherContext } from '../../App'
import ForecastCard from './ForecastCard'
import './Forecast.css'

const Forecast = () => {
  const [weather, setWeather] = useContext(WeatherContext)

  console.log(weather.daily)
  return (
    <div class="card mt-3">
    <div class="row p-3 forcast_daily">

        {weather.daily.map((day) => (
            <ForecastCard 
                id = {day.dt}
                day={day.dt} 
                min = {day.temp.min} 
                max = {day.temp.max} 
                condition = {day.weather.main}
                icon = {day.weather.icon}
            />
        ))}
    </div>
    </div>
  )
}

export default Forecast