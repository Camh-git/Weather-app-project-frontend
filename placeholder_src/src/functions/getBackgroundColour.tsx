function setBackgroundColour(hour: number) {
  let backgroundColour: string = "";
  if (hour > 6 && hour < 12) {
    //morning
    backgroundColour = "#f1e3e4";
  } else if (hour > 12 && hour < 18) {
    //afternoon
    backgroundColour = "#f0c987";
  } else if (hour > 18 && hour < 24) {
    //evening
    backgroundColour = "#9C7178";
  } else if (hour < 6) {
    //night
    backgroundColour = "#1E596F";
  } else {
    //not found, return white
  }
  return backgroundColour;
}
export default setBackgroundColour;
