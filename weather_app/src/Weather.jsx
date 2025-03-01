import { useState } from "react";
import "./App.css";
import axios from "axios"
const Weather = () => {
    
  const [city, setCity] = useState("");
  const [weather,setWeather]=useState('')
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather=async ()=>{
    try{
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88f17662af8c2784299f50007e5afee3`)
        setWeather(response)

    }
    catch(err){
        console.log(err.message)

    }
  }
  const handleClick=()=>{
    fetchWeather()

  }
  return (
    <div className="weather_container">
      <input
        type="text"
        placeholder="Enter Your City"
        value={city}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Get Weather</button>
      {weather && <div>
        <h2>{weather.data.name}</h2>
        <p>Temperature is {weather.data.main.temp}</p>
        <p>{weather.data.weather[0].description}</p>
        </div>} 
    </div>
  );
};

export default Weather;
