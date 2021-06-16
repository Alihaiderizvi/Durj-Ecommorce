import "../navbarComponent/NavbarComponent.css";

const NavbarComponent = ({ backgorundColor, logo, textColor }) => {
	return (
		<>
			<div className='navbar' style={{ backgroundColor: backgorundColor }}>
				<img src={logo} alt='logo' />
				<input type='text' placeholder='Search'></input>

				<h4 style={{ color: textColor }}> test1</h4>
				<h4 style={{ color: textColor }}> test2</h4>
			</div>
		</>
	);
};

export default NavbarComponent;
