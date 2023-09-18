function findDayName(dayNum: number): string {
  let dayName: string = "Not found";
  switch (dayNum) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Staurday";
      break;
    case 0:
      dayName = "Sunday";
      break;
  }
  return dayName;
}
export default findDayName;
