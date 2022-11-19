import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import useTheme from "@/hooks/useTheme";
import Navbar from "components/Navbar";
import {
	GradientAccent,
	Heading,
	Introduction,
	RoleAndCompany,
	RoleDescription,
	RoleDuration,
	SectionHeading,
} from "components/Typography";
import {
	DarkThemeIcon,
	GitHubIcon,
	LightThemeIcon,
	LinkedInIcon,
	StackOverflowIcon,
	URLIcon,
} from "icons";
import { IntroductionSection, Main } from "layouts";
import { introduction } from "meta/introduction";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/Globals";

export default function Home() {
	const [theme, mode, setTheme, getTheme] = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar />
			<Main>
				<ThemeToggle mode={mode} setTheme={setTheme} />
				<Heading>
					<GradientAccent>Full-Stack</GradientAccent> Web Developer & Designer
					<GradientAccent>.</GradientAccent>
				</Heading>
				<IntroductionSection>
					{introduction.map(data => (
						<Introduction key={data.key}>{data.text}</Introduction>
					))}
				</IntroductionSection>
				<SectionHeading>Work Experience</SectionHeading>
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
				<DarkThemeIcon />
			</Main>
		</ThemeProvider>
	);
}
