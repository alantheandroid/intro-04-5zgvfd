import createBookButton from './createBookButton';

export default function createPriceSection(flight) {
  const priceSection = document.createElement('div');
  priceSection.className = 'priceSection';

  const flightPrice = document.createElement('p');
  flightPrice.className = "flightPrice"
  flightPrice.textContent = "€" + flight.price;

  priceSection.append(flightPrice, createBookButton());

  return priceSection;
}
