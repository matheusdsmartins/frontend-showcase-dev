import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import reverse from 'lodash/reverse'

import { privateRoutes, publicRoutes, notLoggedRoutes } from './pathUrls'
import RouteWithTemplate from './RouteWithTemplate'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPage from '../pages/LoginPage'

const mapStateToProps = state => {
  return {
    isLogged: false
  }
}

const Routes = ({ isLogged }) => {
  const defaultPrivateRoute = privateRoutes.find(route => route.default)

  const setRoute = route =>
    route.template ? (
      <RouteWithTemplate {...route} key={route.path} exact />
    ) : (
      <Route key={route.path} {...route} exact />
    )

  /**
   * This preserves the path for redirect to wished page after login
   * @param {*} route
   */
  const setPrivateRoute = route => {
    return setRoute({
      ...route,
      template: isLogged ? route.template : undefined,
      component: isLogged ? route.component : LoginPage
    })
  }

  const setRedirect = route => (
    <Redirect
      key={route.path}
      from={route.path}
      to={defaultPrivateRoute.path}
      exact
    />
  )

  const routesPrecedence = [
    privateRoutes.map(setPrivateRoute),
    notLoggedRoutes.map(isLogged ? setRedirect : setRoute),
    publicRoutes.map(setRoute)
  ]

  /**
   * Two precedence rules:
   * 1 - User is Logged: Private Routes > Public Routes
   * 2 - User is Not Logged: Public Routes > Not Logged Routes > Private Routes
   *
   * These two rules allow overwrites on direction of user status, easing the route configuration.
   */
  const routes = isLogged ? routesPrecedence : reverse(routesPrecedence)

  return (
    <Switch>
      {routes}
      <Route component={NotFoundPage} />
    </Switch>
  )
}

Routes.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps)
)

export default enhance(Routes)
