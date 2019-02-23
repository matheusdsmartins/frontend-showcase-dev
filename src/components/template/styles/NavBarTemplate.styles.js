import styled from '@emotion/styled'
// import { css } from '@emotion/core'

export const Container = styled('div')`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  height: 100%;
`

export const Content = styled('div')`
  width: 100%;
`
