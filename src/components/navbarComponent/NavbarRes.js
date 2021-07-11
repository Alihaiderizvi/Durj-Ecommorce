// Material Ui Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// Material Ui
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
// Css
import "../navbarComponent/NavbarComponent.css";
// Avatar Dummy
import userAvatar from "../../assets/avatar.png";
import UserInfo from "./UserInfo";

const NavbarRes = () => {
	return (
		<>
			<div className='headerNav__ResUserInfo'>
				<div className='userInfo__wrapper'>
					<section>
						<Avatar className='HeaderNav__UserAvatar' src={userAvatar} />
					</section>
					<section>
						<UserInfo />
					</section>
					<section>
						<IconButton aria-label='cart'>
							<Badge
								badgeContent={0}
								color='secondary'
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								max='10'
							>
								<ShoppingCartIcon style={{ color: "Black" }} />
							</Badge>
						</IconButton>
					</section>
				</div>
			</div>
		</>
	);
};

export default NavbarRes;
