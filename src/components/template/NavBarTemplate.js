import React from 'react'

import NavBar from '../navbar/NavBar'

import { Container, Content } from './styles/NavBarTemplate.styles'

const NavBarTemplate = ({ children }) => (
  <Container>
    <NavBar />
    <Content>{children}</Content>
  </Container>
)

export default NavBarTemplate
