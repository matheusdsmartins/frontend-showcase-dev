import http from '../../utils/http'

// Endpoints'
const beersEndpoint = '/beers'

export const fetchBeers = ({ params }) => {
  return http.get(beersEndpoint, { params }).then(({ data }) => data)
}

export const fetchBeer = id => {
  return http.get(`${beersEndpoint}/${id}`).then(({ data }) => data)
}
