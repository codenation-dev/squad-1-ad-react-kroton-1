import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';

const rootPersistConfig = {
  key: '14cada03a45fb7a48c3be75122c277fd',
  storage,
};

const rootReducer = combineReducers({ user });

export default persistReducer(rootPersistConfig, rootReducer);
