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
