import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const container = css`
  h1,
  h2,
  img {
    margin-bottom: 8px;
  }
  h1 {
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.65);
  }
  p {
    text-align: justify;
  }
`

export const itemMeta = css`
  span:not(:last-child) {
    margin-right: 8px;
  }
`

export const meta = css`
  text-transform: capitalize;
  strong {
    text-transform: capitalize;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`

export const Box = styled('div')`
  padding: 10px 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.foreground};
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
