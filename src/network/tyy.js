import { requestPost, request } from './request'
import qs from 'qs'

//raw 形式提交
export function getCompanyBasicData(data) {
	return request({
		url: 'company_database/company_basic_data/' + data.id + '/'
	})
}
export function getCompanyMinute(data) {
	return request({
		url: 'company_database/company_basic_data/' + data.id + '/'
	})
}

//搜索企业接口&&=&=&=
export function searchCompanyData(data) {
	console.log('url: :/company_database/company_basic_data/?company_name='+data.name+'&industry_type='+data.type)
    return request({
    	url: '/company_database/company_basic_data/?company_name='+data.name+'&industry_type='+data.type+
        '&min_price='+data.min_price+'&max_price='+data.max_price+'&min_time='+data.min_time+'&max_time='+data.max_time+'&offset='+data.offset,
    })
}
//得到推荐
export function recommendCompanyData(data) {
    return request({
    	url: '/company_database/company_basic_data/?page='+data
    })
}
//搜索企业接口
export function searchCompanyOneData(data) {
    return request({
        url: '/company_database/company_basic_data/?company_name='+data
    })
}
//得到具体金融
export function searchCompanyFinanceData(data) {
    return request({
    	url: '/company_database/company_finance_data/?search='+data
    })
}
//按页数获取数据
export function getCompanyBasicDataByPage(data) {
  return request({
    url: '/company_database/company_basic_data/?offset=' + data.page
  })
}
//历史记录
export function getUserHistory(data) {
    console.log('111')
    console.log('url: :/users/user_history/?user_phone=' + data.phone)
  return request({
    url: '/users/user_history/?user_phone=' + data.phone
  })
}
//根据id进行搜索
export function getHistoryId(data) {
 
  return request({
    url: '/company_database/company_basic_data/?id='+data
  })
}
export function getUserCollect(data){
    return request({
        url:'/users/user_collection/?user_phone='+data.phone

    })
}
