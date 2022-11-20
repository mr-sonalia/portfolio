import styled from "styled-components";

export const LinkContainer = styled.span`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
export const LinkText = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 1.6rem;
	line-height: 2.4rem;

	color: ${({ theme }) => theme.color.gray};
`;
