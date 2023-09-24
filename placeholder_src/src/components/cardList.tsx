import { LocationForecast } from "../types";
import WeatherCard from "./bigCard";
import { useState } from "react";

function CardList(): JSX.Element {

	// load in persistant data to the array
	const weatherData : Array<LocationForecast> = [{
		updated_at: "2023-09-20T11:39:59Z",
		location: {
			name: "Ware",
			country: "United Kingdom",
			admin: "East Hertfordshire District",
		},
		local_time: {
			year: 2023,
			month: 9,
			day: 16,
			hour: 10,
			minute: 39,
			dayOfWeek: "Saturday",
		},
		current_day: {
			current_air_temperature: 17.3,
			high_air_temperature: 20,
			low_air_temperature: 12,
			wind_from_direction: 202.5,
			wind_speed: 9.6,
			symbol_code: "rain",
		},

		timeseries: [
			{
				high_air_temperature: 20,
				low_air_temperature: 12,
				symbol_code: "heavyrain",
			},
			{
				high_air_temperature: 24,
				low_air_temperature: 15,
				symbol_code: "partlycloudy_day",
			},
			{
				high_air_temperature: 17,
				low_air_temperature: 8,
				symbol_code: "clearsky_day",
			},
		],
	},{
		updated_at: "2023-09-20T11:39:59Z",
		location: {
			name: "Elstree",
			country: "United Kingdom",
			admin: "East Hertfordshire District",
		},
		local_time: {
			year: 2023,
			month: 9,
			day: 16,
			hour: 10,
			minute: 39,
			dayOfWeek: "Saturday",
		},
		current_day: {
			current_air_temperature: 17.3,
			high_air_temperature: 20,
			low_air_temperature: 12,
			wind_from_direction: 202.5,
			wind_speed: 9.6,
			symbol_code: "rain",
		},

		timeseries: [
			{
				high_air_temperature: 20,
				low_air_temperature: 12,
				symbol_code: "heavyrain",
			},
			{
				high_air_temperature: 24,
				low_air_temperature: 15,
				symbol_code: "partlycloudy_day",
			},
			{
				high_air_temperature: 17,
				low_air_temperature: 8,
				symbol_code: "clearsky_day",
			},
		],
	}];
	
	const [ weatherCards , setWeatherCards ] = useState<Array<LocationForecast>>(weatherData);

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
