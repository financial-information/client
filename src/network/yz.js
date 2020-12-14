import { requestPost, request, requestPut } from './request'
import qs from 'qs'

/*  这是get  */
// 企业基本信息
export function getCompanyBasicData(config) {
  return request({
    url: '/company_database/company_basic_data/' + config.id + '.json'
  })
}

export function getCompanyBasicDataByPage(config) {
  return request({
    url: '/company_database/company_basic_data/?page=' + config.page,
  })
}
// 企业财务信息

export function getCompanyFinanceData(config) {
  return request({
    url: '/company_database/company_finance_data/' + config.id + '.json'
  })
}

export function getCompanyFinanceDataByPage(config) {
  return request({
    url: '/company_database/company_finance_data/?page=' + config.page,
  })
}




/*  put方法  */
export function updateCompanyBasicData(data) {
  return requestPut({
    url: '/company_database/company_basic_data/' + data.id + '/',
    params: qs.stringify(data.params)
  })
}

/*  post方法  */
export function addCompanyBasicData(data) {
  return requestPost({
    url: '/company_database/company_basic_data/',
    params: qs.stringify(data)
  })
}

// 登录
export function login(data) {
  return requestPost({
    url: '/users/login/',
    params: qs.stringify(data)
  })
}
