import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose
} from "redux";
import thunk from "redux-thunk";
import { reducer as User } from "./user";

declare global {
  // Add Redux Dev Tool Property into Window Object
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const rootReducer = combineReducers({ User });

let store: Store;
export const configureStore = (): Store => {
  const middleware = [];

  middleware.push(thunk);
  if (process.env.NODE_ENV !== "production") {
    const composeEnhancers =
      (typeof window != "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); //middleWare 추가
  } else {
    store = createStore(rootReducer, applyMiddleware(thunk));
  }

  return store;
};
