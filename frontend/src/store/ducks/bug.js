import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import produce from 'immer';
import api from '../../services/api';
import history from '../../services/history';

// Action Types

export const Types = {
  LIST_REQUEST: 'bugs/LIST_REQUEST',
  LIST_SUCCESS: 'bugs/LIST_SUCCESS',
  LIST_FAILURE: 'bugs/LIST_FAILURE',
  GETBUG: 'bugs/GETBUG',
  UPDATE_REQUEST: 'bugs/UPDATE_REQUEST',
  UPDATE_SUCCESS: 'bugs/UPDATE_SUCCESS',
  UPDATE_FAILURE: 'bugs/UPDATE_FAILURE',
  DELETE_REQUEST: 'bugs/DELETE_REQUEST',
  DELETE_SUCCESS: 'bugs/DELETE_SUCCESS',
  DELETE_FAILURE: 'bugs/DELETE_FAILURE',
};

// Reducers

const INITIAL_STATE = {
  bugs: [],
  loading: false,
  currentBug: {},
};

export default function bug(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LIST_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.LIST_SUCCESS: {
        draft.bugs = action.payload.bugs;
        draft.loading = false;
        break;
      }
      case Types.LIST_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.GETBUG: {
        draft.currentBug = state.bugs
          .filter(b => b.id === action.payload.id)
          .shift();
        break;
      }
      case Types.UPDATE_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.UPDATE_SUCCESS: {
        draft.bugs = state.bugs.map(b =>
          b.id === action.payload.data.id ? action.payload.data : b
        );
        draft.currentBug = action.payload.data;
        draft.loading = false;
        break;
      }
      case Types.UPDATE_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.DELETE_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.DELETE_SUCCESS: {
        draft.bugs.splice(action.payload.id, 1);
        draft.currentBug = {};
        draft.loading = false;
        break;
      }
      case Types.DELETE_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
        break;
    }
  });
}

// Action Creators
export function updateBugRequest(data) {
  return {
    type: Types.UPDATE_REQUEST,
    payload: { data },
  };
}

export function updateBugSuccess(data) {
  return {
    type: Types.UPDATE_SUCCESS,
    payload: { data },
  };
}

export function updateBugFailure() {
  return {
    type: Types.UPDATE_FAILURE,
  };
}

export function listBugRequest() {
  return {
    type: Types.LIST_REQUEST,
  };
}

export function listBugSuccess(bugs) {
  return {
    type: Types.LIST_SUCCESS,
    payload: { bugs },
  };
}

export function listBugFailure() {
  return {
    type: Types.LIST_FAILURE,
  };
}

export function getBug(id) {
  return {
    type: Types.GETBUG,
    payload: { id },
  };
}

export function deleteBugRequest(id) {
  return {
    type: Types.DELETE_REQUEST,
    payload: { id },
  };
}

export function deleteBugSuccess(id) {
  return {
    type: Types.DELETE_SUCCESS,
    payload: { id },
  };
}

export function deleteBugFailure() {
  return {
    type: Types.DELETE_FAILURE,
  };
}

// Sagas

export function* listBugSaga() {
  try {
    const response = yield call(api.get, 'logs');
    yield put(listBugSuccess(response.data));
  } catch (err) {
    toast.error('Falha na listagem dos bugs');
    yield put(listBugFailure());
  }
}

export function* updateBugSaga({ payload }) {
  try {
    const {
      log_id,
      log_environment,
      log_source,
      log_date,
      log_type,
      log_title,
      log_description,
      log_quantity,
    } = payload;

    const response = yield call(api.put, `logs/${log_id}`, {
      log_environment,
      log_source,
      log_date,
      log_type,
      log_title,
      log_description,
      log_quantity,
    });

    yield put(updateBugSuccess(response.data));
  } catch (err) {
    toast.error('Falha na atualização do bug, verifique seus dados');
    yield put(updateBugFailure());
  }
}

export function* deleteBugSaga({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `logs/${id}`);

    toast.success('Item excluído com sucesso!');
    yield put(deleteBugSuccess(id));
    history.push('/painel');
  } catch (err) {
    toast.error('Falha na exclusão');
    yield put(deleteBugFailure());
  }
}

export const bugSaga = all([
  takeLatest(Types.UPDATE_REQUEST, updateBugSaga),
  takeLatest(Types.DELETE_REQUEST, deleteBugSaga),
  takeLatest(Types.LIST_REQUEST, listBugSaga),
]);
