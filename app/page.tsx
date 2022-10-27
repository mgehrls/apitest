import { WeatherData } from '../utils/types'
import Audio from '../components/Audio'

const backgroundOptions = ["./hexspinner.gif", "./rain2.gif", "./cityskyline.gif"]

function getRandomBackground(){
    return backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)]
}
const background = getRandomBackground()


export default async function Home() {
  const time = new Date()
  const fetchWeatherData = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=42.96&lon=-85.66&appid=e02944c0d1d98fbccd5ecb3d5676e167&units=imperial`)
    const data = await res.json()
    return data
  }
  const weatherData: WeatherData = await fetchWeatherData()


  return (
    <div style={{position:"relative", display:"grid", placeContent:"center", height:"100vh", width:"100vw", backgroundImage:`url(${background})`, backgroundSize:'cover'}}>
      <h1 style={{fontSize:"80px", textAlign:"center", margin:"0", textShadow:"var(--dark-ts)", cursor:'default'}}>{time.toLocaleTimeString("en-us", {timeStyle:'short'})}</h1>
      <h3 style={{textAlign:"center", textShadow:"var(--dark-ts)", cursor:'default'}}>{time.toLocaleDateString()}</h3>
      <div style={{position:"absolute", bottom:"1rem", right:"1rem", backgroundColor:"rgba(0,0,0,.7)", padding:"1rem"}}>
        <div style={{display:"flex"}}>
          <img style={{margin:"0", padding:"0"}} className="weather-img" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" />
          <h1 style={{margin:"0", padding:"0"}} >{weatherData.main.temp.toFixed(0)}°F</h1>
        </div>
        <h3 style={{margin:"0", padding:"0"}}>{weatherData.name}</h3>
      </div>
      <Audio />
    </div>
  )
}
