import React from "react";

import deleteIcon from "../assets/app_icons/close_black_24dp.svg";
import findDayName from "../functions/convertDayNumToName";
import findWeatherIcon from "../functions/findWeatherIcon";
import styles from "./bigCard.module.css";
import { useState } from "react";

const WeatherCard: React.FC = () => {
  function deleteCard() { }

  const [timezoneHours, setTimeZoneHours] = useState(0);
  const [timezoneMinutes, setTimeZoneMinutes] = useState(0);
  const day = new Date(); //can probably be context

  return (
    <div className={styles.bigWeatherCard}>
      <span className="deleteCard">
        <img src={deleteIcon} alt="Delete card" onClick={deleteCard} />
      </span>
      <h2>city</h2>

      <section className="bigCard__currentDisplay">
        <img
          className={styles.bigCard__icon}
          src={findWeatherIcon("sleet")} //TODO: replace with api data
          alt="weather icon"
        />
        <h3 className="bigCard__temperature">Temperature°</h3>
      </section>

      <h3 className="bigCard__time">
        {day.getHours() + timezoneHours}:{day.getMinutes() + timezoneMinutes}
      </h3>

      <section className="forecast">
        <table>
          <tbody>
            <tr>
              <td>{findDayName(day.getDay() + 1)}</td>
              <td>Temp range</td>
              <td>
                <img src={""} alt="Prediction" />
              </td>
            </tr>
            <tr>
              <td>{findDayName(day.getDay() + 2)}</td>
              <td>Temp range</td>
              <td>
                <img src={""} alt="Prediction" />
              </td>
            </tr>
            <tr>
              <td>{findDayName(day.getDay() + 3)}</td>
              <td>Temp range</td>
              <td>
                <img src={""} alt="Prediction" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default WeatherCard;
