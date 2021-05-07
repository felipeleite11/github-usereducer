import styled from 'styled-components'

export const Container = styled.input.attrs({
    type: 'text'
})`
	padding: 14px;
	background-color: ${({ status }) => status === null ? '#FFF' : status ? 'var(--success)' : 'var(--error)' } ;
	color: var(--text-dark);
	font-size: 18px;
	border-radius: 4px;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
	width: auto;
`
