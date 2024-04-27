import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";
import humidity_icon from "./Assets/humidity.png"
import search_icon from "./Assets/search.png";
import wind_icon from "./Assets/wind.png";

function App() {
  return (
    <>
   
    <div className="container">
    <div className="topbar">
      <div className="topsearch">
      <input type="text" className="search_bar" name="" id="" placeholder='search' />
      <div className="search_box">
      <img src={search_icon} className='search_image' alt="" />
      </div>
      </div>
      <img src={clear_icon} className='clear_img' alt="" />

      <div className="weather_temp">20ºC</div>
      <div className="weather_location">Kathmandu</div>

      <div className="data_container">
        <div className="element">
          <img src={humidity_icon} className='icon' alt="" />
          <div className="element_text">
          <p>64%</p>
    <p>Humidity</p>
    </div>
        </div>

        <div className="element">
          <img src={wind_icon} className='icon' alt="" />
          <div className="element_text">
          <p>15 km/hr</p>
    <p>Wind Speed</p>
        </div>
        </div>
      </div>
    </div>

    </div>
   
    </>
  )
}

export default App
