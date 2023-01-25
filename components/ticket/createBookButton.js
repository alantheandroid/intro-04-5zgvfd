export default function createBookButton() {
  const bookButton = document.createElement('button');
  bookButton.textContent = "Book now"
  bookButton.className = 'bookButton';
  return bookButton;
}
