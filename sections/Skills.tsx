import {
	SectionHeading,
	SkillChip,
	SkillChipContainer,
	SkillsContainer,
	SkillSection,
} from "components";
import { skills } from "meta";

const Skills = () => {
	return (
		<SkillSection>
			<SectionHeading>Skills</SectionHeading>
			<SkillsContainer>
				{skills.map(s => (
					<SkillChipContainer key={s.id}>
						<SkillChip>{s.skill}</SkillChip>
					</SkillChipContainer>
				))}
			</SkillsContainer>
		</SkillSection>
	);
};

export default Skills;
