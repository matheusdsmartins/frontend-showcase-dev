import React from 'react'
import v4 from 'uuid'

import { humanizeCamelCase } from '../../utils/normalizers'
import Badge from '../badge/Badge'

import { container, itemMeta, Box, meta } from './styles/Beer.styles'

const permittedKeys = ['first_brewed', 'ph', 'srm', 'abv', 'ibu', 'ebc']

const Beer = ({ item }) => (
  <div css={container}>
    <h1>
      {item.name}
      <br />
      <small>
        <em>{item.tagline}</em>
      </small>
    </h1>
    <p style={{ marginBottom: 8 }}>
      <small>Contributed by: {item.contributed_by}</small>
    </p>
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <img
        style={{
          width: '120px',
          height: 'auto'
        }}
        src={item.image_url}
      />
    </div>
    <Box className={itemMeta}>
      {Object.keys(item)
        .filter(key => permittedKeys.includes(key))
        .map(key => (
          <span key={v4()} css={meta}>
            <strong>{humanizeCamelCase(key)}</strong>:{' '}
            {Array.isArray(item[key]) ? (
              item[key].map(subitem => {
                return typeof subitem !== 'object' ? (
                  <Badge key={v4()}>{subitem}</Badge>
                ) : (
                  Object.keys(item)
                    .filter(key => permittedKeys.includes(key))
                    .map(key => (
                      <Badge key={v4()}>
                        <strong>{humanizeCamelCase(key)}</strong>: {item[key]}
                      </Badge>
                    ))
                )
              })
            ) : (
              <Badge>{item[key]}</Badge>
            )}
          </span>
        ))}
    </Box>
    <Box>
      <h2>Description</h2>
      <p>{item.description}</p>
    </Box>
    <Box>
      <h2>Brewers Tips</h2>
      <p>{item.brewers_tips}</p>
    </Box>
    <Box>
      <h2>Food Pairing</h2>
      <ul
        style={{
          listStyleType: 'numeric'
        }}
      >
        {item.food_pairing.map(foodPair => <li key={v4()}>{foodPair}</li>)}
      </ul>
    </Box>
  </div>
)

export default Beer
