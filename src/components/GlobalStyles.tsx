import { createGlobalStyle } from 'styled-components'
import { background, fontFamily, fontWeight } from './UI/_variables'

const GlobalStyles = createGlobalStyle`
*,
	*:after,
	*:before {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: ${fontFamily.default};
		font-weight: ${fontWeight.regular};
		font-optical-sizing: auto;
		font-style: normal;
		font-variation-settings:
			"slnt" 0;
	}

	html {
		font-size: 16px;
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		background-color: ${background.body};
	}
`

export default GlobalStyles
