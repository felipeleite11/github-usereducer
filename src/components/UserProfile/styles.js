import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-columns: 220px auto;
	grid-template-rows: 50px 30px auto;
	grid-template-areas: 
		'avatar name'
		'avatar username'
		'avatar bio';
	width: 700px;
`

export const Avatar = styled.div`
	grid-area: avatar;
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	object-fit: cover;
	width: 160px;
	height: 160px;
	border-radius: 50%;
	justify-self: center;
`

export const Name = styled.h1`
	margin: 0;
`

export const Username = styled.h2`
	font-size: 18px;
	margin: 0;
`

export const Bio = styled.p`
	font-size: 14px;
	line-height: 24px;
`