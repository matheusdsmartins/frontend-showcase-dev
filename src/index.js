import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Global } from '@emotion/core'

import App from './app'
import configureStore from './store/configureStore'

import globalStyles from './index.style'
import ThemeSwitcher from './utils/ThemeSwitcher'

const { persistor, store } = configureStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

const renderApp = NextApp => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <Global styles={globalStyles} />
        <ThemeSwitcher>
          <NextApp />
        </ThemeSwitcher>
      </PersistGate>
    </Provider>,
    document.getElementById('app')
  )
}

renderApp(App)
