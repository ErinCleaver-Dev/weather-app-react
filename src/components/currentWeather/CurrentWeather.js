import React, {useContext} from 'react'
import './CurrentWeather.css'
import { WeatherContext, ConvertTempContext} from '../../App'
import { UpdateDate } from '../utilites/time'
import { converToFerinhit } from '../utilites/convertTemp'


const CurrentWeather = () => {

  const [weather, setWeather] = useContext(WeatherContext)
  const [convertTemp, setConvertTemp] = useContext(ConvertTempContext)

  const onClickConvertTemp = (e) => {
    e.preventDefault()
    if(convertTemp) {
        setConvertTemp(false);
    } else {
        setConvertTemp(true);
    }
  }
  return (
    <div className="card mt-3">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="card m-4 p-2 weather_icons_background">
                    <img className="weather_icons current_image" src={weather.main.weather.icon}/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="d-flex flex-column m-4">
                    <h2>
                        <UpdateDate />
                        {convertTemp ? (
                        <>
                        <span id="current_temp">{converToFerinhit(weather.main.temp)}</span>
                        °
                        <a href="#" id="convert" onClick={onClickConvertTemp}>F</a>
                        </>
                        ) : (
                        <>
                        <span id="current_temp">{weather.main.temp}</span>°
                        <a href="#" id="convert" onClick={onClickConvertTemp}>C</a>
                        </>
                        )}
                    </h2>
                    <p>Humidity: <span>{weather.main.humidity}</span>%</p>
                    <p>Wind: <span>{weather.main.speed}</span> mph</p>
                    <p id="current_condition">{weather.main.weather.description}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default CurrentWeather