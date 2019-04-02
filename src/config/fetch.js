import axios from 'axios'
import {env} from './env'

export default async (url = '', data = {}, type = 'GET', typeurl = '', method = 'fetch') => {
    type = type.toUpperCase()
    if (env.SERVER_URL[typeurl]) {
        url = env.SERVER_URL[typeurl] + url
    }
    if (type === 'GET') {
        let dataStr = ''
        Object.keys(data).forEach((key) => {
            dataStr += `${key}=${data[key]}&` //a=2&b=4&
        })
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
            url = `${url}?${dataStr}`
        }
    }
    if (method === 'fetch') {
        const requestConfig = {
            method: type,
            headers: { //请求头里携带的东西（看后台）
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: localStorage.getItem('token') || '',
            },
            mode: 'cors', //解决跨域的问题
            cache: 'no-cache', //请求的数据不缓存
        }

        if (type == 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: data,
            })
        }

        try {
            const instance = axios.create({
                baseURL: '',
                timeout: '25000',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    token: localStorage.getItem('token') || '',
                },
            })
            const response = await instance
                    .request({
                        method: type,
                        url,
                        data
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            const responseJson = await response.data
            return responseJson

        } catch (error) {
            throw new Error(error)
        }
        


    }
}