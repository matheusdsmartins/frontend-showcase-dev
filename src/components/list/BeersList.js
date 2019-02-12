import React from 'react'

import { withBeers } from './EnhanceBeersList'

const BeersList = ({
  items
}) => (
  <div>
    Beers!
  </div>
)

export default withBeers(BeersList)
