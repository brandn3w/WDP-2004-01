/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

export const UpdateButtons = (products, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return !products.favorite;

    case 'TOGGLE_ADDTOCOMPARE':
      return !products.addToCompare;

    default:
      return products;
  }
};
