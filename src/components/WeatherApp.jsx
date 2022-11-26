import React,{useState} from 'react'
import DisplayNumber from './layout/DisplayNumber'
import WeatherForm from './WeatherForm'

const WeatherApp = () => {
  const [temperature,setTemperature] = useState(null)

  function queryTemperature(e){
    e.preventDefault()
    const city = e.target.city.value;
    const apikey = 'b8e76533d49342768241dd6ce39ca8e7'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    fetch(url)
      .then(response=>response.json())
      .then(weather => setTemperature(weather.main.temp))


  }
  console.log(temperature)
  return (
    <div>
      <h2>Weather App</h2>
        <form onSubmit={queryTemperature}>
        <input 
          type="text" 
          placeholder='digite la ciudad'
          id="city"
          />
        <button className='submit'>Enviar</button>
    </form>

   {/*  operador ternario */}
    {temperature!==null 
    ?<div><h2>{temperature}</h2></div>
    :null
    }
    {/* operador de corto circuito */}
    {temperature!==null && <div><h2>{temperature}</h2></div>}
    </div>
  )
}

export default WeatherApp