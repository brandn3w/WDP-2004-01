/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
export const TOGGLE_ADDTOCOMPARE = createActionName('TOGGLE ADDTOCOMPARE');

export const toggleFavorite = payload => ({ payload, type: TOGGLE_FAVORITE });
export const toggleAddToCompare = payload => ({ payload, type: TOGGLE_ADDTOCOMPARE });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return {};
    case 'TOGGLE_ADDTOCOMPARE':
      return {};
    default:
      return statePart;
  }
}
