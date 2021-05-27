import React from "react";
import "../footer/Footer.css";
import footerlogo from "../../assets/footerlogo.png";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const Footer = () => {
	const Categories = [
		{
			id: 1,
			title: "Kitechen Appliances",
			link: "/",
		},
		{
			id: 2,
			title: "Electronic Devices",
			link: "/",
		},
		{
			id: 3,
			title: "Home & Lifestyle",
			link: "/",
		},
		{
			id: 4,
			title: "Womens Collection",
			link: "/",
		},
		{
			id: 5,
			title: "Mens Collection",
			link: "/",
		},
		{
			id: 6,
			title: "Kids Collection",
			link: "/login",
		},
	];

	const Policy = [
		{
			id: 1,
			title: "Return Policy",
		},
		{
			id: 2,
			title: "Terms & Conditions",
		},
		{
			id: 3,
			title: "Privacy",
		},
		{
			id: 4,
			title: "Warranty",
		},
		{
			id: 5,
			title: "Price Beating",
		},
	];

	const About = [
		{
			id: 1,
			title: "Gift Services",
		},
		{
			id: 2,
			title: "FAQ",
		},
		{
			id: 3,
			title: "Sitemap",
		},
	];

	const Contact = [
		{
			id: 1,
			title: "+92 900 78601",
			logo: <PhoneIcon />,
		},
		{
			id: 2,
			title: "durj@gmail.com",
			logo: <EmailIcon />,
		},
		{
			id: 3,
			title: "Lal kothi, Bus Stop, Main Shahra-e-faisal,Karachi",
			logo: <LocationOnIcon />,
		},
	];
	return (
		<div className='footer'>
			<Grid container justify='space-around'>
				<div className='footer__div footer__logo'>
					<img src={footerlogo} />
				</div>
				<div className='footer__div footer__categories'>
					<Typography className='footer__heading footerCategories_heading'>
						Categories
					</Typography>
					{Categories.map((cart) => (
						<Button
							style={{ display: "flex" }}
							fullWidth='false'
							size='small'
							variant='text'
						>
							<Typography
								className='footer__content footerCategories_content'
								component={Link}
								to={cart.link}
							>
								{cart.title}
							</Typography>
						</Button>
					))}
				</div>
				<div className='footer__div footer__policy'>
					<Typography className='footer__heading footerPolicy_heading'>
						Policy
					</Typography>
					{Policy.map((cart) => (
						<Button
							style={{ display: "flex" }}
							fullWidth='false'
							size='small'
							variant='text'
						>
							<Typography
								className='footer__content footerCategories_content'
								component={Link}
								to={cart.link}
							>
								{cart.title}
							</Typography>
						</Button>
					))}
				</div>
				<div className='footer__div footer__about'>
					<Typography className='footer__heading footerAbout_heading'>
						About Durj
					</Typography>
					{About.map((cart) => (
						<Button
							style={{ display: "flex" }}
							fullWidth='false'
							size='small'
							variant='text'
						>
							<Typography
								className='footer__content footerCategories_content'
								component={Link}
								to={cart.link}
							>
								{cart.title}
							</Typography>
						</Button>
					))}
				</div>
				<div className='footer__div footer__contact'>
					<Typography
						className='footer__heading footerContact_heading'
						inline
						variant='body1'
						align='left'
					>
						Contact Us
					</Typography>
					{Contact.map((cart) => (
						<Button
							style={{ display: "flex" }}
							fullWidth='false'
							size='small'
							variant='text'
						>
							<Typography
								className='footer__content footerCategories_content'
								component={Link}
								to={cart.link}
							>
								{cart.logo}
								{cart.title}
							</Typography>
						</Button>
					))}
				</div>
			</Grid>
		</div>
	);
};

export default Footer;
