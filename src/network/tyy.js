import { requestPost, request,requestPut } from './request'
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
  return request({
    url: '/users/user_history/?user_phone=' + data.phone +'&deleted='+data.deleted +'&limit='+data.limit
  })
}
//根据历史id进行搜索企业
export function getCompanyId(data) {
 
  return request({
    url: '/company_database/company_basic_data/?id='+data
  })
}


//得到指定个数的收藏信息
export function getUserCollect(data){
    return request({
        url:'/users/user_collection/?user_phone='+data.phone +'&deleted='+data.deleted+'&limit='+data.limit

    })
}

//查询有木有被收藏
export function isCollected(data){
    return request({
        url:'/users/user_collection/?user_phone='+data.phone +'&deleted='+data.deleted+'&collection_module_type='+data.collection_module_type+'&collection_module_id='+data.collection_module_id
    })
}


export function addHistoryCompanyBasicData(data) {
  return requestPost({
    url: '/users/recordHistory/',
    params: qs.stringify(data)
  })
}

export function addCollectData(data) {
  return requestPost({
    url: '/users/recordCollection/',
    params: qs.stringify(data)
  })
}

export function getHotData(data) {
  return requestPost({
    url: '/users/getHotCompanyInfo/',
    params: qs.stringify(data)
  })
}

export function getUserInfoData(data) {
  return request({
    url: '/users/user_info/'+ data.id +  '/'
  })
}

export function updateUserInfoData(data) {
  return requestPut({
    url: '/users/user_info/'+ data.id +  '/',
    params: qs.stringify(data.params)
  })
}


export function deleteHistoryData(data) {
  return requestPut({
    url: '/users/user_history/' + data.id + '/',
    params: qs.stringify(data.params)
  })
}


export function deleteCollectData(data) {
  return requestPut({
    url: '/users/user_collection/' + data.id + '/',
    params: qs.stringify(data.params)
  })
}
//删除所有浏览记录
export function deleteAllHistory(data) {
  return requestPost({
    url: '/users/deleteHistory/',
    params: qs.stringify(data)
  })
}

//删除所有收藏记录
export function deleteAllCollection(data) {
  return requestPost({
    url: '/users/deleteCollection/',
    params: qs.stringify(data)
  })
}


