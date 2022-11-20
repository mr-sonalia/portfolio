import Link from "next/link";
import { FC } from "react";
import { LinkContainer, LinkText } from "./Link.styled";

type Props = {
	href: string;
	text: string;
	icon: React.ReactNode;
};

const L: FC<Props> = props => {
	return (
		<Link href={props.href} style={{ textDecoration: "none" }}>
			<LinkContainer>
				{props.icon}
				<LinkText>{props.text}</LinkText>
			</LinkContainer>
		</Link>
	);
};

export { L };
