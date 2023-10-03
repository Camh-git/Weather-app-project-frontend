import React from "react";

import deleteIcon from "../assets/app_icons/close_black_24dp.svg";
import findDayName from "../functions/convertDayNumToName";
import findWeatherIcon from "../functions/findWeatherIcon";
import styles from "./bigCard.module.css";
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
  const [city, setLocation] = useState({
    name: "Loading...",
    country: "Loading...",
  });
  const [weather, setWeather] = useState({
    icon: "Loading...",
    temperature: "0",
  });
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [forecast1, setForecast1] = useState({
    time: 0,
    high_air_temperature: 0,
    low_air_temperature: 0,
    symbol_code: "",
  });
  const [forecast2, setForecast2] = useState({
    time: 0,
    high_air_temperature: 0,
    low_air_temperature: 0,
    symbol_code: "",
  });
  const [forecast3, setForecast3] = useState({
    time: 0,
    high_air_temperature: 0,
    low_air_temperature: 0,
    symbol_code: "",
  });

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
      setForecast1(data.weatherInformation.timeseries[0]);
      setForecast2(data.weatherInformation.timeseries[1]);
      setForecast3(data.weatherInformation.timeseries[2]);
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
            <tr>
              <td>{findDayName(day.getDay() + 1)}</td>
              <td>
                {forecast1.low_air_temperature}° -{" "}
                {forecast1.high_air_temperature}°
              </td>
              <td>
                <img
                  className={styles.forecast__img}
                  src={findWeatherIcon(forecast1.symbol_code)}
                  alt="Prediction"
                />
              </td>
            </tr>
            <tr>
              <td>{findDayName(day.getDay() + 2)}</td>
              <td>
                {forecast2.low_air_temperature}° -{" "}
                {forecast2.high_air_temperature}°
              </td>
              <td>
                <img
                  className={styles.forecast__img}
                  src={findWeatherIcon(forecast2.symbol_code)}
                  alt="Prediction"
                />
              </td>
            </tr>
            <tr>
              <td>{findDayName(day.getDay() + 3)}</td>
              <td>
                {forecast3.low_air_temperature}° -{" "}
                {forecast3.high_air_temperature}°
              </td>
              <td>
                <img
                  className={styles.forecast__img}
                  src={findWeatherIcon(forecast3.symbol_code)}
                  alt="Prediction"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default WeatherCard;
