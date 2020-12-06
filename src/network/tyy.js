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

//搜索企业接口
export function searchCompanyData(data) {
    return request({
    	url: '/company_database/company_basic_data/?company_name=' + data
    })
}
