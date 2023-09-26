import React from "react";

import deleteIcon from "../assets/app_icons/close_black_24dp.svg";
import findDayName from "../functions/convertDayNumToName";
import findWeatherIcon from "../functions/findWeatherIcon";
import styles from "./bigCard.module.css";
import { useState, useEffect } from "react";
import { MockForecast } from "../types";
import { LocationDetails, LocationForecast } from "../types";

type Location = {
  Location: string;
};
type weatherForecast = {
  geoLocation: LocationDetails;
  weatherInformation: LocationForecast;
};
//needs name, country, logo, temp, time, forecast
const WeatherCard: React.FC<Location> = (props: Location) => {
  function deleteCard() {} //placeholder

  //Placeholder pile of state, will refactor into more sensible objects
  const forecast = MockForecast;
  const [name, setName] = useState("Loading...");
  const [country, setCountry] = useState("Loading...");
  const [icon, setIcon] = useState("Loading...");
  const [temp, setTemp] = useState("Loading...");
  const [time, setTime] = useState("Loading...");
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
      console.log(data);
      setName(data.geoLocation.name);
      setCountry(data.geoLocation.country);
      setIcon(data.weatherInformation.current_day.symbol_code); //TODO: find where the current day symbol is
      setTemp(data.weatherInformation.current_day.current_air_temperature);
      setTime(data.localTime.hour + ":" + data.localTime.minute); //TODO: find actual time, only seems to be days
      setForecast1(data.weatherInformation.timeseries[0]);
      setForecast2(data.weatherInformation.timeseries[1]);
      setForecast3(data.weatherInformation.timeseries[2]);
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
        <h2>{name}</h2>
        <h2 className={styles.bigCard__LocationDisplaySubtitle}>{country}</h2>
      </section>

      <section className={styles.bigCard__WeatherDisplay}>
        <img
          className={styles.bigCard__icon}
          src={findWeatherIcon(forecast[0].current_day.symbol_code)}
          alt="weather icon"
        />
        <h3 id="bigCard__temperature">{temp}°</h3>
      </section>
      <h3 id="bigCard__time">{time}</h3>
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
