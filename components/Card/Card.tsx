import { CardDescriptionItem, CardDescriptionList, CardSub, CardTitle } from "components";
import Image from "next/image";
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
	description: string[];
	logo: string;
	urls?: {
		url: string;
		icon: () => JSX.Element;
	}[];
};

const Card: FC<CardProps> = props => {
	return (
		<CardContainer>
			<CardLeftSection>
				<CompanyIcon>
					<Image src={props.logo} alt="Company Icon" width="34" height="34" />
				</CompanyIcon>
			</CardLeftSection>
			<CardRightSection>
				<CardHeader>
					<CardTitle>{props.title}</CardTitle>
					<CardSub>{props.sub}</CardSub>
					{/* {props.urls && props} */}
				</CardHeader>
				<CardBody>
					<CardDescriptionList>
						{props.description.map((desc, i) => (
							<CardDescriptionItem key={i}>{desc}</CardDescriptionItem>
						))}
					</CardDescriptionList>
				</CardBody>
			</CardRightSection>
		</CardContainer>
	);
};

export default Card;
