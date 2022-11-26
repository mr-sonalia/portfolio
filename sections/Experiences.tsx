import { Card, ExperienceSection, SectionHeading } from "components";
import { experiences } from "meta";

type Props = {};

const Experiences = (props: Props) => {
	return (
		<ExperienceSection>
			<SectionHeading>Experiences</SectionHeading>
			{experiences.map(exp => (
				<Card
					key={exp.id}
					title={exp.roleAndCompany}
					sub={exp.duration}
					description={exp.description}
				/>
			))}
		</ExperienceSection>
	);
};

export default Experiences;
