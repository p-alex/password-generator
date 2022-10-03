import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        background-color:#131218;
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
