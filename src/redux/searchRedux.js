/* selectors */
export const getSearch = ({ search }) => search;

/* action name creator */
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_SEARCH = createActionName('SET_SEARCH');

/* action creators */
export const createActionSetSearch = payload => ({ payload, type: SET_SEARCH });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...statePart,
        search: action.payload,
      };
    }
    default:
      return statePart;
  }
}
