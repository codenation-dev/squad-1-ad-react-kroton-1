// Action Types

export const Types = {
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNOUT: 'auth/SIGNOUT',
};

// Reducers

const initialState = {
  name: '',
  email: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
    case Types.SIGNOUT:
      return {
        ...state,
        name: null,
        email: null,
      };
    default:
      return state;
  }
}

// Action Creators
// TODO: criar rota para update do profile?
