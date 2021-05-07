import React, { useContext } from 'react'

import { GlobalContext } from '../../contexts/GlobalContext'

import RepoItem from '../RepoItem'

import { Container } from './styles'

export default function RepoList() {
    const { repos } = useContext(GlobalContext)
    
    if(!repos) {
        return null
    }

    return (
        <Container>
            <details>
                <summary>Ver {repos.length} repositórios</summary>
                <section>
                    {repos.map(repo => (
                        <RepoItem 
                            key={repo.id} 
                            url={repo.html_url} 
                            name={repo.name} 
                        />
                    ))}
                </section>
            </details>
        </Container>
    )
}
