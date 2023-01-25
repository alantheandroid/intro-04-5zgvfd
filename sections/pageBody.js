import createFlightTicket from '../components/createFlightTicket';

export default function pageBody() {
  const pageBody = document.createElement('div');
  pageBody.className = 'pageBody';

  const ticketSection = document.createElement('div');
  ticketSection.className = 'ticketSection';
  pageBody.appendChild(ticketSection);

  ticketSection.appendChild(createFlightTicket());

  return pageBody;
}
