import React from "react"
import loadAble from '@/pages/loadable/loadable';
const Login = loadAble(() => import('@/pages/login/Userlogin'))
const routerUser = [
  {
    path: '/login',
    element: <Login/>
  }
]
export default routerUser