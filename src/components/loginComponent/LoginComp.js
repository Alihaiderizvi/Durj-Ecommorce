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
				<div className='loginForm_BgImage'></div>
				<form
					className='loginForm__container'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Paper component={Box} p={4} elevation={3} className={classes.paper}>
						<h5 variant='h5' className='loginForm__mainHeading'>
							WELCOME TO DURJ! PLEASE LOGIN
						</h5>
						<Box className='box rightBox' component='span' m={1}>
							<Typography gutterBottom>
								New Member?
								<Link to='/register' style={{ textDecoration: "none" }}>
									<span
										style={{
											fontFamily: "Minion Variable Concept",
											letterSpacing: "1px",
											fontWeight: "900",
											color: "#ff4f4f",
											marginLeft: ".3rem",
										}}
									>
										Register
									</span>
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
								<Typography align='center'>Login</Typography>
							</Button>
						</div>

						<Typography align='center'>OR</Typography>

						<div className='form__btn'>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								style={{ textAlign: "center" }}
								fullWidth
								className='loginForm_btn loginFormBtn_facebook'
							>
								<Typography>Login With Facebook</Typography>
							</Button>
						</div>
						<div className='form__btn'>
							<Button
								type='submit'
								variant='contained'
								style={{
									textAlign: "center",
									backgroundColor: "#ff4f4f",
									color: "white",
									marginTop: ".7rem",
								}}
								fullWidth
								className='loginForm_btn loginFormBtn_google'
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
