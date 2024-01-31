export function findDay(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  // console.log("The day is:", day);
  return day;
}
