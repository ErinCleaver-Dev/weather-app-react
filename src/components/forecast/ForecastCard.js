import React from 'react'

const ForecastCard = ({id, day, min, max, condition ,icon}) => {
  return (
    <div key="id" class="col-lg-2 col-md-3 col-sm-6 d-flex flex-column align-items-center weather_boarder daily">
        <p className="day">{day}</p>
            <p className="day_temp"><span class="min">{min}</span>°/<span className="max">{max}</span>°<span className="convert">C</span></p>
            <p className="day_condition">{condition}</p>
        <img className="card weather_icons_background weather_icons day_icon" src={icon}/>
    </div>

  )
}

export default ForecastCard