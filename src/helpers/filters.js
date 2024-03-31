export const listByFilter = (value, list) => {
  let newCards = [...list];
  switch (value) {
    case 'toUp':
      newCards.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'toDown':
      newCards.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'lessTen':
      newCards = newCards.filter(card => card.price_per_hour < 10);
      break;
    case 'upTen':
      newCards = newCards.filter(card => card.price_per_hour >= 10);
      break;
    case 'pop':
      newCards.sort((a, b) => b.rating - a.rating);
      break;
    case 'notPop':
      newCards.sort((a, b) => a.rating - b.rating);
      break;
    default:
      break;
  }
  return newCards;
};
