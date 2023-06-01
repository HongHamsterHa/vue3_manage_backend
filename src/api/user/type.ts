// 登录接口需要携带参数ts类型
export interface loginForm {
  username: string,
  password: string
}

// 登录接口返回数据类型
interface dataType {
  token: string,
  message: string
}
export interface loginResponseData {
  code: number,
  data: dataType
}