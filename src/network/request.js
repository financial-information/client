import axios from 'axios'

var url= 'http://127.0.0.1:8000/'
export function request(config) {
  const instance = axios.create({
    baseURL: url,
    timeout: 5000
  })


  instance.interceptor.request.use(config => {
    console.log(config)
  }, err => {
    console.log(err)
  })

  instance.interceptor.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}

export function requestPost(config) {
  const instance = axios.create({
    baseURL: url,
    timeout: 5000
  })


  instance.interceptor.request.use(config => {
    console.log(config)
  }, err => {
    console.log(err)
  })

  instance.interceptor.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance.post(config.url, config.params)
}