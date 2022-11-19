import styled from "styled-components";

export const Accent = styled.span`
	font-style: inherit;
	font-weight: inherit;
	font-size: inherit;
	line-height: inherit;

	background: -webkit-linear-gradient(
		${props => props.theme.color.purpleLight},
		${props => props.theme.color.purpleLight}
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const Heading = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 4.9rem;

	line-height: 5.6rem;
	max-width: 20ch;
`;

export const Introduction = styled.p`
	font-style: normal;
	font-weight: 300;
	font-size: 2rem;
	line-height: 2.6rem;
`;
