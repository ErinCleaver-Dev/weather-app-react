import React, {useState, useRef, useContext} from 'react'
import "./Navbar.css"
import weatherData from '../../data/weather.json'
import { WeatherContext } from '../../App'

const Navbar = () => {
  
  const [city, setCity] = useState("City, State")
  const [error, setError] = useState(false)
  const [weather, setWeather] = useContext(WeatherContext)

  setWeather(weatherData)
  console.log(weather)
  let searchRef = useRef();

  const searchForCity = (e) => {
      e.preventDefault()
      // Sets the value for city to the search value
      console.log(searchRef.current.value)

      setCity()
      if(searchRef.current.value == "") {
          setCity("City, State")
          setError(true)
      } else {
        setCity(searchRef.current.value)
        console.log("else")
        setError(false)
      }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="./index.html" id="location">
                {city}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="nav-components">
                    <form id='search_form'>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" defaultValue="City, State" ref={searchRef}  aria-label="Search" id="search"/>
                            <button class="btn btn-lg btn-outline-light  me-2" onClick={searchForCity} type="submit" id="search_button">Search</button>
                            {error ? (<p id="error_message">Please enter a city name</p>) : (<></>)}
                        </div>
                    </form>
                    <button className="btn btn-lg btn-outline-light current-location" type="button">Current Location</button>
                </div>    
            </div>
        </div>
    </nav>
  )
}

export default Navbar