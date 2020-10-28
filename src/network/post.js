import { requestPost } from './request'


export function getPostData(data) {
  return requestPost({
    url: 'bbb',
    params: data
  })
}