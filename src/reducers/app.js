/* ------------------   ACTIONS   ------------------ */

const SET_APP = 'SET_APP';

/* --------------   ACTION CREATORS   -------------- */

export const setApp = payload => dispatch => dispatch({ type: SET_APP, payload });

/* -----------------   REDUCERS   ------------------ */

const initialState = {
  app: false
};

export default function reducer(prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_APP:
      newState.app = action.payload;
      break;

    default:
      return prevState;
  }

  return newState;
}

/* ---------------   DISPATCHERS   ----------------- */

