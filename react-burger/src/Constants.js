const BreadBottom = 'BreadBottom';
const Meat = 'Meat';
const Cheese = 'Cheese';
const Bacon = 'Bacon';
const Salad = 'Salad';

const INGREDIENTS = {
  'bread-bottom': BreadBottom,
  Meat,
  Cheese,
  Bacon,
  Salad,
};

const INGREDIENTS_PRICE = {
  Salad: 0.5,
  Cheese: 0.4,
  Meat: 1.3,
  Bacon: 0.7,
};

const CONTROLS = [
  { label: Salad, type: Salad },
  { label: Bacon, type: Bacon },
  { label: Cheese, type: Cheese },
  { label: Meat, type: Meat },
];

export {
  INGREDIENTS,
  INGREDIENTS_PRICE,
  CONTROLS,
}
