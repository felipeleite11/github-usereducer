import React, { useContext } from 'react'

import { GlobalContext } from '../../contexts/GlobalContext'

import { Container, Avatar, Name, Username, Bio } from './styles'

export default function UserProfile() {
    const { user } = useContext(GlobalContext)

    const { avatar, name, username, bio } = user

    return (
        <Container>
            <Avatar src={avatar} />
            <Name>{name}</Name>
            <Username>{username}</Username>
            <Bio>{bio}</Bio>
        </Container>
    )
}
