import styled, { keyframes } from "styled-components";

const initialHeight = "10rem";
const itemWidth = "0.4rem";
const animationDuration = "12s";

const rain = keyframes`
  0% {
    transform: translateX(-50%) translateY(-${initialHeight});
  }

  100% {
    transform: translateX(-50%) translateY(100vh);
  }
`;

export const AnimationContainer = styled.div`
	position: fixed;
	z-index: -1;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	display: flex;
	justify-content: space-evenly;
`;

export const AnimationItem = styled.div<{ delay: number }>`
	width: 1px;
	height: 100%;
	background-color: ${({ theme }) => theme.color.gray};
	opacity: 0.15;

	position: relative;
	::after {
		content: "";

		position: absolute;
		left: 50%;
		transform: translateX(-50%) translateY(-${initialHeight});

		width: ${itemWidth};
		height: ${initialHeight};

		background-color: ${({ theme }) => theme.color.purpleLight};

		animation: ${rain} ${animationDuration} linear ${({ delay }) => delay}s infinite;
	}
`;
