import logo from './logo.svg';
import './App.css';
import WeatherApp from './components/weatherApp/WeatherApp'
import React, {createContext, useState} from "react"


export const WeatherContext = React.createContext()

function App() {

  const [weather, setWeather] = useState('');

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      <WeatherApp/>
    </WeatherContext.Provider>
  );
}

export default App;
