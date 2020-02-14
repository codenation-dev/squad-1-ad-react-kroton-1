import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import produce from 'immer';
import api from '../../services/api';
import history from '../../services/history';

// Action Types

export const Types = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNUP_REQUEST: 'auth/SIGNUP_REQUEST',
  SIGN_FAILURE: 'auth/SIGN_FAILURE',
  SIGNOUT: 'auth/SIGNOUT',
};

// Reducers

const INITIAL_STATE = {
  token: null,
  isLogged: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGNIN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.SIGNIN_SUCCESS: {
        draft.token = action.payload.token;
        draft.isLogged = true;
        draft.loading = false;
        break;
      }
      case Types.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.SIGNOUT: {
        draft.token = null;
        draft.isLogged = false;
        break;
      }
      default:
    }
  });
}

// Action Creators
export function signInRequest(email, password) {
  return {
    type: Types.SIGNIN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: Types.SIGNIN_SUCCESS,
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: Types.SIGNUP_REQUEST,
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: Types.SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: Types.SIGNOUT,
  };
}

// Sagas

export function* signInSaga({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/painel');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUpSaga({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    toast.success('Perfil criado com sucesso, agora acesse nossa plataforma!');
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export function setTokenSaga({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOutSaga() {
  history.push('/');
}

export const authSaga = all([
  takeLatest('persist/REHYDRATE', setTokenSaga),
  takeLatest(Types.SIGNIN_REQUEST, signInSaga),
  takeLatest(Types.SIGNUP_REQUEST, signUpSaga),
  takeLatest(Types.SIGNOUT, signOutSaga),
]);
