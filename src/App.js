import logo from './logo.svg';
import './App.css';
import WeatherApp from './components/weatherApp/WeatherApp'
import React, {createContext, useState} from "react"


export const WeatherContext = createContext()
export const ConvertTempContext = createContext()
function App() {

  const [weather, setWeather] = useState('');
  const [convertTemp, setConvertTemp] = useState(false);

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
    <ConvertTempContext.Provider value={[convertTemp, setConvertTemp]}>
      <WeatherApp/>
    </ConvertTempContext.Provider>
    </WeatherContext.Provider>
  );
}

export default App;
