import axios from 'axios'

const { REACT_APP_SERVER_URL, REACT_APP_LOCAL_SERVER_PORT } = process.env

const backendHost = REACT_APP_SERVER_URL || `http://localhost:${REACT_APP_LOCAL_SERVER_PORT}`

const instance = axios.create({
  baseURL: backendHost
})

export default instance
