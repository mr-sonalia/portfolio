import { AnimationContainer, AnimationItem } from "animations";
import { Main, Navbar, ThemeToggle } from "components";
import { useTheme } from "hooks";
import Head from "next/head";
import { Experiences, Hero, Skills } from "sections";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles";

export default function Home() {
	const [theme, mode, setTheme, _getTheme] = useTheme();

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Yash Sonalia | Full-Stack Dev.</title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Navbar />

				<AnimationContainer>
					{/* <AnimationItem delay={1} /> */}
					<AnimationItem delay={0.5} />
					<AnimationItem delay={1.5} />
					<AnimationItem delay={2} />
					{/* <AnimationItem delay={1.25} /> */}
				</AnimationContainer>

				<ThemeToggle mode={mode} setTheme={setTheme} />
				<Main>
					<Hero />
					<Skills />
					<Experiences />
				</Main>
			</ThemeProvider>
		</>
	);
}
