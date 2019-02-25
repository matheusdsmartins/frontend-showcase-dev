import React, { Component } from 'react'
import v4 from 'uuid'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'

import { PageButton, navButton, wrapper } from './styles/Pagination.styles'

class Pagination extends Component {
  render () {
    const { config: { per, total, page } } = this.props

    return (
      <div css={wrapper} style={this.props.style}>
        <a
          css={navButton}
          onClick={() => this.handleNavigation('prev')}
          disabled={page - 1 < 1}
        >
          <ChevronLeft />
        </a>
        {this.renderNumbers()}
        <a
          css={navButton}
          onClick={() => this.handleNavigation('next')}
          disabled={page + 1 > total / per}
        >
          <ChevronRight />
        </a>
      </div>
    )
  }

  renderNumbers = () => {
    const { config: { per, total, page } } = this.props

    const numbers = Array.from(Array(total / per), (d, i) => i)

    return numbers.map(n => (
      <PageButton
        key={v4()}
        active={n + 1 === page}
        onClick={() => this.handleNavigation(n + 1)}
      >
        {n + 1}
      </PageButton>
    ))
  }

  handleNavigation = nextPage => {
    const { config: { page, total, per }, onNavigation } = this.props

    const goTo = {
      prev: page - 1 > 1 ? page - 1 : 1,
      next: page + 1 < total / per ? page + 1 : total / per
    }

    if (goTo[nextPage] === page || nextPage === page) return null

    onNavigation({
      page: goTo[nextPage] || nextPage
    })
  }
}

export default Pagination
