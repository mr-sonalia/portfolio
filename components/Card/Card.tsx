import { CardDescription, CardSub, CardTitle } from "components/Typography";
import { FC } from "react";
import {
	CardBody,
	CardContainer,
	CardHeader,
	CardLeftSection,
	CardRightSection,
	CompanyIcon,
} from "./Card.styled";

type CardProps = {
	title: string;
	sub: string;
	description: string;
	urls?: {
		url: string;
		icon: () => JSX.Element;
	}[];
};

const Card: FC<CardProps> = props => {
	return (
		<CardContainer>
			<CardLeftSection>
				<CompanyIcon />
			</CardLeftSection>
			<CardRightSection>
				<CardHeader>
					<CardTitle>{props.title}</CardTitle>
					<CardSub>{props.sub}</CardSub>
					{/* {props.urls && props} */}
				</CardHeader>
				<CardBody>
					<CardDescription>{props.description}</CardDescription>
				</CardBody>
			</CardRightSection>
		</CardContainer>
	);
};

export default Card;
