import React from 'react';
import '../styles/weathercard.scss'; 
const WeatherCard = ({ weather }) => {
    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
    );
};

export default WeatherCard;

