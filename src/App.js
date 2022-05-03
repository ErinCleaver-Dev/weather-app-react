import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import CurrentWeather from './components/currentWeather/CurrentWeather';
import React, {createContext, useState} from "react"


export const WeatherContext = React.createContext()

function App() {

  const [weather, setWeather] = useState('');

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      <div className="container" >
        <Navbar />
        <div class="sub-container"> 
          <CurrentWeather />

        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
