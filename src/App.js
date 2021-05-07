import React from 'react'

import GlobalStyles from './styles/global'

import { GlobalContextProvider } from './contexts/GlobalContext' 

import SearchCard from './components/SearchCard'
import ResultCard from './components/ResultCard'

import { Container } from './styles/app'

function App() {
    return (
        <GlobalContextProvider>
            <Container>
                <GlobalStyles />
                
                <SearchCard />

                <ResultCard />
            </Container>
        </GlobalContextProvider>
    )
}

export default App
