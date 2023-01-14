// import axios from 'axios'
// export const instance = axios.create({
//   baseURL: import.meta.env.VITE_DEVELOP_BASE_URL,
//   timeout: 1000
// })

import instance from '@/api/request'
interface TypeParams {
  type: number
}

export const getBaseMessage = (params: TypeParams) => {
  // return instance.get('/user/sys-config/configInfo?type=1')
  return instance.request({
    method: 'GET',
    url: `/user/sys-config/configInfo?type=${params.type}`
  })
}
