import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";
import {
	Typography,
	Paper,
	Grid,
	Button,
	CssBaseline,
	MenuItem,
	Divider,
} from "@material-ui/core";

const onSubmit = async (values) => {
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await sleep(300);
	// window.alert(JSON.stringify(values, 0, 2));
	console.log(values);
};

const validate = (values) => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = "Required";
	}
	if (!values.lastName) {
		errors.lastName = "Required";
	}
	if (!values.email) {
		errors.email = "Required";
	}
	if (!values.address) {
		errors.address = "Required";
	}
	if (!values.number) {
		errors.number = "Required";
	}
	return errors;
};

const CheckoutForm = () => {
	return (
		<Grid item lg={4} md={8} sm={10} className='checkoutForm'>
			<CssBaseline />
			<Typography variant='h5' className='checkout_headings'>
				Billing Address
			</Typography>
			<hr />
			<Form
				onSubmit={onSubmit}
				validate={validate}
				render={({ handleSubmit, submitting }) => (
					<form onSubmit={handleSubmit} noValidate>
						<div style={{ padding: "20px" }}>
							<Grid container alignItems='flex-start' spacing={2}>
								{/* Email */}
								<Grid item xs={12}>
									<Typography className='checkoutForm__subHeading'>
										Email Address
									</Typography>
									<Field
										name='email'
										fullWidth
										required
										component={TextField}
										type='email'
										placeholder='Please enter your email address'
									/>
								</Grid>
								{/* First Name */}
								<Grid item xs={6}>
									<Typography className='checkoutForm__subHeading'>
										First Name
									</Typography>
									<Field
										fullWidth
										required
										name='firstName'
										component={TextField}
										type='text'
										placeholder='First Name'
									/>
								</Grid>
								{/* Last Name */}
								<Grid item xs={6}>
									<Typography className='checkoutForm__subHeading'>
										Last Name
									</Typography>
									<Field
										fullWidth
										required
										name='lastName'
										component={TextField}
										type='text'
										placeholder='Last Name'
									/>
								</Grid>
								{/* City  */}
								<Grid item xs={6}>
									<Typography className='checkoutForm__subHeading'>
										City
									</Typography>
									<Field
										fullWidth
										name='city'
										component={Select}
										label='Select a City'
										formControlProps={{ fullWidth: true }}
									>
										<MenuItem value='London'>City1</MenuItem>
										<MenuItem value='Paris'>City2</MenuItem>
										<MenuItem value='Budapest'>City3</MenuItem>
									</Field>
								</Grid>
								{/* State */}
								<Grid item xs={6}>
									<Typography className='checkoutForm__subHeading'>
										State/Province
									</Typography>
									<Field
										fullWidth
										name='state'
										component={Select}
										label='State/Province'
										formControlProps={{ fullWidth: true }}
									>
										<MenuItem value='Sindh'>Sindh</MenuItem>
										<MenuItem value='Punjab'>Punjab</MenuItem>
										<MenuItem value='KPK'>KPK</MenuItem>
									</Field>
								</Grid>
								{/* Address */}
								<Grid item xs={12}>
									<Typography className='checkoutForm__subHeading'>
										Address
									</Typography>
									<Field
										name='address'
										fullWidth
										required
										component={TextField}
										type='address'
										placeholder='Address'
									/>
								</Grid>
								{/* Phone number */}
								<Grid item xs={12}>
									<Typography className='checkoutForm__subHeading'>
										Phone Number
									</Typography>
									<Field
										name='number'
										fullWidth
										required
										component={TextField}
										type='number'
										placeholder='Phone number'
									/>
								</Grid>

								{/* Submit Btn */}
								<Grid item style={{ marginTop: 16 }}>
									<Button
										variant='contained'
										color='Secondary'
										type='submit'
										disabled={submitting}
									>
										Place Order
									</Button>
								</Grid>
							</Grid>
						</div>
					</form>
				)}
			/>
		</Grid>
	);
};

export default CheckoutForm;
