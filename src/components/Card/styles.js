import styled from 'styled-components'

export const Container = styled.div.attrs({
    className: 'card'
})`
	background-color: var(--card);
	padding: 30px 30px 40px;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
	color: var(--text);
	display: flex;
	flex-direction: column;
	width: auto;
	margin: 10px 30px;

	> h1 {
		font-size: 24px;
		margin-bottom: 24px;
	}
`
