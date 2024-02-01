const windDirection = ["North", "East", "South", "West"];

export default function determineWindDirection(deg) {
  if (deg === 0) return "North";
  else if (deg > 0 && deg < 90) return "North-East";
  else if (deg === 90) return "East";
  else if (deg > 90 && deg < 180) return "South-East";
  else if (deg === 180) return "South";
  else if (deg > 180 && deg < 270) return "South-West";
  else if (deg === 270) return "West";
  else if (deg > 270) return "North-West";
}
