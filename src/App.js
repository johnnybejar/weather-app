import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

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
          }
        )
      )
    }
  }

  return (
    <div>
      <input
      type="text"
      placeholder='Search'
      onChange={e => setQuery(e.target.value)}
      value={query}
      onKeyUp={searchWeatherInfo}
      />
      <div
      className='current-weather'

      />
    </div>
  )
}

export default App;