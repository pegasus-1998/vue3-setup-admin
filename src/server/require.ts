import axios from "axios";
const config = require('./config.json')

const instance = axios.create({
    baseURL: config.baseURL,
    timeout: 3500
})

//添加请求拦截器
instance.interceptors.request.use(
    request => request,
    err => console.log('网络请求出错了', err)
)

//添加响应拦截器
instance.interceptors.response.use(
    res => res,
    err => console.log('网络响应出错了', err)
)

export const getRequest = (url = '', params = {}, config = {}) => {
    return instance({
        method: 'get',
        url,
        params,
        ...config
    }).then(response => {
        return response
    })
}

export const postRequest = (url = '', data = {}, config = {}) => {
    return instance({
        method: 'post',
        url,
        data,
        ...config
    }).then(response => {
        return response
    })
}
