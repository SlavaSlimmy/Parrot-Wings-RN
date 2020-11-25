import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

export default configureStore({
  reducer: rootReducer
});
// export default function configureAppStore(preloadedState) {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: [...getDefaultMiddleware()],
//     preloadedState,
//     enhancers: []
//   });

//   if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
//   }

//   return store;
// }
