import styled from "styled-components";

export const ToggleButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 4rem;
	height: 4rem;

	border: 0.1rem solid ${({ theme }) => theme.color.gray};
	border-radius: 2rem;

	background: transparent;

	cursor: pointer;

	position: fixed;
	left: 4rem;
	bottom: 4rem;

	transition: background 0.1s ease-out;
	:hover {
		background: ${props => props.theme.color.purpleHover};
	}
`;
