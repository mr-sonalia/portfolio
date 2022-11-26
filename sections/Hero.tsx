import { GradientAccent, Heading, Introduction, Link } from "components";
import { ScrollIcon } from "icons";
import { HeroLinksSection, HeroSection, IntroductionSection, ScrollIconContainer } from "layouts";
import { heroSectionUrls, introduction } from "meta";

type Props = {};

const Hero = (props: Props) => {
	return (
		<HeroSection>
			<Heading>
				<GradientAccent>Full-Stack</GradientAccent> Web Developer & Designer
				<GradientAccent>.</GradientAccent>
			</Heading>
			<IntroductionSection>
				{introduction.map(data => (
					<Introduction key={data.key}>{data.text}</Introduction>
				))}
			</IntroductionSection>
			<HeroLinksSection>
				{heroSectionUrls.map(item => (
					<Link key={item.key} icon={<item.icon />} href={item.url} text={item.name} />
				))}
			</HeroLinksSection>
			<ScrollIconContainer>
				<ScrollIcon />
			</ScrollIconContainer>
		</HeroSection>
	);
};

export default Hero;
