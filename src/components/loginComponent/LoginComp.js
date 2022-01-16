import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Link } from "react-router-dom";
import axios from "axios";
import "../loginComponent/LoginComp.css";
import { useHistory } from "react-router-dom";
import { post, URL } from "../../services/Api";
// import { useSnackbar } from "notistack";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";

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

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
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

// const { register, handleSubmit } = useForm({ defaultValues });
toast.configure();
const LoginComp = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [loader, setLoader] = useState(false);

	const notify = (message) => {
		toast.success(message, {
			position: "bottom-left",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	};

	const postCredentials = async (data) => {
		// console.log("post", data);
		let dataToSend = {
			email: data?.email ? data?.email : "",
			password: data?.pass ? data?.pass : "",
		};
		console.log("dts", dataToSend);
		await post(URL.login, dataToSend)
			.then((res) => {
				console.log(res);
				if (res?.message === "success") {
					notify("Success");
					dispatch({
						type: "LOGIN",
						payload: res?.data,
					});
					history.push("/");
				} else {
					alert("Invalid Credentials");
				}
			})
			.catch((err) => console.log({ err }));
		setLoader(false);
	};

	const onSubmit = async (values) => {
		// console.log("data", values);
		setLoader(true);
		postCredentials(values);
	};
	const classes = useStyles();
	return (
		<>
			{loader ? (
				<Spinner />
			) : (
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
			)}
		</>
	);
};

export default LoginComp;
