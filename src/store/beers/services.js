import http from '../../utils/http'

const { REACT_APP_SERVICE: currentService } = process.env

const servicePaginationParams = {
  punkApi: {
    per: 'per_page',
    page: 'page'
  },
  jsonApi: {
    per: '_limit',
    page: '_page'
  }
}

// Endpoints'
const beersEndpoint = '/beers'

export const fetchBeers = ({ params: { per, page, ...rest } }) => {
  return http
    .get(beersEndpoint, {
      params: {
        [servicePaginationParams[currentService]['page']]: page,
        [servicePaginationParams[currentService]['per']]: per,
        ...rest
      }
    })
    .then(({ data }) => data)
}

export const fetchBeer = id => {
  return http.get(`${beersEndpoint}/${id}`).then(({ data }) => data)
}
