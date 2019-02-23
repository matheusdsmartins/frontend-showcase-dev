import React from 'react'
import v4 from 'uuid'

import { humanizeCamelCase } from '../../utils/normalizers'

import { Card } from './styles/BeerCard.styles'
import Badge from '../badge/Badge'

const permittedKeys = ['first_brewed', 'ph', 'srm', 'abv', 'ibu', 'ebc']

const BeerCard = ({ item, onClick }) => {
  return (
    <Card onClick={() => onClick(item)}>
      <h2>{item.name}</h2>
      {Object.keys(item)
        .filter(key => permittedKeys.includes(key))
        .map(key => (
          <Badge
            key={v4()}
            style={{
              marginBottom: 8
            }}
          >
            <strong>{humanizeCamelCase(key)}</strong>: {item[key]}
          </Badge>
        ))}
      <p>{item.description.slice(0, 140)}...</p>
    </Card>
  )
}

export default BeerCard
