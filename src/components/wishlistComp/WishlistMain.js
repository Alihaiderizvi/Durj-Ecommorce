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

const WishlistMain = () => {
	// Hooks
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(0);
	const [products, setProducts] = useState();

	// Redux selectors
	const user = useSelector((state) => state?.user?.user);
	const addedProducts = useSelector((state) => state?.shop?.products);

	// consoles
	console.log("user", user);
	console.log("addedProduct", addedProducts);
	console.log("p", products);

	let arr = [];
	addedProducts.map((a) => {
		arr.push(a.price);
		return Math.round(arr);
	});
	let total = arr.reduce((a, b) => a + b, 0);

	const fetchProducts = async () => {
		let dataToSend = {
			customer_id: user?.id,
		};
		await post(URL.wishlist, dataToSend)
			.then((res) => {
				setProducts(res?.customer_wishlist);
				console.log("res", res);
			})
			.catch((err) => console.error("Error:", err));
	};
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
				customer_id: user?.id,
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
								src={product.image_url}
								alt={product.title}
								onClick={handleOpen}
								// onClick={getId}
							/>
							<p className='quickViewModal__txt'>Have A Quick View</p>
						</div>
						<hr />
						<div className='wishlist__productContent'>
							<h4 className='wishlistProduct__title'>
								{product.title.substring(0, 35)}
							</h4>
							<h4 className='wishlistProduct__price'>
								Price:${parseFloat(product.actual_price).toFixed(2)}
							</h4>
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
