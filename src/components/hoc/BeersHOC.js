import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchBeers, setCurrentBeer } from '../../store/beers/actions'

export const withBeers = WrappedComponent => {
  const mapStateToProps = ({ beers }) => ({
    items: beers.items,
    pagination: beers.pagination,
    isFetching: beers.isFetching
  })

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        fetchBeers,
        setCurrentBeer
      },
      dispatch
    )

  class BeersHOC extends Component {
    componentDidMount () {
      this.props.fetchBeers()
    }

    render () {
      if (this.props.isFetching) return <p>Loading...</p>

      return <WrappedComponent {...this.props} />
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(BeersHOC)
}
