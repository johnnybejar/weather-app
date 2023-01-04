import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const grabDate = () => {
    const date = new Date();
    let time = date.getDate();
    console.log(time);
  }

  const API = {
    key: '9f5e8b054a638a95bb11203257eba88c',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

  const searchWeatherInfo = evt => {
    if (evt.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&units=imperial&appid=${API.key}`).then(
        res => res.json().then(
          result => {
            setWeather(result);
            setQuery('');
            console.log(result);
            console.log(result.main.temp)
          }
        )
      )
    }
  }

  return (
    <main>
      <input
      className='search-bar'
      type="text"
      placeholder='Search'
      onChange={e => setQuery(e.target.value)}
      value={query}
      onKeyUp={searchWeatherInfo}
      />
      {(weather.main) ? (
      <div className='weather'>
        <strong>{weather.name}</strong> <br></br> 
        <span className='temperature'>{Math.round(weather.main.temp)}&deg;F</span> <br></br> 
        Weather: <u>{weather.weather[0].main}</u> <br></br> 
        Wind: <u>{Math.round(weather.wind.speed)}mph</u> 
      </div>
      ) : ('')}
    </main>
  )
}

export default App;