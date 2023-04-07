/* eslint-disable @typescript-eslint/no-unused-vars */
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/dist/query/react';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  // user: userReducer,
  // [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      thunkMiddleware,
      // authApi.middleware
    ),
  // getDefaultMiddleware().concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
setupListeners(store.dispatch);

export default store;
