import { NavText, NavTextMuted } from "../Typography";
import Nav from "./Navbar.styled";

const Navbar = () => {
	return (
		<Nav>
			<div>
				<NavText>Yash Sonalia</NavText>
				<NavTextMuted>sonaliayash@gmail.com</NavTextMuted>
			</div>
			<div>
				<NavTextMuted>Kolkata, WB</NavTextMuted>
				<NavTextMuted alignment="right">India</NavTextMuted>
			</div>
		</Nav>
	);
};

export default Navbar;
