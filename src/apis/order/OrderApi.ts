import { ResponseFrom, httpPost } from "../request";

export interface QueryTableType {
  pageSize:number;
  pageNumber:number;
  queryKey:string|null
}
const getOrderList = (params:QueryTableType):Promise<ResponseFrom> => {
  return httpPost('/order/getOrderList',params)
}
const getBusinessList = (params:QueryTableType):Promise<ResponseFrom> => {
  return httpPost('/order/getBusinessList',params)
}
export default {
  getOrderList,
  getBusinessList
}