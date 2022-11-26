import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    *, *::before, *::after {
        margin: 0px;
        padding: 0px;

        box-sizing: border-box;
        font-size: 62.5%;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        
        background: ${props => props.theme.color.background};
        color: ${props => props.theme.color.text};
    
        font-family: "Urbanist", sans-serif, serif;
        
    }

    ::selection {
        background-color: ${({ theme }) => theme.color.purpleSelection};
        color: ${props => props.theme.color.text};
        background-blend-mode: difference;
    }

    ::-webkit-scrollbar {
	width: 1vw;
	min-width: 2px;
	max-width: 10px;
}

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.color.purpleSelection};
        &:hover {
            background: ${({ theme }) => theme.color.purpleLight};
        }
    }

`;

export default GlobalStyle;
