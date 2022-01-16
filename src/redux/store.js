import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers/index";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(ReduxThunk))
);

export const persistor = persistStore(store);

// export { store, persistor };

// import { createStore } from "redux";
// import reducers from "./reducers/index";

// const store = createStore(
// 	reducers,
// 	{},
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
