import { css } from '@emotion/core'

export const badge = css`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 10px;
  background-color: white;
  text-transform: capitalize;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  transition: background-color 0.2s ease;
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`
