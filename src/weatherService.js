const API_KEY = "6514c64dd792e65d3d2bdfddd9e5fef5";

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}02d@2x.png`

const getFormattedWeatherData = async (city, units = "metric") => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;


    //data fetching method
    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    //object destructring(we get weather and main from database properties )
    const { weather,
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity },
        wind: { speed },
        sys: { country },
        name,
    } = data;

    const { description, icon } = weather[0];
    return { description, iconURL: makeIconURL(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name };
};


export default getFormattedWeatherData;