import { WeatherData } from "../utils/types"

function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
    return fn as (arg: T) => R;
  }

const Weather = asyncComponent(async () =>{

    const fetchWeatherData = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=42.96&lon=-85.66&appid=e02944c0d1d98fbccd5ecb3d5676e167&units=imperial`)
        const data = await res.json()
        return data
      }
      const weatherData: WeatherData = await fetchWeatherData()


    return(
        <div style={{position:"absolute", bottom:"1rem", right:"1rem", backgroundColor:"rgba(0,0,0,.7)", padding:"1rem"}}>
        <div style={{display:"flex"}}>
          <img style={{margin:"0", padding:"0"}} className="weather-img" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" />
          <h1 style={{margin:"0", padding:"0"}} >{weatherData.main.temp.toFixed(0)}°F</h1>
        </div>
        <h3 style={{margin:"0", padding:"0"}}>{weatherData.name}</h3>
      </div>
    )
})

export default Weather