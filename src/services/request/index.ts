import axios from 'axios'
import get from '@/utils/get'

const request = (config: object) => {
  return axios({
    baseURL: 'https://www.jjyl.top',
    withCredentials: true,
    ...config
  })
  .then(
    res => {
      let data = get(res, 'data')
      if (data.code !== 200) throw data
      
      return {
        data,
        code: res.status,
        message: res.statusText
      }
    },
    e => {
      throw {
        code: e.status,
        message: e.statusText
      }
    }
  )
}

export default request