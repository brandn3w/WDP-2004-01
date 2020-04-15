/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getProductsToCompare = ({ products }) => {
  let productsToCompare = products.filter(item => item.compare === true);
  return productsToCompare;
};
export const getCountProductToCompare = ({ products }) => {
  let count = products.filter(item => item.compare === true).length;
  return count;
};
/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');
const SET_CUSTOMER_STARS = createActionName('SET_CUSTOMER_STARS');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });
export const setCustomerStars = payload => ({ payload, type: SET_CUSTOMER_STARS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE: {
      const newStatePart = [...statePart];
      const productIndex = newStatePart.findIndex(
        product => product.id === action.payload
      );
      if (productIndex >= 0) {
        newStatePart[productIndex].compare = true;
        return newStatePart;
      }
      return statePart;
    }
    case REMOVE_FROM_COMPARE: {
      const newStatePart = [...statePart];
      const productIndex = newStatePart.findIndex(
        product => product.id === action.payload
      );
      if (productIndex >= 0) {
        newStatePart[productIndex].compare = false;
        return newStatePart;
      }
      return statePart;
    }
    case SET_CUSTOMER_STARS: {
      const newStatePart = [...statePart];
      const productIndex = statePart.findIndex(prod => {
        return prod.id === action.payload.id;
      });
      if (productIndex >= 0) {
        newStatePart[productIndex].customerStars = action.payload.customerStars;
        return newStatePart;
      }
      return statePart;
    }
    default:
      return statePart;
  }
}
