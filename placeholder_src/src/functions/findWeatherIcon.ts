function findWeatherIcon(icon: string): string {
  //On a more advanced version maybe these images would be stored on the server and sent with the api call to save how much we send the user?
  switch (icon) {
    case "clearsky_day":
      return "../../src/assets/weather_icons/clearsky_day.svg";

    case "clearsky_night":
      return "../../src/assets/weather_icons/clearsky_night.svg";

    case "clearsky_polartwilight":
      return "../../src/assets/weather_icons/clearsky_polartwilight.svg";

    case "cloudy":
      return "../../src/assets/weather_icons/cloudy.svg";

    case "fair_day":
      return "../../src/assets/weather_icons/fair_day.svg";

    case "fair_night":
      return "../../src/assets/weather_icons/fair_night.svg";

    case "fair_polartwilight":
      return "../../src/assets/weather_icons/fair_polartwilight.svg";

    case "fog":
      return "../../src/assets/weather_icons/fog.svg";

    case "heavyrain":
      return "../../src/assets/weather_icons/heavyrain.svg";

    case "heavyrainandthunder":
      return "../../src/assets/weather_icons/heavyrainandthunder.svg";

    case "heavyrainshowers_day":
      return "../../src/assets/weather_icons/heavyrainshowers_day.svg";

    case "heavyrainshowers_night":
      return "../../src/assets/weather_icons/heavyrainshowers_night.svg";

    case "heavyrainshowers_polartwilight":
      return "../../src/assets/weather_icons/heavyrainshowers_polartwilight.svg";

    case "heavyrainshowersandthunder_day":
      return "../../src/assets/weather_icons/heavyrainshowersandthunder_day.svg";

    case "heavyrainshowersandthunder_night":
      return "../../src/assets/weather_icons/heavyrainshowersandthunder_night.svg";

    case "heavyrainshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/heavyrainshowersandthunder_polartwilight.svg";

    case "heavysleet":
      return "../../src/assets/weather_icons/heavysleet.svg";

    case "heavysleetandthunder":
      return "../../src/assets/weather_icons/heavysleetandthunder.svg";

    case "heavysleetshowers_day":
      return "../../src/assets/weather_icons/heavysleetshowers_day.svg";

    case "heavysleetshowers_night":
      return "../../src/assets/weather_icons/heavysleetshowers_night.svg";

    case "heavysleetshowers_polartwilight":
      return "../../src/assets/weather_icons/heavysleetshowers_polartwilight.svg";

    case "heavysleetshowersandthunder_day":
      return "../../src/assets/weather_icons/heavysleetshowersandthunder_day.svg";

    case "heavysleetshowersandthunder_night":
      return "../../src/assets/weather_icons/heavysleetshowersandthunder_night.svg";

    case "heavysleetshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/heavysleetshowersandthunder_polartwilight.svg";

    case "heavysnow":
      return "../../src/assets/weather_icons/heavysnow.svg";

    case "heavysnowandthunder":
      return "../../src/assets/weather_icons/heavysnowandthunder.svg";

    case "heavysnowshowers_day":
      return "../../src/assets/weather_icons/heavysnowshowers_day.svg";

    case "heavysnowshowers_night":
      return "../../src/assets/weather_icons/heavysnowshowers_night.svg";

    case "heavysnowshowers_polartwilight":
      return "../../src/assets/weather_icons/heavysnowshowers_polartwilight.svg";

    case "heavysnowshowersandthunder_day":
      return "../../src/assets/weather_icons/heavysnowshowersandthunder_day.svg";

    case "heavysnowshowersandthunder_night":
      return "../../src/assets/weather_icons/heavysnowshowersandthunder_night.svg";

    case "heavysnowshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/heavysnowshowersandthunder_polartwilight.svg";

    case "lightrain":
      return "../../src/assets/weather_icons/lightrain.svg";

    case "lightrainandthunder":
      return "../../src/assets/weather_icons/heavyrainshowersandthunder_polartwilight.svg";

    case "lightrainshowers_day":
      return "../../src/assets/weather_icons/lightrainshowers_day.svg";

    case "lightrainshowers_night":
      return "../../src/assets/weather_icons/lightrainshowers_night.svg";

    case "lightrainshowers_polartwilight":
      return "../../src/assets/weather_icons/lightrainshowers_polartwilight.svg";

    case "lightrainshowersandthunder_day":
      return "../../src/asets/weather_icons/lightrainshowersandthunder_day.svg";

    case "lightrainshowersandthunder_night":
      return "../../src/assets/weather_icons/lightrainshowersandthunder_night.svg";

    case "lightrainshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/lightrainshowersandthunder_polartwilight.svg";

    case "lightsleet":
      return "../../src/assets/weather_icons/lightsleet.svg";

    case "lightsleetandthunder":
      return "../../src/assets/weather_icons/lightsleetandthunder.svg";

    case "lightsleetshowers_day":
      return "../../src/assets/weather_icons/lightsleetshowers_day.svg";

    case "lightsleetshowers_night":
      return "../../src/assets/weather_icons/lightsleetshowers_night.svg";

    case "lightsleetshowers_polartwilight":
      return "../../src/assets/weather_icons/lightsleetshowers_polartwilight.svg";

    case "lightsnow":
      return "../../src/assets/weather_icons/lightsnow.svg";

    case "lightsnowandthunder":
      return "../../src/assets/weather_icons/lightsnowandthunder.svg";

    case "lightsnowshowers_day":
      return "../../src/assets/weather_icons/lightsnowshowers_day.svg";

    case "lightsnowshowers_night":
      return "../../src/assets/weather_icons/lightsnowshowers_night.svg";

    case "lightsnowshowers_polartwilight":
      return "../../src/assets/weather_icons/lightsnowshowers_polartwilight.svg";

    case "lightssleetshowersandthunder_day":
      return "../../src/assets/weather_icons/lightssleetshowersandthunder_day.svg";

    case "lightssleetshowersandthunder_night":
      return "../../src/assets/weather_icons/lightssleetshowersandthunder_night.svg";

    case "lightssleetshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/lightssleetshowersandthunder_polartwilight.svg";

    case "lightssnowshowersandthunder_day":
      return "../../src/assets/weather_icons/lightssnowshowersandthunder_day.svg";

    case "lightssnowshowersandthunder_night":
      return "../../src/assets/weather_icons/lightssnowshowersandthunder_night.svg";

    case "lightssnowshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/lightssnowshowersandthunder_polartwilight.svg";

    case "partlycloudy_day":
      return "../../src/assets/weather_icons/partlycloudy_day.svg";

    case "partlycloudy_night":
      return "../../src/assets/weather_icons/partlycloudy_night.svg";

    case "partlycloudy_polartwilight":
      return "../../src/assets/weather_icons/partlycloudy_polartwilight.svg";

    case "rain":
      return "../../src/assets/weather_icons/rain.svg";

    case "rainandthunder":
      return "../../src/assets/weather_icons/rainandthunder.svg";

    case "rainshowers_day":
      return "../../src/assets/weather_icons/rainshowers_day.svg";

    case "rainshowers_night":
      return "../../src/assets/weather_icons/rainshowers_night.svg";

    case "rainshowers_polartwilight":
      return "../../src/assets/weather_icons/rainshowers_polartwilight.svg";

    case "rainshowersandthunder_day":
      return "../../src/assets/weather_icons/rainshowersandthunder_day.svg";

    case "rainshowersandthunder_night":
      return "../../src/assets/weather_icons/rainshowersandthunder_night.svg";

    case "rainshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/rainshowersandthunder_polartwilight.svg";

    case "sleet":
      return "../../src/assets/weather_icons/sleet.svg";

    case "sleetandthunder":
      return "../../src/assets/weather_icons/sleetandthunder.svg";

    case "sleetshowers_day":
      return "../../src/assets/weather_icons/sleetshowers_day.svg";

    case "sleetshowers_night":
      return "../../src/assets/weather_icons/sleetshowers_night.svg";

    case "sleetshowers_polartwilight":
      return "../../src/assets/weather_icons/sleetshowers_polartwilight.svg";

    case "sleetshowersandthunder_day":
      return "../../src/assets/weather_icons/rainshowersandthunder_day.svg";

    case "sleetshowersandthunder_night":
      return "../../src/assets/weather_icons/sleetshowersandthunder_night.svg";

    case "sleetshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/sleetshowersandthunder_polartwilight.svg";

    case "snow":
      return "../../src/assets/weather_icons/snow.svg";

    case "snowandthunder":
      return "../../src/assets/weather_icons/snowandthunder.svg";

    case "snowshowers_day":
      return "../../src/assets/weather_icons/snowshowers_day.svg";

    case "snowshowers_night":
      return "../../src/assets/weather_icons/snowshowers_night.svg";

    case "snowshowers_polartwilight":
      return "../../src/assets/weather_icons/snowshowers_polartwilight.svg";

    case "snowshowersandthunder_day":
      return "../../src/assets/weather_icons/snowshowersandthunder_day.svg";

    case "snowshowersandthunder_night":
      return "../../src/assets/weather_icons/snowshowersandthunder_night.svg";

    case "snowshowersandthunder_polartwilight":
      return "../../src/assets/weather_icons/snowshowersandthunder_polartwilight.svg";
  }
  return "Not found";
}
export default findWeatherIcon;
