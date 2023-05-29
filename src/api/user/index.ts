// 用户相关接口
import request from "@/utils/request";
import type { loginForm, loginResponseData } from '@/api/user/type'

enum API {
  LOGIN_URL = "/user/login",
  INFO_URL = '/user/info'
}

export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get(API.INFO_URL)