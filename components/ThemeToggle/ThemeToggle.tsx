import { DarkThemeIcon, LightThemeIcon } from "icons";
import { FC } from "react";
import { Modes } from "types";
import { ToggleButton } from "./ThemeToggle.styled";

interface ThemeToggleProps {
	mode: Modes;
	setTheme: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ mode, setTheme }) => {
	return (
		<ToggleButton onClick={setTheme}>
			{mode === Modes.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
		</ToggleButton>
	);
};

export default ThemeToggle;
