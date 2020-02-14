import produce from 'immer';

// Action Types

export const Types = {
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNOUT: 'auth/SIGNOUT',
};

// Reducers
const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGNIN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }
      case Types.SIGNOUT: {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}

// Action Creators

// Saga
