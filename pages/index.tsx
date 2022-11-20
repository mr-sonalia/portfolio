import Link from "@/components/Link";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import useTheme from "@/hooks/useTheme";
import Navbar from "components/Navbar";
import { GradientAccent, Heading, Introduction } from "components/Typography";
import { ScrollIcon } from "icons";
import {
	HeroLinksSection,
	HeroSection,
	IntroductionSection,
	Main,
	ScrollIconContainer,
} from "layouts";
import { heroSectionUrls } from "meta";
import { introduction } from "meta/introduction";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/Globals";

export default function Home() {
	const [theme, mode, setTheme, getTheme] = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar />
			<ThemeToggle mode={mode} setTheme={setTheme} />
			<Main>
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
							<Link
								key={item.key}
								icon={<item.icon />}
								href={item.url}
								text={item.name}
							/>
						))}
					</HeroLinksSection>

					<ScrollIconContainer>
						<ScrollIcon />
					</ScrollIconContainer>
				</HeroSection>
				{/* <SectionHeading>Work Experience</SectionHeading>
				<RoleAndCompany>Frontend Software Developer at Neos HealthTech</RoleAndCompany>
				<RoleDuration>Aug 2022 - Present</RoleDuration>
				<RoleDescription>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque purus
					eu sodales dictum. Maecenas congue ante leo, eget mattis nisi vestibulum et.
					Suspendisse lobortis scelerisque risus, eu tincidunt odio pharetra vitae.
					Interdum et malesuada fames ac ante ipsum primis in faucibus.
				</RoleDescription>
				<LinkedInIcon />
				<GitHubIcon />
				<StackOverflowIcon />
				<URLIcon />
				<LightThemeIcon />
				<DarkThemeIcon /> */}
			</Main>
		</ThemeProvider>
	);
}
