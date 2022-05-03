import React, {useContext} from 'react'
import Navbar from '../navbar/Navbar'
import CurrentWeather from '../currentWeather/CurrentWeather';
import Forecast from '../forecast/Forecast';
import Footer from '../footer/Footer';
import { WeatherContext } from '../../App'
import './WeatherApp.css'


const WeatherApp = () => {
  const [weather, setWeather] = useContext(WeatherContext)

  return (
    <div className="container">
        <Navbar />
        {weather != '' ? (
        <div className="sub-container"> 
          <CurrentWeather />
          <Forecast />
        </div>
        ) : <h2>Loading Weather Data</h2>}
        <Footer/>
    </div>
  )
}

export default WeatherApp