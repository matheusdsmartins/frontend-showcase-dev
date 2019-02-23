import React, { Component } from 'react'
import { connect } from 'react-redux'

export const withBeer = WrappedComponent => {
  const mapStateToProps = ({ beers }) => ({
    item: beers.current
  })

  class BeerHOC extends Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return connect(mapStateToProps)(BeerHOC)
}
