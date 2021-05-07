import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function RepoItem({ name, url }) {
    return (
        <Container>
            <a href={url} target="_blank" rel="noreferrer">{name}</a>
        </Container>
    )
}

RepoItem.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
}