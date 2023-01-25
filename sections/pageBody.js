export default function pageBody() {
  const pageBody = document.createElement('div');
  pageBody.className = 'pageBody';

  const ticketSection = document.createElement('div');
  ticketSection.className = 'ticketSection';
  pageBody.appendChild(ticketSection);

  return pageBody;
}
