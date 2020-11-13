import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
        font-size: 16px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
        /* font-family: 'Roboto'; */
		background-color: white;
    	color: black;
		padding: 0;
  		margin: 0;
	}
	ul, ol {
		list-style: none;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`;
