import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_DEVELOP_BASE_URL,
  timeout: 1000
})


instance.interceptors.request.use(
  config => {
    // 在这个位置需要统一的去注入token
    // if (store.getters.token) {
    //   if (isCheckTimeout()) {
    //     // 登出操作
    //     store.dispatch('user/logout')
    //     return Promise.reject(new Error('token 失效'))
    //   }
    //   // 如果token存在 注入token
    //   config.headers.Authorization = `Bearer ${store.getters.token}`
    // }
    // // 配置接口国际化
    // config.headers['Accept-Language'] = store.getters.language
    return config // 必须返回配置
  },
  error => {
    return Promise.reject(error)
  }
)

// @ts-ignore
// @ts-ignore
instance.interceptors.response.use(
  (response:any) => {
    const { success, message, data } = response.data
    // //   要根据success的成功与否决定下面的操作
    // if (success) {
    //   return data
    // } else {
    //   // 业务错误
    //   // ElMessage.error(message) // 提示错误消息
    return Promise.reject(new Error(message))
    // }
  },
  (error:any) => {
    // 处理 token 超时问题
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token超时
      // store.dispatch('user/logout')
    }
    // ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)
export default instance
