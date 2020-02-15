import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { all } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';

import auth, { authSaga } from './auth';
import user from './user';
import bug, { bugSaga } from './bug';

const rootPersistConfig = {
  key: '14cada03a45fb7a48c3be75122c277fd',
  storage,
  whitelist: ['auth', 'user', 'bug'],
};

const rootReducer = combineReducers({ auth, user, bug });

export default persistReducer(rootPersistConfig, rootReducer);

export function* rootSaga() {
  return yield all([authSaga, bugSaga]);
}
