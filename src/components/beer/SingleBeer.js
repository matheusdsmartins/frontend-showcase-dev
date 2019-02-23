import React from 'react'

import { withBeer } from '../hoc/BeerHOC'

import Beer from './Beer'

import { InfoBox } from './styles/SingleBeer.styles'

const SingleBeer = ({ item }) => {
  return (
    <InfoBox>
      {item ? (
        <Beer item={item} />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <p
            style={{
              fontWeight: 'bold',
              fontSize: 26,
              textTransform: 'uppercase',
              textAlign: 'center'
            }}
          >
            Pick a beer<br />
            <small>For further details</small>
          </p>
        </div>
      )}
    </InfoBox>
  )
}

export default withBeer(SingleBeer)
