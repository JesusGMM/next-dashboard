// import { configureStore } from '@reduxjs/toolkit';

// // import counterReducer from './counter/counterSlice';
// // import pokemonsReducer from './pokemons/pokemons';
// import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
// // import { localStorageMiddleware } from './middlewares/localstorage-middleware';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     pokemons: pokemonsReducer,
//   },
//   // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
//   //   .concat( localStorageMiddleware  )
// })


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {

  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch