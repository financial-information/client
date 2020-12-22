import axios from 'axios'



export function request(config) {

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    withCredentials: true
  })
  axios.defaults.withCredentials = true; // 允许携带cookie

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config.url)
}

export function requestPost(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000
  })


  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance.post(config.url, config.params)
}


export function requestPut(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  
  return instance.put(config.url, config.params)
}



export function requestHaveData(config) {

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    withCredentials: true
  })
  axios.defaults.withCredentials = true; // 允许携带cookie

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config.url, config.params)
}
