// React Imports
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Material icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonIcon from "@material-ui/icons/Person";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import InboxIcon from "@material-ui/icons/MoveToInbox";

// Material Ui Core
import IconButton from "@material-ui/core/IconButton";
import { ListItemIcon } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Material Ui Style
import { withStyles } from "@material-ui/styles";

// Redux
import { useDispatch, useSelector } from "react-redux";

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = MenuItem;

const UserInfo = () => {
	// User Info Responsive Menu Icon
	const [anchorEl, setAnchorEl] = useState(null);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		history.push("/");
		dispatch({ type: "LOGOUT" });
	};
	return (
		<>
			<IconButton onClick={handleClick}>
				<MoreVertIcon />
			</IconButton>
			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem>
					<ListItemIcon>
						<PersonIcon fontSize='small' style={{ color: "black" }} />
					</ListItemIcon>
					<Link
						to='/login'
						style={{ color: "#16243e", textDecoration: "none" }}
					>
						Login
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<PersonIcon fontSize='small' style={{ color: "black" }} />
					</ListItemIcon>
					<Link
						to='/register'
						style={{ color: "#16243e", textDecoration: "none" }}
					>
						Register
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<FormatListBulletedRoundedIcon
							fontSize='small'
							style={{ color: "black" }}
						/>
					</ListItemIcon>
					<Link
						to='/wishlist'
						style={{ color: "#16243e", textDecoration: "none" }}
					>
						Wishlist
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<InboxIcon fontSize='small' style={{ color: "black" }} />
					</ListItemIcon>
					<Link
						to='/reservation'
						style={{ color: "#16243e", textDecoration: "none" }}
					>
						Reservations
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<ExitToAppRoundedIcon fontSize='small' style={{ color: "black" }} />
					</ListItemIcon>
					<Link
						to='/'
						onClick={() => handleLogout()}
						style={{ color: "#16243e", textDecoration: "none" }}
					>
						Logout
					</Link>
				</StyledMenuItem>
			</StyledMenu>
		</>
	);
};

export default UserInfo;
