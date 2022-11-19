import Navbar from "components/Navbar";
import { Accent, Heading, Introduction } from "components/Typography";
import { IntroductionSection, Main } from "Layouts";
import { introduction } from "meta/introduction";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/Globals";
import { darkTheme, lightTheme } from "styles/Theme";

enum Modes {
	LIGHT,
	DARK,
}

export default function Home() {
	const [mode, setMode] = useState<Modes>(Modes.DARK);

	const theme = mode === Modes.LIGHT ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar />
			<Main>
				<Heading>
					<Accent>Full-Stack</Accent> Web Developer & Designer<Accent>.</Accent>
				</Heading>
				<IntroductionSection>
					{introduction.map(data => (
						<Introduction key={data.key}>{data.text}</Introduction>
					))}
				</IntroductionSection>
			</Main>
		</ThemeProvider>
	);
}
