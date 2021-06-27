import {
	Box,
	Button,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../loginComponent/LoginComp.css";

const useStyles = makeStyles((theme) => ({
	inputItem: {
		marginBottom: theme.spacing(3),
		backgroundColor: "transparent !important",
	},
	paper: {
		minHeight: "500px",
		height: "auto",
		maxWidth: "600px !important",
	},
}));
const LoginComp = () => {
	const defaultValues = {
		email_id: "",
		pass: "",
	};

	const onSubmit = (data) => {
		alert("Successfully Logged In! 😄");
		console.log(data);
	};

	const classes = useStyles();
	const { register, handleSubmit } = useForm({ defaultValues });
	return (
		<>
			<div className='loginForm'>
				<form
					className='loginForm__container'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Paper component={Box} p={4} elevation={3} className={classes.paper}>
						<Typography variant='h5' className='loginForm__mainHeading'>
							WELCOME TO DURJ! PLEASE LOGIN
						</Typography>
						<Box className='box rightBox' component='span' m={1}>
							<Typography gutterBottom>
								New Member?
								<Link to='/register' style={{ textDecoration: "none" }}>
									<span style={{ letterSpacing: "2px" }}>Register</span>
								</Link>
								here.
							</Typography>
						</Box>
						<TextField
							id='filled-basic'
							name='email_id'
							label='Email address'
							placeholder='Enter your email address'
							variant='standard'
							fullWidth
							inputRef={register("test", { required: true })}
							size='small'
							className={classes.inputItem}
							required
						/>
						<TextField
							name='pass'
							id='filled-basic'
							label='Enter Password'
							placeholder='Enter Password'
							variant='standard'
							size='small'
							type='password'
							fullWidth
							inputRef={register("test", { required: true })}
							className={classes.inputItem}
							required
						/>
						<Typography gutterBottom align='right'>
							<Link to='/login' style={{ textDecoration: "none" }}>
								Forgot Password?
							</Link>
						</Typography>
						<div className='form__btn'>
							<Button
								form='myForm'
								type='submit'
								variant='contained'
								style={{ textAlign: "center" }}
								fullWidth
								className='loginForm__btn loginFormBtn__register'
							>
								<Typography align='center'>Register</Typography>
							</Button>
						</div>
						<hr />
						<Typography align='center'>OR</Typography>
						<hr />
						<div className='form__btn'>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								style={{ textAlign: "center" }}
								fullWidth
								className='loginForm__btn loginFormBtn__facebook'
							>
								<Typography>Login With Facebook</Typography>
							</Button>
						</div>
						<div className='form__btn'>
							<Button
								type='submit'
								variant='contained'
								color='secondary'
								style={{ textAlign: "center" }}
								fullWidth
								className='loginForm__btn loginFormBtn__google'
							>
								<Typography>Login With Google+</Typography>
							</Button>
						</div>
					</Paper>
				</form>
			</div>
		</>
	);
};

export default LoginComp;
