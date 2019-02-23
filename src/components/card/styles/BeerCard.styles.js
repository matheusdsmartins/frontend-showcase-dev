import styled from '@emotion/styled'
// import { css } from '@emotion/core'

export const Card = styled('div')`
  padding: 20px;
  display: block;
  background-color: ${({ theme }) => theme.foreground};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  text-align: justify;
  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.35);
  }
  h2 {
    margin-bottom: 8px;
  }
`
