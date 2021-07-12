import React, { useState } from "react";
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	makeStyles,
	Paper,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import { Link } from "react-router-dom";
import "../regForm/RegForm.css";

const RegForm = () => {
	const [selectedDate, setDate] = useState(moment());
	const [inputValue, setInputValue] = useState();

	const onDateChange = (date, value) => {
		setDate(date);
		setInputValue(value);
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			// display:'flex',
			// width: 'auto',
			// flexDirection: 'column',
		},
		formControl: {
			maxWidth: "100%",
			width: "100%",
		},
		inputItem: {
			marginBottom: theme.spacing(3),
		},
	}));

	const defaultValues = {
		fullName: "",
		phoneNumber: "",
		email: "",
		password: "",
		confirmPass: "",
		dob: Date.now(),
		gender: "",
		state: "",
	};

	const classes = useStyles();
	const onSubmit = (data) => {
		console.log(data);
		alert("Form Submitted!");
	};

	const { handleSubmit, control } = useForm({ defaultValues });
	const formData = [
		{
			id: 1,
			label: "Full Name",
			placeholder: "Enter Full Name",
			name: "fullName",
		},
		{
			id: 2,
			label: "Phone Number",
			placeholder: "Enter Phone Number",
			name: "phoneNumber",
		},
		{
			id: 3,
			label: "Email",
			placeholder: "Enter email address",
			name: "email",
		},
		{
			id: 4,
			label: "Password",
			placeholder: "Enter new password",
			name: "password",
		},
		{
			id: 5,
			label: "Confirm Password",
			placeholder: "Re-enter password",
			name: "confirmPass",
		},
	];

	return (
		<div className='regForm'>
			<form onSubmit={handleSubmit(onSubmit)}>
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
					{formData.map((data) => (
						<Controller
							key={data.id}
							control={control}
							name={data.name}
							render={({ onChange, onBlur, value, name, ref }) => (
								<TextField
									id='filled-basic'
									label={data.label}
									placeholder={data.placeholder}
									variant='filled'
									fullWidth
									onChange={onChange}
									ref={ref}
									value={value}
									className={classes.inputItem}
									required
								/>
							)}
						/>
					))}

					<Controller
						control={control}
						name='dob'
						render={({ onChange, onBlur, value, name, ref }) => (
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									fullWidth
									disableToolbar
									variant='inline'
									format='MM/dd/yyyy'
									id='date-picker-inline'
									label='Select your date of birth'
									autocomplete='off'
									inputRef={ref}
									onChange={onDateChange}
									inputValue={inputValue}
									value={selectedDate}
									className={classes.inputItem}
								/>
							</MuiPickersUtilsProvider>
						)}
					/>

					<FormGroup>
						<Controller
							control={control}
							name='gender'
							render={({ onChange, onBlur, value, name, ref }) => (
								<FormControl className={classes.inputItem}>
									<FormLabel>Choose your gender</FormLabel>
									<RadioGroup row value={value} onChange={onChange} ref={ref}>
										<FormControlLabel
											value='male'
											control={<Radio color='primary' />}
											label='Male'
										/>
										<FormControlLabel
											value='female'
											control={<Radio color='primary' />}
											label='Female'
										/>
										<FormControlLabel
											value='other'
											control={<Radio color='primary' />}
											label='Other'
										/>
									</RadioGroup>
								</FormControl>
							)}
						/>
						<FormControl className={classes.inputItem}>
							<FormControlLabel
								control={<Checkbox />}
								label='I aggree all terms & conditons'
								required
							/>
						</FormControl>
					</FormGroup>

					<div className='form__btn'>
						<Button
							type='submit'
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
		</div>
	);
};

export default RegForm;
