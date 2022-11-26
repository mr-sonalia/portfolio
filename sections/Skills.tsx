import { SectionHeading } from "components";
import { SkillChip, SkillChipContainer, SkillsContainer, SkillSection } from "layouts";
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
