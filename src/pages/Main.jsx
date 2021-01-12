import React, { useState, useEffect} from 'react';
import styles from './styles.module.scss';
import {WeatherData} from '../components/WeatherData/WeatherData'
import { Landscape } from '../components/Landscape/Landscape';
import {FetchWeatherData} from '../api/openweather';
import { createClient } from 'pexels';


export const Main = () => {
    const [city, setCity] = useState('Ташкент');
    const [imgUrl, setBackground] = useState('https://wallpaperaccess.com/full/1093687.png')
    const [weather, setWeather] = useState(null);
    const [photo,setPhoto] = useState(null);
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(e.currentTarget.city)
        setCity(e.currentTarget.city.value)
    }

    useEffect(() => {
        if (city) {
            const client = createClient('563492ad6f91700001000001e1efacc9129f40259a028a356019f245');
            
            client.photos.search({ query: city, orientation: 'landscape','locale': 'ru-RU' })
                .then(arr => {
                    let index = null;
                    
                    if (arr.photos?.length) {
                        
                        index = Math.floor(Math.random() * arr.photos.length);
                        
                        setPhoto(arr.photos[index])
                        setBackground(arr.photos[index].src.large2x);
                    }
                
                });
                
            FetchWeatherData(city)
                .then(setWeather)
            
                
        }
    }, [city])

    const background = {
        backgroundImage : `url(${imgUrl})`,
    }

return (
        <div className={styles.mainContainer} style={background}>
                { weather && <Landscape weather={weather} photo={photo}/> }
            <div className={styles.information}>
                <form onSubmit={handleFormSubmit} className={styles.inputSearch}>
                        <input 
                            placeholder="Другой город.." 
                            type="text" 
                            name="city"
                        />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                { weather && <WeatherData weather={weather}/>}
                
             </div>
        </div>
   )
}