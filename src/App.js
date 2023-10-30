import hotBg from "./assets/sunny.jpg";
import coldBg from "./assets/tree-2916763_1280.jpg";
import Description from "./components/Description.jsx";
import { useEffect, useState } from "react"
import getFormattedWeatherData from "./weatherService";


function App() {


  //FOR entering city name we use hooks
  const [city, setCity] = useState('paris');
  //hook for units
  const [units, setUnits] = useState("metric");
  //again use hook(useState)
  const [weather, setWeather] = useState(null);
  //setting background dynamic
  const [bg, setBg] = useState(hotBg);



  //will use hooks(useEffect)
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data)

      //Dynamic background
      const threshold = units === 'metric' ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg)

    };

    fetchWeatherData();
  }, [units, city]);


  //function for units where we can change from °C or °F
  const handleUnitsClick = (e) => {

    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    console.log(currentUnit)
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");

  }
  //function for entering city

  const enterKeyPressed = (e) => {

    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }

  }



  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>

      <div className="overlay">
        {
          weather && (<div className="container">
            <div className="section section_inputs">
              <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter city..."></input>
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>
            <div className="section section_temperature">
              <div className="icon">
                <h3>{`${weather.name},${weather.country}`}</h3>
                <img
                  src="https://openweathermap.org/img/wn/02d@2x.png"
                  alt="weatheIcon">

                </img>
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()}`}
                  °{`${units === "metric" ? "C" : "F"}`}</h1>
              </div>
            </div>
            {/* botton description */}
            <Description weather={weather} units={units} />
          </div>)
        }

      </div>
    </div>
  );



}
export default App;
