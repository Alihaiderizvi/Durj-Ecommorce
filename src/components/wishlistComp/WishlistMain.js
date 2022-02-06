import { Paper, Button, Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
	addProductToCart,
	// addProductToCart,
	setProducts,
} from "../../redux/actions/ProductActions";
import { post, URL } from "../../services/Api";

const WishlistMain = (props) => {
	// Data Fetch from api
	const [counter, setCounter] = useState(0);
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();
	const addedProducts = useSelector((state) => state.shop.products);
	console.log("addedProduct", addedProducts);
	let arr = [];
	addedProducts.map((a) => {
		arr.push(a.price);
		return Math.round(arr);
	});
	let total = arr.reduce((a, b) => a + b, 0);
	// console.log(total);
	const fetchProducts = async () => {
		const res = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				console.log("Error", err);
			});
		console.log("res wish", res?.data);
		// Once we get the res we need to add this to our store
		// For this we need to Dispatch & Action(SET_PRODUCT)
		dispatch(setProducts(res.data));
	};

	// const AddProduct = () => {
	// 	setCounter(counter + 1);
	// 	dispatch({
	// 		type: "ADD_PRODUCT_TO_CART",
	// 		payload: { product, total, counter },
	// 	});
	// }
	useEffect(() => {
		fetchProducts();
	}, []);

	// Modal
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getId = (e) => {
		const title = e.target.alt;
		console.log(title);
		return e.target.alt;
	};

	const addToCart = (product) => {
		let postCart = async () => {
			const dataToSend = {
				customer_id: 1,
				product_id: 1,
				quantity: 2,
			};
			await post(URL.addToCart, dataToSend).then((res) => {
				console.log("res add", res);
			});
		};
		postCart();
		setCounter(counter + 1);
		dispatch({
			type: "ADD_PRODUCT_TO_CART",
			payload: { product, total, counter },
		});
	};
	return (
		<>
			<div className='wishlistMain'>
				<h1 className='wishlistMain__heading'>WISHLIST {getId} </h1>
			</div>

			<Paper
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					marginTop: "20px",
					padding: "20px 0px",
					// backgroundColor: "transparent",
				}}
			>
				{products?.map((product) => (
					<div className='wishlist__product' key={product.id}>
						<div id='wrapper'>
							<img
								className='wishlistProduct__image'
								src={product.image}
								alt={product.title}
								onClick={handleOpen}
								// onClick={getId}
							/>
							<p className='quickViewModal__txt'>Have A Quick View</p>
						</div>
						<hr />
						<div className='wishlist__productContent'>
							<h4 className='wishlistProduct__title'>{product.title}</h4>
							<h4 className='wishlistProduct__price'>Price:${product.price}</h4>
						</div>
						<Button
							variant='contained'
							className='wishlist__addToCartBtn'
							fullWidth
							justify='center'
							onClick={() => addToCart(product)}
							// onClick={() => {

							// 	setCounter(counter + 1);
							// 	dispatch({
							// 		type: "ADD_PRODUCT_TO_CART",
							// 		payload: { product, total, counter },
							// 	});
							// }}
						>
							<Link className='link'>Add To Cart</Link>
						</Button>
						<Button
							variant='contained'
							className='wishlist__productDetailBtn'
							fullWidth
							justify='center'
							// onClick={() => {
							// 	dispatch(addProductToCart({ ...props.product }));
							// }}
						>
							<Link to={`/product/${product.id}`} className='link'>
								Product Details
							</Link>
						</Button>
					</div>
				))}
				<Modal
					className='wishlist__modal'
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className='wishlistModal__paper'>
							<h2>Quick View Modal</h2>
							<p>Some Dummy Text.</p>
						</div>
					</Fade>
				</Modal>
			</Paper>
			<div className='wishlist__threeBtns'>
				<Button variant='contained' fullWidth className='WishlistBtns'>
					Update Wishlist
				</Button>
				<Button variant='contained' fullWidth className='WishlistBtns'>
					Share Wishlist
				</Button>
				<Button variant='contained' fullWidth className='WishlistBtns'>
					<Link to='/cart' style={{ color: "#fff", textDecoration: "none" }}>
						Add All To Cart
					</Link>
				</Button>
			</div>
		</>
	);
};

export default WishlistMain;
