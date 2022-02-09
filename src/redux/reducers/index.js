import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, shop } from "./ProductReducer";
import UserReducer from "./UserReducer";

const reducer = combineReducers({
	user: UserReducer,
	shop,
	allProducts: productReducer,
	product: selectedProductReducer,
});

export default reducer;
