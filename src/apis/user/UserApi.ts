import { httpPost,ResponseFrom } from "../request"
interface loginType  {
  userName:string,
  userPassword:string,
  userNumber:boolean
}
const login = (params:loginType) => {
  return httpPost('/user/userLogin',params)
}
export default {
  login
}