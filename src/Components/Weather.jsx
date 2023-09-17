// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'bf2e707337d31191b20bb7b470612bb9';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location.toLocaleLowerCase()}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setError('Weather data not found for the specified location.'
        );
        setWeatherData(null);
      }
    };

    // useEffect( () => {
    //     if (location) {
    //       fetchData();
    //     }
    //   }, [location]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Fetch weather data based on the user's input
    if (location) {
      fetchData();
      setEnteredLocation(location);
      setLocation('')
    }
  };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && !weatherData && <div>Error: {error}</div>}

      {weatherData && (
        <div>
          <h3>Current Weather in {enteredLocation}</h3>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {/* Add additional weather data properties as needed */}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;