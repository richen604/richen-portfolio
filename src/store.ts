import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createMemoryHistory, History } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from './reducers/themeReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const createRootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    theme: themeReducer,
  });

export const history = createMemoryHistory();
const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export default function configureStore(preloadedState?: any) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
}

export const { store } = configureStore();

export type RootState = ReturnType<typeof store.getState>;
