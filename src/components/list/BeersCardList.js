import React from 'react'

import { withBeers } from '../hoc/BeersHOC'
import BeerCard from '../card/BeerCard'
import Pagination from '../pagination/Pagination'

import { CardGrid } from './styles/BeersCardList.styles'

const BeersList = ({ items, setCurrentBeer, pagination, fetchBeers }) => {
  return (
    <>
      <Pagination
        style={{
          marginBottom: 8,
          justifyContent: 'flex-end'
        }}
        config={{
          ...pagination,
          total: 100
        }}
        onNavigation={fetchBeers}
      />
      <CardGrid>
        {items.map(item => (
          <BeerCard key={item.id} item={item} onClick={setCurrentBeer} />
        ))}
      </CardGrid>
    </>
  )
}

export default withBeers(BeersList)
