import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-family: 'Roboto';
		font-size: 16px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		color: ${({ theme }) => theme.colors.text};
		background-color: ${({ theme }) => theme.colors.background};
		padding: 0;
  		margin: 0;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`;
