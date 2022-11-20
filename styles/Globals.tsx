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
        background-blend-mode: difference;
    }
`;

export default GlobalStyle;
