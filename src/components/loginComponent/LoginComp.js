import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
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

const validate = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = "Required";
	}
	if (!values.pass) {
		errors.pass = "Required";
	}
	return errors;
};

const onSubmit = async (values) => {
	const { email, pass } = values;
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await sleep(300);
	console.log(`Email: ${email}`);
	console.log(`Password: ${pass}`);
	window.alert(JSON.stringify(values, 0, 2));
	console.log(values);
};

// const { register, handleSubmit } = useForm({ defaultValues });
const LoginComp = () => {
	const classes = useStyles();
	return (
		<>
			<div className='loginForm'>
				<div className='loginForm_BgImage'></div>
				<Form
					onSubmit={onSubmit}
					validate={validate}
					render={({ handleSubmit, submitting }) => (
						<form
							className='loginForm__container'
							onSubmit={handleSubmit}
							noValidate
						>
							<Paper
								component={Box}
								p={4}
								elevation={3}
								className={classes.paper}
							>
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
								<Field
									name='email'
									fullWidth
									required
									component={TextField}
									type='email'
									placeholder='Enter your email address'
									className={classes.inputItem}
								/>
								<Field
									name='pass'
									fullWidth
									required
									component={TextField}
									type='password'
									placeholder='Enter Password'
									className={classes.inputItem}
								/>
								<Typography gutterBottom align='right'>
									<Link to='/login' style={{ textDecoration: "none" }}>
										Forgot Password?
									</Link>
								</Typography>
								<div className='form__btn'>
									{/* <Button
										form='myForm'
										type='submit'
										variant='contained'
										style={{ textAlign: "center" }}
										fullWidth
										className='loginForm__btn loginFormBtn__register'
									>
										<Typography align='center'>Login</Typography>
									</Button> */}
									<Button
										variant='contained'
										type='submit'
										disabled={submitting}
										fullWidth
										className='loginForm__btn loginFormBtn__register'
									>
										Login
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
					)}
				/>
			</div>
		</>
	);
};

export default LoginComp;
