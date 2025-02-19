;

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

import counterSlice from './counter/counterSlice';
import pokemonsSlice from './pokemons/pokemons';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonsSlice,
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
  //   .concat( localStorageMiddleware  )
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()