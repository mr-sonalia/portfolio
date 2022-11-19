import styled from "styled-components";

export const ToggleButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 4rem;
	height: 4rem;

	border: 1px solid ${({ theme }) => theme.color.gray};
	border-radius: 2rem;

	background: transparent;

	cursor: pointer;
`;
