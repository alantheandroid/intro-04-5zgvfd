export default function pageHeader() {
  const pageHeader = document.createElement('div');
  pageHeader.classList = 'pageHeader';

  const date = document.createElement('h1');
  date.textContent = new Date().toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  date.className = 'date';
  pageHeader.appendChild(date);

  return pageHeader;
}
