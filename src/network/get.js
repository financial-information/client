import { request } from './request'


export function getTestData() {
  return request({
    url: '/seven_star_company_finance_data'
  })  
}