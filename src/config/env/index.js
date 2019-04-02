// 获取地址栏的参数
let url = window.location.href

let SERVER_URL = {
    baseUrl: '',
    saleUrl:'',
}

debugger
if (url.indexOf('localhost') >= 0) {
    SERVER_URL.baseUrl = 'http://10.255.254.53:8082/'
    SERVER_URL.saleUrl = 'http://10.255.254.53:8086/'
}

export const env = {
    SERVER_URL
}