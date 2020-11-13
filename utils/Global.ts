import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
        font-size: 16px;
        padding: 0 4rem;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
        font-family: 'Roboto';
		background-color: white;
    	color: black;
		margin: 0 auto;
	}
	ul, ol {
		list-style: none;
	}
`;
