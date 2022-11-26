import styled from "styled-components";

export const GradientAccent = styled.span`
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

export const SectionHeading = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 2.6rem;

	letter-spacing: 0.6rem;
	text-transform: uppercase;

	color: ${({ theme }) => theme.color.gray};
`;

export const CardTitle = styled.h3`
	font-style: normal;
	font-weight: 500;
	font-size: 2rem;
	line-height: 2.6rem;
`;

export const CardSub = styled.h4`
	font-style: normal;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 2.6rem;

	color: ${({ theme }) => theme.color.gray};
`;

export const CardDescription = styled.p`
	font-style: normal;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 2.4rem;

	color: ${({ theme }) => theme.color.gray};
`;

export const NavText = styled.p`
	font-style: normal;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 1.9rem;
`;

interface INavTextMuted {
	alignment?: "right" | "left" | "center";
	cursor?: "pointer" | "normal";
}
export const NavTextMuted = styled(NavText)<INavTextMuted>`
	color: ${({ theme }) => theme.color.gray};
	text-align: ${props => props.alignment || "left"};
	cursor: ${props => props.cursor || "normal"};
`;
