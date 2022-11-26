import { useState } from "react";
import { DefaultTheme } from "styled-components";
import { Modes } from "types";
import { darkTheme, lightTheme } from "../styles";

type UseThemeReturnValues = [DefaultTheme, Modes, () => void, () => DefaultTheme];

const useTheme = (): UseThemeReturnValues => {
	const [mode, setMode] = useState<Modes>(Modes.DARK);
	const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

	const changeTheme = () => {
		setMode(prev => {
			if (prev === Modes.DARK) {
				setTheme(lightTheme);
				return Modes.LIGHT;
			} else {
				setTheme(darkTheme);
				return Modes.DARK;
			}
		});
	};

	const getTheme = () => {
		return theme;
	};
	return [theme, mode, changeTheme, getTheme];
};

export default useTheme;
