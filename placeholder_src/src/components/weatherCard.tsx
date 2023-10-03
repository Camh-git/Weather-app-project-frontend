import React from "react";

import deleteIcon from "../assets/app_icons/close_black_24dp.svg";
import findDayName from "../functions/convertDayNumToName";
import findWeatherIcon from "../functions/findWeatherIcon";
import styles from "./weatherCard.module.css";
import { useState, useEffect } from "react";
import setBackgroundColour from "../functions/getBackgroundColour";
import setTextColour from "../functions/getTextColour";

type Location = {
  Location: string;
};
//needs name, country, logo, temp, time, forecast
const WeatherCard: React.FC<Location> = (props: Location) => {
  function deleteCard() {} //placeholder

  //State used by the card
  const [city, setLocation] = useState({ name: null, country: null });
  const [weather, setWeather] = useState({ icon: null, temperature: null });
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [foreCasts, setForeCasts] = useState([
    {
      time: 0,
      high_air_temperature: 0,
      low_air_temperature: 0,
      symbol_code: "",
    },
    {
      time: 0,
      high_air_temperature: 0,
      low_air_temperature: 0,
      symbol_code: "",
    },
    {
      time: 0,
      high_air_temperature: 0,
      low_air_temperature: 0,
      symbol_code: "",
    },
  ]);

  //useeffect to get the api data
  useEffect(() => {
    const fetchForecast = async () => {
      const result = await fetch(
        `http://localhost:3000/weather/?cityName=${props.Location}`
      );
      const data = await result.json();
      //console.log(data);
      setLocation({
        name: data.geoLocation.name,
        country: data.geoLocation.country,
      });
      setWeather({
        icon: data.weatherInformation.current_day.symbol_code,
        temperature:
          data.weatherInformation.current_day.current_air_temperature,
      });
      setTime({
        hours: data.localTime.hour,
        minutes: data.localTime.minute,
        seconds: data.localTime.seconds,
      });
      setForeCasts([
        data.weatherInformation.timeseries[0],
        data.weatherInformation.timeseries[1],
        data.weatherInformation.timeseries[2],
      ]);
    };
    fetchForecast();
  }, []);

  const day = new Date();

  return (
    <div
      className={styles.bigWeatherCard}
      style={{
        backgroundColor: setBackgroundColour(time.hours),
        color: setTextColour(time.hours),
      }}
    >
      <span className={styles.deleteCard}>
        <img src={deleteIcon} alt="Delete card" onClick={deleteCard} />
      </span>

      <section className={styles.bigCard__LocationDisplay}>
        <h2>{city.name}</h2>
        <h2 className={styles.bigCard__LocationDisplaySubtitle}>
          {city.country}
        </h2>
      </section>

      <section className={styles.bigCard__WeatherDisplay}>
        <img
          className={styles.bigCard__icon}
          src={findWeatherIcon(weather.icon)}
          alt="weather icon"
        />
        <h3 id="bigCard__temperature">{weather.temperature}°</h3>
      </section>
      <h3 id="bigCard__time">
        {time.hours <= 9 && 0}
        {time.hours}:{time.minutes <= 9 && 0}
        {time.minutes}
      </h3>
      <section className={styles.forecast}>
        <table>
          <tbody>
            {foreCasts.map((index) => {
              return (
                <tr>
                  <td>
                    {findDayName(day.getDay() + foreCasts.indexOf(index) + 1)}
                  </td>
                  <td>
                    {index.low_air_temperature}° - {index.high_air_temperature}°
                  </td>
                  <td>
                    <img
                      className={styles.forecast__img}
                      src={findWeatherIcon(index.symbol_code)}
                      alt="Prediction"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default WeatherCard;
