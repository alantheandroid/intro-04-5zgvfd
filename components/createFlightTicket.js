import createBookButton from './ticket/createBookButton';

export default function createFlightTicket() {
  const flightTicket = document.createElement('div');
  flightTicket.className = 'flightTicket';

  const ticketBody = document.createElement('div');
  ticketBody.className = 'ticketBody';
  flightTicket.appendChild(ticketBody);

  // add companyInfo
  const companyInfo = document.createElement('div');
  companyInfo.className = 'companyInfo';
  flightTicket.appendChild(companyInfo);

  // add flightInfo
  const flightInfo = document.createElement('div');
  flightInfo.className = 'flightInfo';
  flightTicket.appendChild(flightInfo);

  // add priceSection
  const priceSection = document.createElement('div');
  priceSection.className = 'priceSection';
  flightTicket.appendChild(priceSection);

  priceSection.appendChild(createBookButton());

  return flightTicket;
}
