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
		color: ${({ theme }) => theme.colors.text};
		background-color: ${({ theme }) => theme.colors.background};
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
