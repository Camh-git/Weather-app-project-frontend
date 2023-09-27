function setTextColour(hour: number) {
  let textColour: string = "";
  if (hour > 6 && hour < 18) {
    //morning and afternoon
    textColour = "#000000";
  } else if (hour >= 18 && hour < 24) {
    //evening
    textColour = "#FFFFFF";
  } else if (hour < 6) {
    //night
    textColour = "#FFFFFF";
  } else {
    //not found, return white
  }
  return textColour;
}
export default setTextColour;
