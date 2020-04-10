/* selectors */
export const getFavorite = ({ favorite }) => favorite.products;

/* action name creator */
const reducerName = 'favorite';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_FAVORITE = createActionName('UPDATE_FAVORITE');

/* action creators */
export const updateFavorite = payload => ({ payload, type: UPDATE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_FAVORITE: {
      return {
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}
