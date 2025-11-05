const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');
const aside = document.querySelector('aside');

// Hamburger menu toggle
hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('responsive');
}, false);

// Fix for mid-resizing issue
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    mainnav.classList.remove('responsive');
  }

  // Update window size display when resizing
  displayWindowSize();
});

// Function to display window dimensions
function displayWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  aside.textContent = `Window width: ${width}px | Window height: ${height}px`;
}

// Initial display when page loads
displayWindowSize();
window.addEventListener('load', displayWindowSize);

