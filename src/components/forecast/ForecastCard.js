import React from 'react'

const ForecastCard = ({id, day, min, max, condition ,icon}) => {
  return (
    <div id="id" class="col-lg-2 col-md-3 col-sm-6 d-flex flex-column align-items-center weather_boarder daily">
        <p class="day">{day}</p>
            <p class="day_temp"><span class="min">{min}</span>°/<span class="max">{max}</span>°<span class="convert">C</span></p>
            <p class="day_condition">{condition}</p>
        <img class="card weather_icons_background weather_icons day_icon" src={icon}/>
    </div>

  )
}

export default ForecastCard