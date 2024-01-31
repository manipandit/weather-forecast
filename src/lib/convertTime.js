export function convertTo12HourFormat(hour24) {
  let hour12;

  if (hour24 === 0) {
    hour12 = 12;
  } else if (hour24 > 12) {
    hour12 = hour24 - 12;
  } else {
    hour12 = hour24;
  }

  return hour12;
}
