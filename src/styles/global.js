import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
		--background: #423E3B;
		--card: #5E565A;
		--text: #A9CBB7;
		--text-dark: #423E3B;
		--button: #FCA17D;
		--button-hover: #ed9c7b;
		--error: #e57373;
		--success: #a5d6a7;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-shadow: border-box;
	}

	body {
		background-color: var(--background);
		font-family: Ubuntu, sans-serif;
	}

	#root {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		margin: 40px 0;
	}

	button,
	input {
		border: 0;
		color: var(--text-dark);
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`

export default GlobalStyles