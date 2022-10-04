import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'JetBrains Mono', monospace;
    }
    body {
        background-color:#131218;
        -webkit-font-smoothing: antialiased;
    }
    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
    input[type="checkbox"]:hover {
            cursor: pointer;
    }
`;
