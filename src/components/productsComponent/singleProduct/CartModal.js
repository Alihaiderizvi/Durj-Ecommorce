import React, { useState } from "react";
import { Button, Fade, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff !important",
	},
	modalPaper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[2],
		padding: theme.spacing(2, 4, 3),
	},
}));

const CartModal = () => {
	const classes = useStyles();
	// ----------------------Quick view Modal

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div className='quickView__btn'>
				<button onClick={handleOpen}>Quick View</button>

				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby='transition-modal-description'
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className={classes.modalPaper}>
							<h2 id='transition-modal-title'>Transition modal</h2>
							<p id='transition-modal-description'>
								<Button>
									<Link to='/productDetail'>View Full Details</Link>
								</Button>
							</p>
						</div>
					</Fade>
				</Modal>
			</div>
		</>
	);
};

export default CartModal;
