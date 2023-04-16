// service统一出口
import WYPRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const wypRequest = new WYPRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default wypRequest
