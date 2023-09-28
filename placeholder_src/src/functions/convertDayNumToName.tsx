function findDayName(dayNum: number): string {
  let dayName: string = "Not found";
  if (dayNum > 7) {
    dayNum -= 7;
  }
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
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
  }
  return dayName;
}
export default findDayName;
