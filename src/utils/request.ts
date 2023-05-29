// axios二次封装
import axios from "axios";
import { ElMessage } from 'element-plus'

const request = axios.create({
  // 基础路径
  baseURL: '/api',
  // 超时时间
  timeout: 5000
})

// 添加请求与相应拦截器
request.interceptors.request.use((config) => {
  // config配置对象，包含headers请求头
  return config;
})

// 响应拦截器
request.interceptors.response.use((response) => {
  // 简化返回数据
  return response.data
}, (error) => {
  // 变量：存储网络错误信息
  let msg = '';
  const status = error.response.status;
  switch (status) {
    case 401:
      msg = 'Token过期'
      break;
    case 403:
      msg = '无权访问'
      break;
    case 404:
      msg = '请求地址错误'
      break;
    case 500:
      msg = '服务器出现故障'
      break;
    default:
      msg = '网络故障'
      break;
  }
  ElMessage({
    type: 'error',
    message: msg
  })
  return Promise.reject(error)
})

export default request