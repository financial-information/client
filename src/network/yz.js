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


// 获取上证指数种类
export function getXSHGExponentType(config) {
  return request({
    url: '/active_data/getXSHGExponentType/'
  })
}
// 获取深证指数种类
export function getXSHEExponentType(config) {
  return request({
    url: '/active_data/getXSHEExponentType/'
  })
}

// 获取指数的各类数据
export function getExponentData(config) {
  return requestPost({
    url: "active_data/getExponentDataByCode/",
    params: qs.stringify(config)
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
