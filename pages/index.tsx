import { AnimationContainer, AnimationItem } from "animations";
import { Main, Navbar, ThemeToggle } from "components";
import { useTheme } from "hooks";
import { Experiences, Hero, Skills } from "sections";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles";

export default function Home() {
	const [theme, mode, setTheme, _getTheme] = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar />

			<AnimationContainer>
				<AnimationItem delay={1} />
				<AnimationItem delay={0.5} />
				<AnimationItem delay={1.5} />
				<AnimationItem delay={2} />
				<AnimationItem delay={1.25} />
			</AnimationContainer>

			<ThemeToggle mode={mode} setTheme={setTheme} />
			<Main>
				<Hero />
				<Skills />
				<Experiences />
			</Main>
		</ThemeProvider>
	);
}
