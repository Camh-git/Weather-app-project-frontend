import WeatherCard from "./bigCard";

function CardList(): JSX.Element {

	const weatherData : Array<WeatherCard> = [];
	
	const [ weatherCard , setWeatherCard ] = useState<Array<WeatherCard>>(weatherData);

	const weatherCardCount = weatherCard.length;

	console.log("Weather cards: ", weatherCardCount);

	return (
		<>
			<main>
				<div className='cards__wrapper'>
					{weatherCard.map((weather, index) => (
						<WeatherCard
						/>
						))};
				</div>
			</main>
		</>
	);
}

export default CardList;
