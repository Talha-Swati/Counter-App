import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import '../styles/weather.scss';
import wallpaper from '../assets/wallpaper.jpg'; 

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        const apiKey = 'e93b2baf4ce042151bf2ef362d3da407';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
    };

    return (
        <div className="weather-container" style={{ backgroundImage: `url(${wallpaper})` }}>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city" 
                className="city-input"
            />
            <button onClick={fetchWeather} className="fetch-button">Get Weather</button>
            {weatherData && <WeatherCard weather={weatherData} />}
        </div>
    );
};

export default Weather;
