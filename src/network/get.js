import { request } from './request'


export function getUserList(config) {
  return request({
    url: 'database/user_list/'
  })  
}