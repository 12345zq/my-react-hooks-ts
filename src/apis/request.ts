import axios, { AxiosError, InternalAxiosRequestConfig } from "axios"
import qs from "qs"
enum types {
  POST = 'POST',
  GET = 'GET'
}
enum states {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
export interface ResponseFrom {
  data ?: any,
  list ?: any,
  msg: states
}
const JsonParse = (res:{data:string}):Object => {
  try {
    return JSON.parse(res.data)
  } catch (error) {
    return {}
  }
}
axios.interceptors.request.use(
  (config : InternalAxiosRequestConfig) => {
    config.headers['Authorization'] = localStorage.getItem('token')
    return config
  },
  (error:AxiosError) => {
    return Promise.reject(error)
  }
)
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const request = (options:any):Promise<ResponseFrom> => {
  const axiosOptions = {
    transformResponse:[(data: any) => data],
    headers:{
      Accept:'application/json',
      ContentType:'application/json;charset=UTF-8'
    },
    timeout:400000,
    paramsSerializer: (params: any) => qs.stringify(params),
    baseURL: process.env.REACT_APP_BASE_URL,
    ...options}
  return new Promise((resolve:Function,reject:Function) => {
    axios.request(axiosOptions)
    .then((res:any)=>{
      resolve({
        data: JsonParse(res)
      })
    })
    .catch(error => {
      reject({
        data:error,
        msg:states.ERROR
      })
    })
  })
}

export const httpPost = (
  url:string,
  data:any = {}
):Promise<ResponseFrom> =>{
  return request({
    url,
    method:types.POST,
    data
  })
}

export const httpGet = (
  url:string,
  params: any = {}
):Promise<ResponseFrom> => {
  return request({
    url,
    method:types.GET,
    params
})
}

export const httpFormData = (
  url:string,
  params:any={}
)=>{
  const formData = new FormData()
  for(const field in params){
    if(params[field]){
      formData.append(field,params[field])
    }
  }
  return request({
    url,
    method:types.POST,
    data:formData,
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
}