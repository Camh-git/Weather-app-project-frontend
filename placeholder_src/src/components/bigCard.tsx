import deleteIcon from "../assets/icons/close_black_24dp.svg";

const WeatherCard: React.FC = () => {
  function deleteCard() {}
  return (
    <div className="bigWeatherCard">
      <span className="deleteCard">
        <img src={deleteIcon} alt="Delete card" onClick={deleteCard} />
      </span>

      <h2>city</h2>

      <section className="bigCard__currentDisplay">
        <img className="bigCard__icon" src={""} alt="weather icon" />
        <h3 className="bigCard__temperature">Temperature°</h3>
      </section>

      <h3 className="bigCard__time">time</h3>

      <section className="forecast">
        <table>
          <tbody>
            <tr>
              <td>Day 1</td>
              <td>Temp range</td>
              <td>
                <img src={""} alt="Weather prediction" />
              </td>
            </tr>
            <tr>
              <td>Day 2</td>
              <td>Temp range</td>
              <td>
                <img src={""} alt="Weather prediction" />
              </td>
            </tr>
            <tr>
              <td>Day 3</td>
              <td>Temp range</td>
              <td>
                <img src={""} alt="Weather prediction" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default WeatherCard;
