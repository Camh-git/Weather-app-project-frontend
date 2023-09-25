import React from "react";

import deleteIcon from "../assets/app_icons/close_black_24dp.svg";
import findDayName from "../functions/convertDayNumToName";
import findWeatherIcon from "../functions/findWeatherIcon";
import styles from "./bigCard.module.css";
import { useState, useEffect } from "react";
import { MockForecast } from "../types";

type Location = {
  Location: string;
};

const WeatherCard: React.FC<Location> = (props: Location) => {
  function deleteCard() {} //placeholder

  //useeffect to get the api data
  const forecast = MockForecast;
  //const[forecast,setForecast] = useState("")

  useEffect(() => {
    const fetchForecast = async () => {
      const result = await fetch(
        "http://localhost:3000/weather/?cityName=London"
      );
      //console.log(result);
      result.text().then((json) => {
        //setForecast(json.body);
        console.log(json);
      });
    };
    fetchForecast();
  }, []);

  const day = new Date();

  return (
    <div className={styles.bigWeatherCard}>
      <span className={styles.deleteCard}>
        <img src={deleteIcon} alt="Delete card" onClick={deleteCard} />
      </span>
      <section className={styles.bigCard__LocationDisplay}>
        <h2>{forecast[0].location.name}</h2>
        <h2 className={styles.bigCard__LocationDisplaySubtitle}>
          {forecast[0].location.country}
        </h2>
      </section>
      <section className={styles.bigCard__WeatherDisplay}>
        <img
          className={styles.bigCard__icon}
          src={findWeatherIcon(forecast[0].current_day.symbol_code)}
          alt="weather icon"
        />

        <h3 id="bigCard__temperature">
          {forecast[0].current_day.current_air_temperature}°
        </h3>
      </section>
      <h3 id="bigCard__time">
        {forecast[0].local_time.hour}:{forecast[0].local_time.minute}
      </h3>
      <section className={styles.forecast}>
        <table>
          <tbody>
            <tr>
              <td>{findDayName(day.getDay() + 1)}</td>
              <td>
                {forecast[0].timeseries[0].low_air_temperature}° -{" "}
                {forecast[0].timeseries[0].high_air_temperature}°
              </td>
              <td>
                <img
                  className={styles.forecast__img}
                  src={findWeatherIcon(forecast[0].timeseries[0].symbol_code)}
                  alt="Prediction"
                />
              </td>
            </tr>
            <tr>
              <td>{findDayName(day.getDay() + 2)}</td>
              <td>
                {forecast[0].timeseries[1].low_air_temperature}° -{" "}
                {forecast[0].timeseries[1].high_air_temperature}°
              </td>
              <td>
                <img
                  className={styles.forecast__img}
                  src={findWeatherIcon(forecast[0].timeseries[1].symbol_code)}
                  alt="Prediction"
                />
              </td>
            </tr>
            <tr>
              <td>{findDayName(day.getDay() + 3)}</td>
              <td>
                {forecast[0].timeseries[2].low_air_temperature}° -{" "}
                {forecast[0].timeseries[2].high_air_temperature}°
              </td>
              <td>
                <img
                  className={styles.forecast__img}
                  src={findWeatherIcon(forecast[0].timeseries[2].symbol_code)}
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
