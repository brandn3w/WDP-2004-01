/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_CUSTOMER_STARS = createActionName('SET_CUSTOMER_STARS');

/* action creators */
export const setCustomerStars = payload => ({ payload, type: SET_CUSTOMER_STARS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_CUSTOMER_STARS: {
      const productIndex = statePart.findIndex(prod => {
        return prod.id === action.payload.id;
      });
      const newStatePart = [...statePart];
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
