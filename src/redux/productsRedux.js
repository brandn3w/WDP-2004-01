/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

/* action name creator */
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getCompares = ({ products }) =>
  products.filter(item => item.compares === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
export const TOGGLE_COMPARE = createActionName('TOGGLE ADDTOCOMPARE');

/* action creator */
export const createAction_toggleFavorite = payload => ({
  payload,
  type: TOGGLE_FAVORITE,
});
export const createAction_toggleCompare = payload => ({
  payload,
  type: TOGGLE_COMPARE,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorite = !product.favorite;
        }
        return product;
      });

    case 'TOGGLE_COMPARE':
      return statePart.map(product => {
        if (action.payload.id === product.id) {
          product.compare = !product.compare;
        }
        return product;
      });
    default:
      return statePart;
  }
}
