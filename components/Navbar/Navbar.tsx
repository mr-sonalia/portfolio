import { NavText, NavTextMuted } from "../Typography";
import Nav, { NavBody } from "./Navbar.styled";

const Navbar = () => {
	return (
		<Nav>
			<NavBody>
				<div>
					<NavText>Yash Sonalia</NavText>
					<NavTextMuted>sonaliayash@gmail.com</NavTextMuted>
				</div>
				<div>
					<NavTextMuted>Kolkata, WB</NavTextMuted>
					<NavTextMuted alignment="right">India</NavTextMuted>
				</div>
			</NavBody>
		</Nav>
	);
};

export default Navbar;
