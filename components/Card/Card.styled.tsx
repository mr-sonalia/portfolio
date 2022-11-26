import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

export const CardLeftSection = styled.section`
	padding: 1rem;
`;
export const CardRightSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	padding: 1rem;
`;

export const CardHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;
export const CardBody = styled.div``;

export const CompanyIcon = styled.div`
	width: 4rem;
	height: 4rem;

	background: ${({ theme }) => theme.color.purpleLight};
	border-radius: 50%;
`;
