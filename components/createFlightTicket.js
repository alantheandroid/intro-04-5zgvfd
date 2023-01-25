import createPriceSection from './ticket/createPriceSection';
import createFlightInfo from "./ticket/createFlightInfo"

export default function createFlightTicket(flight) {
  const flightTicket = document.createElement('div');
  flightTicket.className = 'flightTicket';

  const ticketBody = document.createElement('div');
  ticketBody.className = 'ticketBody';
  flightTicket.appendChild(ticketBody);

  const ticketFooter = document.createElement('div');
  ticketFooter.className = 'ticketFooter';
  flightTicket.appendChild(ticketFooter);

  // add companyInfo
  const companyInfo = document.createElement('div');
  companyInfo.className = 'companyInfo';
  ticketBody.appendChild(companyInfo);

  ticketBody.appendChild(createFlightInfo(flight));

  // add priceSection
  ticketBody.appendChild(createPriceSection(flight));

  return flightTicket;
}
