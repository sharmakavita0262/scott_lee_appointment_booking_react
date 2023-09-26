import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/auth';
import rootReducer from './reducer';
import { servicesApi } from '../api/services'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, })
    .concat(
      authApi.middleware,
      servicesApi.middleware,
    ),
})


