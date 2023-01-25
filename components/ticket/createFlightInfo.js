export default function createFlightInfo(flight) {
  const flightInfo = document.createElement('div');
  flightInfo.className = 'flightInfo';

  // flightDeparture
  const flightDeparture = document.createElement('div');
  flightDeparture.className = 'flightDeparture';
  flightInfo.appendChild(flightDeparture);

  const departureTime = document.createElement('p');
  departureTime.className = "departureTime"
  departureTime.textContent = flight.departureTime;
  flightDeparture.appendChild(departureTime);

  const departureAirport = document.createElement('p');
  departureAirport.className = 'departureAirport';
  departureAirport.textContent = flight.departureAirport
  flightDeparture.appendChild(departureAirport);

  return flightInfo;
}
