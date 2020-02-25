
import axios from 'axios' // 导入

const instance = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000, // 如果超时就会报错
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1581579512193273528902","bc":"310100"}'
  }
})

export default instance // 导出
