import { Paper, Button, Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
	addProductToCart,
	setProducts,
} from "../../redux/actions/ProductActions";
import { post, URL } from "../../services/Api";
import {
	EmailShareButton,
	WhatsappShareButton,
	FacebookMessengerShareButton,
} from "react-share";

const ReservationMain = (props) => {
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

	const fetchProducts = async () => {
		let dataToSend = {
			customer_id: user?.id,
		};
		await post(URL.reservation, dataToSend)
			.then((res) => setProducts(res?.customer_reserved_products))
			.catch((err) => console.error("Error:", err));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// const getId = (e) => {
	// 	const title = e.target.alt;
	// 	console.log(title);
	// 	return e.target.alt;
	// };

	return (
		<>
			<div className='wishlistMain'>
				<h1 className='wishlistMain__heading'>RESERVATIONS </h1>
			</div>

			{/* <Paper
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					padding: "20px 0px",
					// backgroundColor: "transparent",
				}}
			>
				{products.map(({ id, title, image, price, category, description }) => (
					<div className='wishlist__product' key={id}>
						<div id='wrapper'>
							<img
								className='wishlistProduct__image'
								src={image}
								alt={title}
								onClick={handleOpen}
								// onClick={getId}
							/>
							<p className='quickViewModal__txt'>Have A Quick View</p>
						</div>
						<hr />
						<div className='wishlist__productContent'>
							<h4 className='wishlistProduct__title'>{title}</h4>
							<h4 className='wishlistProduct__price'>Price:${price}</h4>
						</div>
						<Button
							variant='contained'
							className='wishlist__addToCartBtn'
							fullWidth
							justify='center'
							onClick={() => {
								dispatch(addProductToCart({ ...props.products }));
							}}
						>
							<Link className='link'>Add To Cart</Link>
						</Button>
						<Button
							variant='contained'
							className='wishlist__productDetailBtn'
							fullWidth
							justify='center'
							onClick={() => {
								dispatch(addProductToCart({ ...props.product }));
							}}
						>
							<Link to={`/product/${id}`} className='link'>
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
			</Paper> */}
			<div className='wishlist__threeBtns'>
				<Button variant='contained' fullWidth className='WishlistBtns'>
					Update Reservation
				</Button>
				<Button variant='contained' fullWidth className='WishlistBtns'>
					<FacebookMessengerShareButton>
						Share Reservation
					</FacebookMessengerShareButton>
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

export default ReservationMain;
