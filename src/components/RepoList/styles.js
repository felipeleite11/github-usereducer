import styled from 'styled-components'

export const Container = styled.div`
	summary {
		font-weight: 800;
		cursor: pointer;
		margin: 40px 0 20px; 

		&:hover {
			text-decoration: underline;
		}
	}

	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 8px;
	}
`
