import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

// Action Types

export const Types = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNIN_FAILURE: 'auth/SIGNIN_FAILURE',
  SIGNOUT: 'auth/SIGNOUT',
};

// Reducers

const initialState = {
  loading: false,
  isLogged: false,
  isError: false,
  token: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        isError: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case Types.SIGNIN_FAILURE:
      return { ...state, loading: false, isError: true };
    case Types.SIGNOUT:
      return initialState;

    default:
      return state;
  }
}

// Action Creators

export const signinRequest = () => ({
  type: Types.SIGNIN_REQUEST,
});

export const signinSuccess = data => ({
  type: Types.SIGNIN_SUCCESS,
  payload: { user: data.user, token: data.token },
});

export const signinFailure = () => ({
  type: Types.SIGNIN_FAILURE,
});

export const signOutSuccess = () => ({
  type: Types.SIGNOUT,
});

export const signIn = ({ email, password }) => async dispatch => {
  dispatch(signinRequest());
  try {
    const response = await api.post('/sessions', { email, password });
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    dispatch(signinSuccess(response.data));
    history.push('/painel');
  } catch (error) {
    toast.error('Ocorreu um erro no login');
    dispatch(signinFailure());
  }
};

export const signOut = () => dispatch => {
  dispatch(signOutSuccess());
  history.push('/');
};
