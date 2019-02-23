import emotionNormalize from 'emotion-normalize'
import { css } from '@emotion/core'

export default css`
  ${emotionNormalize} @import url(https://fonts.googleapis.com/css?family=Open+Sans);
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #app {
    height: 100%;
    font-family: 'Open Sans';
  }
  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    line-height: 1.2;
  }
`
