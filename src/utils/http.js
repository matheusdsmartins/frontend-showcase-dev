import axios from 'axios'

const { REACT_APP_SERVICE, REACT_APP_LOCAL_SERVER_PORT } = process.env

const servicesUrls = {
  jsonApi: `http://localhost:${REACT_APP_LOCAL_SERVER_PORT}`,
  punkApi: 'https://api.punkapi.com/v2/'
}

const instance = axios.create({
  baseURL: servicesUrls[REACT_APP_SERVICE]
})

export default instance
