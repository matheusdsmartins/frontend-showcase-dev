import styled from '@emotion/styled'
// import { css } from '@emotion/core'

export const Container = styled('div')`
  background-color: ${({ theme }) => theme.foreground};
  width: 98px;
  padding: 32px 0;
  z-index: 100;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  margin-right: 16px;
`

export const SideMenu = styled('ul')`
  text-align: center;
  li {
    padding: 8px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 75;
        top: 0;
        left: 0;
        box-shadow: inset 0 10px 5px -10px rgba(0, 0, 0, 0.25),
          inset 0 -10px 5px -10px rgba(0, 0, 0, 0.25);
      }
    }
  }
`
