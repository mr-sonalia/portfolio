import { Navbar, ThemeToggle } from "components";
import { useTheme } from "hooks";
import { Main } from "layouts";
import { Experiences, Hero, Projects, Skills } from "sections";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles";

export default function Home() {
	const [theme, mode, setTheme, _getTheme] = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar />
			<ThemeToggle mode={mode} setTheme={setTheme} />
			<Main>
				<Hero />
				<Skills />
				<Experiences />
				<Projects />
			</Main>
		</ThemeProvider>
	);
}
