import WeatherCard from "./weatherCard";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./weatherCard.module.css";
import AddCard from "./addCard";

function CardList(): JSX.Element {
  // load in persistant data to the array
  const LocationName: Array<string> = [
    "London",
    "New York",
    "Tokyo",
    "Farnborough",
    "Riga",
    "criciúma",
    "Colombo",
  ];

  const [weatherCardLocations] = useState<Array<string>>(LocationName);

  //const LocationsCount = weatherCardLocations.length;

  //console.log("Weather cards: ", LocationsCount);

  return (
    <main>
      <div className={styles.cards__wrapper}>
        {weatherCardLocations.map((weatherCardLocation) => {
          // console.log(weatherCard);

          return (
            // weather location prop to input into weathercard

            <WeatherCard key={uuidv4()} Location={weatherCardLocation} />
          );
        })}
        <AddCard />
      </div>
    </main>
  );
}

export default CardList;
