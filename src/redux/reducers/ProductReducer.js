import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
	products: [],
	totalPrice: 0,
	totalQty: 0,
};

const {
	SET_PRODUCTS,
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
	ADD_PRODUCT_TO_CART,
	INCREMENT_CART_QUANTITY,
	REMOVE_ITEM,
} = ActionTypes;

// action -> destructured to type and payload
export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_PRODUCTS:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case SELECTED_PRODUCT:
			return { ...state, ...payload };
		case REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};

export const shop = (state = initialState, { type, payload }) => {
	let findProd;
	let index;
	switch (type) {
		case ADD_PRODUCT_TO_CART:
			const { product, quantity } = payload;
			console.log(product);
			const check = state.products.find((prod) => prod.id === product.id);
			if (!check) {
				const tPrice = state.totalPrice * quantity;
				const tQty = state.totalQty + quantity;
				product.quantity = quantity;
				return {
					...state,
					products: [...state.products, product],
					totalPrice: tPrice,
					totalQty: tQty,
				};
			} else {
				return state;
			}

		case INCREMENT_CART_QUANTITY:
			findProd = state.products.find((prod) => prod.id === payload);
			index = state.products.findIndex((prod) => prod.id === payload);

			findProd.quantity += 1;
			state.products[index] = findProd;

			return {
				...state,
				totalPrice: state.totalPrice,
				totalQty: state.totalQty + 1,
			};

		case REMOVE_ITEM:
			const findProduct = state.products.find((prod) => prod.id === payload);
			const filtered = state.products.filter((prod) => prod.id !== payload);
			return {
				...state,
				products: filtered,
				// totalPrice: state.totalPrice - findProduct.price * findProduct.quantity,
				// totalQty: state.totalQty - findProduct.quantity,
			};
		default:
			return state;
	}
};
