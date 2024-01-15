import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://64c94ba9b2980cec85c21e51.mockapi.io/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 3000
})

const apiClient = function (options) {
  const onSuccess = function (response) {
    console.debug('Request Successful!', response)
    return response.data
  }
  const onError = function (error) {
    console.error('Request Failed:', error.config)
    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Data:', error.response.data)
      console.error('Headers:', error.response.headers)
    } else {
      console.error('Error Message:', error.message)
    }
    return Promise.reject(error.response || error.message)
  }

  return axiosInstance(options)
    .then(onSuccess)
    .catch(onError)
}

export default apiClient