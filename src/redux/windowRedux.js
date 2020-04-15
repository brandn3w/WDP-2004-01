/* selectors */
export const getWindow = ({ window }) => window;
export const getMode = ({ window }) => window.mode;

/* action name creator */
const reducerName = 'window';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_WINDOW = createActionName('SET_WINDOW');

/* action creators */
export const setWindow = payload => ({ payload, type: SET_WINDOW });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_WINDOW: {
      let mode = 'desktops';
      if (action.payload.width < 768) {
        mode = 'tablets';
      }
      if (action.payload.width < 576) {
        mode = 'phones';
      }
      return {
        mode: mode,
        width: action.payload.width,
        height: action.payload.height,
      };
    }
    default:
      return statePart;
  }
}
