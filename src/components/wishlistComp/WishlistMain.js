import { Paper, Button, Modal, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const WishlistMain = () => {
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

	// Data Fetch from api

	const [data, setData] = useState([]);

	const fetchApi = async () => {
		const res = await fetch("https://fakestoreapi.com/products");
		setData(await res.json());
		// const a = await res.json();
		// console.log(a);
	};

	useEffect(() => {
		fetchApi();
	}, []);

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
					padding: "20px 0px",
					// backgroundColor: "transparent",
				}}
			>
				{data.map((product) => (
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
							<h4 className='wishlistProduct__price'>
								Price:Rs.{product.price}
							</h4>
						</div>
						<Button
							variant='contained'
							className='wishlist__addToCartBtn'
							fullWidth
							justify='center'
						>
							<Link to='/cart' className='link'>
								Add To Cart
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
							<p style={{ width: "75ch" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								mollitia, molestiae quas vel sint commodi repudiandae
								consequuntur voluptatum laborum numquam blanditiis harum
								quisquam eius sed odit fugiat iusto fuga praesentium optio,
								eaque rerum! Provident similique accusantium nemo autem.
								Veritatis obcaecati tenetur iure eius earum ut molestias
								architecto voluptate aliquam nihil, eveniet aliquid culpa
								officia aut! Impedit sit sunt quaerat, odit, tenetur error,
								harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
								Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
								sapiente officiis modi at sunt excepturi expedita sint? Sed
								quibusdam recusandae alias error harum maxime adipisci amet
								laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
								rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
								laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
								commodi iusto libero magni deleniti quod quam consequuntur!
								Commodi minima excepturi repudiandae velit hic maxime
								doloremque. Quaerat provident commodi consectetur veniam
								similique ad earum omnis ipsum saepe, voluptas, hic voluptates
								pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
								excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
								Voluptatem quaerat non architecto ab laudantium modi minima sunt
								esse temporibus sint culpa, recusandae aliquam numquam totam
								ratione voluptas quod exercitationem fuga. Possimus quis earum
								veniam quasi aliquam eligendi, placeat qui corporis!
							</p>
						</div>
					</Fade>
				</Modal>
			</Paper>
		</>
	);
};

export default WishlistMain;
