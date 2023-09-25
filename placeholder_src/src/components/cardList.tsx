import { LocationForecast, LocationName } from "../types";
import WeatherCard from "./bigCard";
import { useState } from "react";

function CardList(): JSX.Element {

	// load in persistant data to the array
	const weatherData : Array<LocationName> = [{name: "London"}, {name: "New York"}, {name: 'Tokyo'}];
	
	const [ weatherCards , setWeatherCards ] = useState<Array<LocationName>>(weatherData);

	const weatherCardCount = weatherCards.length;

	console.log("Weather cards: ", weatherCardCount);

	return (
			<main>
				<div className='cards__wrapper'>
					{weatherCards.map((weather, index) => (
						// weather location prop to input into weathercard
						<WeatherCard/>
						))};
				</div>
			</main>
	);
}

export default CardList;
