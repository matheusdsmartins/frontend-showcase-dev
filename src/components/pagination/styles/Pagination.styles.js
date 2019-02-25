import { css } from '@emotion/core'
import styled from '@emotion/styled'

const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
`

export const PageButton = styled('a')`
  background-color: ${({ active }) => (active ? '#CA4C1A' : 'white')};
  ${button} margin: 0 2px;
  border-radius: 4px;
  color: ${({ active }) => (active ? 'white' : 'black')};
`

export const navButton = css`
  ${button} &[disabled] {
    color: #ddd;
  }
`

export const wrapper = css`
  display: flex;
  align-items: center;
`
