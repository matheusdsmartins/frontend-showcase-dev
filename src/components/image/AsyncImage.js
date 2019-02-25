import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Placeholder from '../../assets/beer-placeholder.png'

const fetchImage = async url => {
  const image = await axios
    .get(url, {
      responseType: 'arraybuffer'
    })
    .then(response => {
      let image = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      )
      return `data:${response.headers[
        'content-type'
      ].toLowerCase()};base64,${image}`
    })
  return image
}

function AsyncImage ({ imageUrl, style }) {
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState(null)
  useEffect(
    () => {
      setIsLoading(true)
      fetchImage(imageUrl)
        .then(res => {
          setImage(res)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
    },
    [imageUrl]
  )
  return (
    <div
      style={{
        display: 'inline-block',
        ...style
      }}
    >
      <img
        style={{
          width: 'inherit',
          height: 'inherit',
          lineHeight: 1,
          display: 'block'
        }}
        src={isLoading ? Placeholder : image}
      />
      {isLoading && <p>Loading...</p>}
    </div>
  )
}

export default AsyncImage
