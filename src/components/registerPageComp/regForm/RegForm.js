import { useState } from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import { DatePicker, Radios } from "mui-rff";

// Picker
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import { Link } from "react-router-dom";
import "../regForm/RegForm.css";
import { useHistory } from "react-router-dom";
import { post, URL } from "../../../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../spinner/Spinner";

toast.configure();
const RegForm = () => {
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
	const Error = (message) => {
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

	const validate = (values) => {
		const errors = {};

		if (!values.email) {
			errors.email = "Required";
		}
		if (!values.pass) {
			errors.pass = "Required";
		}
		if (values.pass !== values.confirmpass) {
			errors.confirmpass = "password does not match";
		}

		return errors;
	};

	const PostForm = async (data) => {
		console.log("data Post", data?.Dob);
		let dataToSend = {
			user_name: data?.fullName ? data?.fullName : "",
			email: data?.email ? data?.email : "",
			phone: data?.number ? data?.number : "",
			password: data?.pass ? data?.pass : "",
			date_of_birth: data?.Dob ? data?.Dob : "",
			gender: data?.gender ? data?.gender : "",
		};
		console.log("dta reg", dataToSend);
		await post(URL.register, dataToSend)
			.then((res) => {
				console.log("res", res);
				if (res?.data?.status === 200) {
					notify("Success");
					history.push("/Durj-Ecommorce/login");
				} else {
					alert("Invalid Credentials");
				}
			})
			.catch((err) => console.log({ err }));
		setLoader(false);
	};

	const onSubmit = async (values) => {
		setLoader(true);
		PostForm(values);
		console.log(values);
	};

	return (
		<>
			{loader ? (
				<Spinner />
			) : (
				<div className='regForm'>
					<Form
						onSubmit={onSubmit}
						validate={validate}
						render={({ handleSubmit, submitting }) => (
							<form onSubmit={handleSubmit}>
								<Paper component={Box} p={3} style={{ marginTop: "1.5rem" }}>
									<h4>Create Your Durj Account</h4>
									<Typography gutterBottom align='right'>
										Already a Member?
										<Link to='/login' style={{ textDecoration: "none" }}>
											<span
												style={{
													fontFamily: "Minion Variable Concept",
													letterSpacing: "1px",
													fontWeight: "1000",
													color: "#ff4f4f",
													marginLeft: ".7rem",
												}}
											>
												Login
											</span>
										</Link>
										here.
									</Typography>
									{/* Full Name */}
									<Typography className='checkoutForm__subHeading'>
										Enter Full Name<span className='Form__Asterisk'>*</span>
									</Typography>
									<Field
										name='fullName'
										fullWidth
										required
										component={TextField}
										type='fullName'
										placeholder='Please enter your full name'
									/>

									{/* Phone number */}
									<Typography className='checkoutForm__subHeading'>
										Phone Number<span className='Form__Asterisk'>*</span>
									</Typography>
									<Field
										name='number'
										fullWidth
										required
										component={TextField}
										type='tel'
										placeholder='Phone number'
									/>
									{/* Email */}
									<Typography className='checkoutForm__subHeading'>
										Email Address<span className='Form__Asterisk'>*</span>
									</Typography>
									<Field
										name='email'
										fullWidth
										required
										component={TextField}
										type='email'
										placeholder='Please enter your email address'
									/>
									{/* Password */}
									<Typography className='checkoutForm__subHeading'>
										Enter Password<span className='Form__Asterisk'>*</span>
									</Typography>
									<Field
										name='pass'
										fullWidth
										required
										type='password'
										component={TextField}
										placeholder='Enter password'
									/>
									{/* Confirm Password */}
									<Typography className='checkoutForm__subHeading'>
										Confirm Password<span className='Form__Asterisk'>*</span>
									</Typography>
									<Field
										name='confirmpass'
										fullWidth
										required
										type='password'
										component={TextField}
										placeholder='Confirm password'
									/>
									{/* Date Of Birth */}
									<Typography className='checkoutForm__subHeading'>
										Date Of Birth<span className='Form__Asterisk'>*</span>
									</Typography>
									<DatePicker
										style={{ margin: "0px" }}
										name='Dob'
										margin='normal'
										dateFunsUtils={DateFnsUtils}
										dateFormat='Pp'
									/>

									{/* Gender */}
									<Typography className='checkoutForm__subHeading'>
										Gender<span className='Form__Asterisk'>*</span>
									</Typography>
									<Radios
										label='Gender'
										name='gender'
										formControlProps={{ margin: "none" }}
										radioGroupProps={{ row: true }}
										data={[
											{ label: "Male", value: "Male" },
											{ label: "Female", value: "Female" },
										]}
									/>
									<div className='form__btn'>
										<Button
											type='submit'
											disabled={submitting}
											variant='contained'
											style={{ textAlign: "center", color: "#626b77" }}
											fullWidth
										>
											<Typography align='center'>Register</Typography>
										</Button>
									</div>
									<Typography align='center' style={{ marginTop: "1rem" }}>
										OR
									</Typography>
									<div className='form__btn'>
										<Button
											type='submit'
											variant='contained'
											color='primary'
											style={{ textAlign: "center" }}
											fullWidth
											className='loginForm_btn loginFormBtn_facebook'
										>
											<Typography>Register With Facebook</Typography>
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
											}}
											fullWidth
											className='loginForm_btn loginFormBtn_google'
										>
											<Typography>Register With Google+</Typography>
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

export default RegForm;
