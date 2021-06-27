import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, shop } from "./ProductReducer";

const reducer = combineReducers({
	shop,
	allProducts: productReducer,
	product: selectedProductReducer,
});

export default reducer;
