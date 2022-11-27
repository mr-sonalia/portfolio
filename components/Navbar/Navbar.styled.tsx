import styled from "styled-components";

const Nav = styled.nav`
	width: 100%;

	margin: auto;

	position: fixed;
	left: 50%;
	top: 0;
	z-index: 999;

	transform: translateX(-50%);

	backdrop-filter: saturate(60%) blur(0.8rem);
`;

export const NavBody = styled.div`
	margin: auto;
	padding: 2rem;

	max-width: 69.6rem;

	display: flex;
	justify-content: space-between;
`;

export default Nav;
