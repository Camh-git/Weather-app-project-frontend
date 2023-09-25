import WeatherCard from "./bigCard";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function CardList(): JSX.Element {

	// load in persistant data to the array
	const LocationName : Array<string> = ["London", "New York", "Tokyo"];
	
	const [ weatherCardLocations , setWeatherCards ] = useState<Array<string>>(LocationName);

	//const LocationsCount = weatherCardLocations.length;

	//console.log("Weather cards: ", LocationsCount);

	return (
			<main>
				<div className='cards__wrapper'>
					{weatherCardLocations.map((weatherCardLocation) => {
						// console.log(weatherCard);
					
					return (
						// weather location prop to input into weathercard
						<WeatherCard key={uuidv4()} Location={weatherCardLocation}/>
						);
						
					})};
				</div>
			</main>
	);
}

export default CardList;
