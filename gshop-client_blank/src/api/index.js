import ajax from './ajax'

// mock
export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData=()=>ajax('/category')
// 网易
export const reqSearchInitialData=()=>ajax('/api/xhr/search/init.json')
export const reqThingsNav=()=>ajax('/api/topic/v1/find/getTabs.json')
export const reqThingsData=()=>ajax('/api/topic/v1/find/recManual.json')
export const reqThingsSearch = (keywordPrefix) => ajax('/api/xhr/search/searchAutoComplete.json?csrf_token=29c2d6669c619d172a33deb5c6c9a837',{keywordPrefix})
// 后台服务区

export const reqLoginEmail=(email,pwd)=>ajax('/local/login_email',{email,pwd},'POST')
// export const reqCode=(phone)=>ajax('/local/sendcode',{phone})
export const reqCode = (phone) => ajax( '/local/sendcode', {phone})
export const reqLoginPhone=(phone,code)=>ajax('/local//login_sms',{phone,code},'POST')
export const reqUserInfo=()=>ajax('/local/userinfo')
export const reqLogout=()=>ajax('/local/logout')
