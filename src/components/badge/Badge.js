import React from 'react'

import { badge } from './styles/Badge.styles'

const Badge = ({ style, children }) => (
  <span style={style} css={badge}>
    {children}
  </span>
)

export default Badge
