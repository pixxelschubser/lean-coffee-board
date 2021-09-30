import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "Montserrat", Arial, sans-serif;
		text-decoration: none;
		color: inherit;
	}

	body {
		color: black;
	}
`;

export default GlobalStyles;
