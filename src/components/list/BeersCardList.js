import React from 'react'

import { withBeers } from '../hoc/BeersHOC'
import BeerCard from '../card/BeerCard'

import { CardGrid } from './styles/BeersCardList.styles'

const BeersList = ({ items, setCurrentBeer }) => {
  console.log(items)
  return (
    <CardGrid>
      {items.map(item => (
        <BeerCard key={item.id} item={item} onClick={setCurrentBeer} />
      ))}
    </CardGrid>
  )
}

export default withBeers(BeersList)
