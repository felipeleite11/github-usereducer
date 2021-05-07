import React, { useContext } from 'react'

import { GlobalContext } from '../../contexts/GlobalContext' 

import Card from '../Card'
import Textbox from '../Textbox'

export default function SearchCard() {
    const { searchUsername, setSearchUsername, searchStatus } = useContext(GlobalContext)

    async function handleSearch(username) {
        setSearchUsername(username)
    } 

    return (
        <Card style={{ width: 400 }}>
            <h1>Busca</h1>

            <Textbox 
                onChange={e => { handleSearch(e.target.value) }} 
                value={searchUsername}
                placeholder="Digite um usuário Github"
                status={searchStatus}
            />
        </Card>
    )
}
