'use strict'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '6'
        }
      }
    ],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop'
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-json-strings',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        proposal: 'minimal'
      }
    ],
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-function-bind'
  ],
  env: {
    production: {
      plugins: [
        [
          'emotion',
          {
            hoist: true
          }
        ]
      ]
    },
    development: {
      plugins: [
        [
          'emotion',
          {
            sourceMap: true,
            autoLabel: true
          }
        ]
      ]
    }
  }
}
