// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		color: {
			gray: string;
			purpleLight: string;
			purpleDark: string;
			purpleSelection: string;
			background: string;
			text: string;
		};
	}
}
