import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchBeers } from '../../store/beers/actions'

export const withBeers = WrappedComponent => {
  const mapStateToProps = ({ beers }) => ({
    items: beers.items
  })

  const mapDispatchToProps = dispatch => (
    bindActionCreators({
      fetchBeers
    }, dispatch)
  )

  class BeersHOC extends Component {
    componentDidMount () {
      this.props.fetchBeers()
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(BeersHOC)
}