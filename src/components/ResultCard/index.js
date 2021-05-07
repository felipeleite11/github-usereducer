import React, { useContext } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { GlobalContext } from '../../contexts/GlobalContext'

import UserProfile from '../UserProfile'
import RepoList from '../RepoList'

import { Container } from './styles'

export default function ResultCard() {
    const { user, setSearchUsername } = useContext(GlobalContext)

    if(!user) {
        return null
    }

    return (
        <Container>

            <FiArrowLeft 
                size={24} 
                onClick={() => { setSearchUsername('') }} 
            />

            <UserProfile />

            <RepoList />

        </Container>
    )
}
