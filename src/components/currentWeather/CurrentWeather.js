import React, {useContext} from 'react'
import { WeatherContext } from '../../App'

const CurrentWeather = () => {

  const [weather, setWeather] = useContext(WeatherContext)

  return (
    <div className="card mt-3">
    <div clclassNameass="row">
        <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="card m-4 p-2 weather_icons_background">
                <img className="weather_icons current_image" src={weather.main.weather.icon}/>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="d-flex flex-column m-4">
                <h2>
                    <span id="current_temp">17</span>°<a href="#" id="convert">C</a>
                </h2>
                <p>Humidity: <span>71</span>%</p>
                <p>Wind: <span>15</span> mph</p>
                <p>Sunny/Cloudy</p>
            </div>
        </div>
    </div>
    </div>

  )
}

export default CurrentWeather