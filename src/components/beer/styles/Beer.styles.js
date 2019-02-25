import { css } from '@emotion/core'
import styled from '@emotion/styled'

const breakpoints = [1440, 920]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const container = css`
  h1,
  h2 {
    margin-bottom: 8px;
  }
  h1 {
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.65);
  }
`

export const ItemMeta = styled('div')`
  display: flex;
  margin-bottom: 8px;
  width: 100%;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.foreground};
  ${mq[1]} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`

export const Meta = styled('div')`
  display: block;
  width: 100%;
  text-transform: uppercase;
  background-color: white;
  line-height: 1;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  ${mq[0]} {
    flex-direction: row;
  }
  ${mq[1]} {
    width: 50%;
  }
  strong {
    display: block;
    padding: 4px 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.foreground};
  }
  span {
    padding: 4px 10px 4px;
    margin-left: auto;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.foreground};
  }
`

export const Box = styled('div')`
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.foreground};
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  p {
    text-align: justify;
  }
`
