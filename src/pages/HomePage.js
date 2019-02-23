import React from 'react'

import BeersCardList from '../components/list/BeersCardList'
import SingleBeer from '../components/beer/SingleBeer'

const HomePage = props => (
  <div
    style={{
      display: 'flex',
      height: '100%'
    }}
  >
    <div
      style={{
        width: '66.6666%',
        padding: '32px 16px 32px 0',
        overflow: 'auto'
      }}
    >
      <h1
        style={{
          marginBottom: 8,
          paddingBottom: 8,
          borderBottom: '1px solid rgba(0, 0, 0, 0.65)'
        }}
      >
        Beers List
      </h1>
      <BeersCardList />
    </div>
    <div
      style={{
        width: '33.3333%'
      }}
    >
      <SingleBeer />
    </div>
  </div>
)

export default HomePage
