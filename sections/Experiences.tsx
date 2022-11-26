import { Card, SectionHeading } from "components";
import { ExperienceSection } from "layouts";
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
