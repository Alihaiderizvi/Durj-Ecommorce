// All Of the Actions that your app would ne performing should be mentioned in this file.

import { ActionTypes } from "../constants/ActionTypes";

const {
	SET_PRODUCTS,
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
	ADD_PRODUCT_TO_CART,
	INCREMENT_CART_QUANTITY,
	REMOVE_ITEM,
	SUB_TOTAL_OF_PRODUCTS,
} = ActionTypes;

export const setProducts = (products) => {
	return {
		type: SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (product) => {
	return {
		type: SELECTED_PRODUCT,
		payload: product,
	};
};

export const removeSelectedProduct = () => {
	return {
		type: REMOVE_SELECTED_PRODUCT,
	};
};

export const addProductToCart = () => {
	return {
		type: ADD_PRODUCT_TO_CART,
	};
};

export const incrementCartQuantity = () => {
	return {
		type: INCREMENT_CART_QUANTITY,
	};
};

export const removeItem = () => {
	return {
		type: REMOVE_ITEM,
	};
};

export const subTotalOfProducts = () => {
	return {
		type: SUB_TOTAL_OF_PRODUCTS,
	};
};
