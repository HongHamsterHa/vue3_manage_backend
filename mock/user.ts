// 用户信息数据
function createUserList() {
  return [
    {
      userId: 1,
      username: 'admin',
      password: '123456',
      desc: '平台管理员',
      roles: ['平台管理员'],
      routes: ['home'],
      token: 'Admin Token'
    },
    {
      userId: 2,
      username: 'system',
      password: '1111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      routes: ['home'],
      token: 'System Token'
    }
  ]
}

export default [
  // 用户登陆接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      )
      if (!checkUser) {
        return {
          code: 201,
          data: { message: '账号或密码不正确' }
        }
      }
      const { token } = checkUser
      return {
        code: 200, data: { token }
      }
    }
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      const checkUser = createUserList().find((item) => item.token === token)
      if (!checkUser) {
        return {
          code: 201,
          data: { message: '获取用户信息失败' }
        }
      }
      return {
        code: 200, data: { checkUser }
      }
    }
  },
]