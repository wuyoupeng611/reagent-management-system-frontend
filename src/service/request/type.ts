import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WYPInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface WYPRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: WYPInterceptors<T>
  showLoading?: boolean
}

export interface Result {
  /**
   * 返回状态
   */
  flag: boolean
  /**
   * 返回码
   */
  code: number
  /**
   * 返回信息
   */
  message: string
  /**
   * 返回数据
   */
  data: any
}
