import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'

import themes from './themes'

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
})

class ThemeSwitcher extends Component {
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme
  }

  render () {
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    )
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === themes.light ? themes.dark : themes.light
      }
    })
  }
}

export default ThemeSwitcher
