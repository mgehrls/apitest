import Audio from '../components/Audio'
import Time from '../components/Time'
import Weather from '../components/Weather'

const backgroundOptions = ["./hexspinner.gif", "./rain2.gif", "./cityskyline.gif"]

const background = backgroundOptions[1]

export default async function Home() {

  return (
    <div style={{position:"relative", display:"grid", placeContent:"center", height:"100vh", width:"100vw", backgroundImage:`url(${background})`, backgroundSize:'cover'}}>
      <Time />
      <Weather/>
      <Audio />
    </div>
  )
}
