import React from 'react'
import { LocalDrink } from '@material-ui/icons'

import { Container, SideMenu } from './styles/NavBar.styles'

const NavBar = props => (
  <Container>
    <SideMenu>
      <li>
        <LocalDrink /> Beers
      </li>
    </SideMenu>
  </Container>
)

export default NavBar
