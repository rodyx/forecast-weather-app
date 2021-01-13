import React from 'react';
import styles from './styles.module.scss';

export const WeatherData = ({ weather }) => {
    return (
        <div className={styles.weatherDataContainer}>
            <div className={styles.citiesSearch}>
                <div>Москва</div>
                <div>Милан</div>
                <div>Париж</div>
                <div>Токио</div>
            </div>
            <div className={styles.weatherDataDetails}>
                <h2>Детали погоды</h2>
                <div><span>Облачность</span><span>{weather.clouds.all} %</span></div>
                <div><span>Влажность</span><span>{weather.main.humidity} %</span></div>
                <div><span>Скорость ветра</span><span>{weather.wind.speed} км/ч</span></div>
                <div><span>Давление</span><span>{Math.round(weather.main.pressure / 1.33)} мм</span></div>
            </div>
        </div>
    )
}
