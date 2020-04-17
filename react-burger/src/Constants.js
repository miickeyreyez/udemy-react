const Bacon = 'Bacon';
const BreadBottom = 'BreadBottom';
const Cheese = 'Cheese';
const Meat = 'Meat';
const Salad = 'Salad';

const INGREDIENTS = {
  'bread-bottom': BreadBottom,
  Bacon,
	Cheese,
	Meat,
  Salad,
};

const INGREDIENTS_PRICE = {
  Bacon: 0.7,
  Cheese: 0.4,
	Meat: 1.3,
	Salad: 0.5,
};

const CONTROLS = [
  { label: Bacon, type: Bacon },
  { label: Cheese, type: Cheese },
	{ label: Meat, type: Meat },
	{ label: Salad, type: Salad },
];

export {
  INGREDIENTS,
  INGREDIENTS_PRICE,
  CONTROLS,
}
