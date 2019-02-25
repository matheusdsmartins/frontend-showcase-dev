import React from 'react'
import v4 from 'uuid'

import AsyncImage from '../image/AsyncImage'
import { humanizeCamelCase } from '../../utils/normalizers'

import { container, ItemMeta, Box, Meta } from './styles/Beer.styles'

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
      <AsyncImage
        style={{
          width: '120px',
          height: 'auto',
          marginBottom: 8
        }}
        imageUrl={item.image_url}
      />
    </div>
    <ItemMeta>
      {Object.keys(item)
        .filter(key => permittedKeys.includes(key))
        .map(key => (
          <Meta key={v4()}>
            <strong>{humanizeCamelCase(key)}</strong>
            <span>{item[key]}</span>
          </Meta>
        ))}
    </ItemMeta>
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
