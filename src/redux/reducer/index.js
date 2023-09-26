import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { servicesApi } from 'src/api/services';
import { authApi } from '../../api/auth';
import { authSlice } from '../features/auth/slice'

const persistConfig = {
  key: 'root1.0',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [servicesApi.reducerPath]: servicesApi.reducer,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
