import styled from "styled-components";

export const Main = styled.main`
	max-width: 69.6rem;

	margin: auto;
	padding: 0rem 2rem;

	display: grid;
	gap: 1rem;
`;

const Section = styled.div`
	padding: 2rem 0rem;
	margin-bottom: 4rem;

	display: flex;
	flex-direction: column;

	gap: 2rem;
`;

export const HeroSection = styled.div`
	padding-top: 20rem;
	min-height: 100vh;
`;

export const IntroductionSection = styled.div`
	display: grid;
	gap: 2rem;

	padding: 5rem 0rem 0rem;
`;

export const HeroLinksSection = styled.div`
	padding-top: 4rem;

	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const ScrollIconContainer = styled.div`
	padding-top: 8rem;

	width: 100%;
	display: flex;
	justify-content: center;
`;

// Skills section

export const SkillSection = styled(Section)``;

export const SkillsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 1rem;

	padding-left: 1rem;
`;

export const SkillChipContainer = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1.6rem;
	gap: 1.4rem;

	border: 0.1rem solid ${props => props.theme.color.purpleSelection};
	border-radius: 3rem;

	background: ${props => props.theme.color.background};
	backdrop-filter: blur(0.3rem);

	transition: background 0.1s ease-out;
	:hover {
		background: ${props => props.theme.color.purpleHover};
	}
`;

export const SkillChip = styled.p`
	font-style: normal;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 1.6rem;

	color: ${props => props.theme.color.gray};
`;

// Experiences section

export const ExperienceSection = styled(Section)``;
