import styled from "styled-components";

const Nav = styled.nav`
	width: 100%;
	max-width: 69.6rem;

	margin: auto;
	padding: 2rem;

	display: flex;
	justify-content: space-between;

	position: fixed;
	left: 50%;
	top: 0;
	z-index: 999;

	transform: translateX(-50%);

	backdrop-filter: saturate(60%) blur(1rem);
`;

export default Nav;
