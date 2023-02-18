// Get all the cards on the page
const cards = document.querySelectorAll('.cards_item');

// Add an event listener for each card
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    // When a card is hovered, loop through all other cards and add the blur class
    cards.forEach(c => {
      if (c !== card) {
        c.classList.add('blur');
      }
    });

    // Increase the size of the card being hovered on
    card.classList.add('hover');
  });

  card.addEventListener('mouseout', () => {
    // When the mouse is no longer hovering over a card, remove the blur and hover classes from all cards
    cards.forEach(c => {
      c.classList.remove('blur');
      c.classList.remove('hover');
    });
  });
});
