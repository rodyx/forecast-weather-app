import React from 'react';
import { getCityCurrentDate } from '../../api/getDate';
import styles from './styles.module.scss';


export const Landscape = ( {weather, photo} ) => {
    function lightIcon(iconCode) {
        let icon = iconCode.split('');
        return icon.slice(0,iconCode.length-1).join('') + 'd';
    }
    
    function letterCapitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
    const imgURL = `http://openweathermap.org/img/wn/${lightIcon( weather.weather[0].icon)}@2x.png`;
    
    return (
            <div className={styles.landscape}>
                <div className={styles.currentDataWrapper}>
                    <div className={styles.currentDegress}>{Math.round(weather.main.temp)}&deg;</div>
                    <div className={styles.currentLocation}>
                        <div className={styles.currentCity}>{weather.name}</div>
                        <div className={styles.currentDate}>{getCityCurrentDate(weather.timezone)}</div>
                    </div>
                    <div className={styles.currentWeather}>
                        <img src={imgURL} alt="icon" />
                        <span>{letterCapitalize(weather.weather[0].description)}</span>
                    </div>
                </div>
            </div>
    )
}