import React, { useState, createContext, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

export const GlobalContext = createContext()

const apiBaseURL = 'https://api.github.com'

export const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState(null)
    const [searchUsername, setSearchUsername] = useState('')
    const [searchStatus, setSearchStatus] = useState(null)

    const debouncedRef = useRef(
        debounce(value => {
            runSearch(value)
        }, 500)
    ).current

    const runSearch = useCallback(async search => {
        if(search) {
            try {
                const userFinded = await fetch(`${apiBaseURL}/users/${search}`)
                    .then(response => ({ 
                        data: response.json(), 
                        status: response.status 
                    }))
                userFinded.data = await userFinded.data 

                if(userFinded.status === 404) {
                    throw new Error('User not found.')
                }

                if(userFinded.status === 403) {
                    throw new Error('GitHub API unavailable.')
                }

                const { login, avatar_url, name, bio } = userFinded.data

                setUser({
                    name,
                    username: login,
                    avatar: avatar_url,
                    bio
                })

                setSearchStatus(true)

                const reposList = await fetch(`${apiBaseURL}/users/${search}/repos`).then(response => response.json())

                setRepos(reposList)
            } catch {
                setUser(null)
                setSearchStatus(false)
            }
        } else {
            setUser(null)
            setSearchStatus(null)
        }
    }, [])

    useEffect(() => {
        debouncedRef(searchUsername)
    }, [searchUsername])

    return (
        <GlobalContext.Provider value={{
            user,
            searchUsername,
            repos,

            setUser,
            setSearchUsername,

            searchStatus
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

GlobalContextProvider.propTypes = {
    children: PropTypes.object
}