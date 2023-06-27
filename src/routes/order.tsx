import React from 'react';
import { Navigate} from 'react-router-dom';
import loadAble from '@/pages/loadable/loadable';
const OrderDetail = loadAble(() => import('@/pages/order/OrderDetail/OrderDetail'))
const OrderSearch = loadAble(() => import('@/pages/order/OrderSearch/OrderSearch'))
const OrderRecomend = loadAble(() => import('@/pages/order/orderRecomend'))
const BusinessList = loadAble(() => import('@/pages/order/BusinessList/BusinessList'))
const OrderContainer = loadAble(() => import('@/pages/order/OrderContainer'))
const OrderList = loadAble(()=> import('@/pages/order/OrderList/OrderList'))
const routesOrder = [
  {
    path:'/order',
    element:<OrderContainer/>,
    children:[
      {
        path:'',
        element:<Navigate to='order-list'></Navigate>
      },
      {
        path:'order-list',
        element:<OrderList/>
      },
      {
        path:'business-list',
        element:<BusinessList/>
      }
    ]
  },
  {
    path:'/',
    element:<Navigate to="/search"/>
  },
  {
    path:'/list',
    element:<OrderList/>
  },
  {
    path:'/detail',
    element:<OrderDetail/>
  },
  {
    path:'/search',
    element:<OrderSearch/>
  },
  {
    path:'/recomend',
    element:<OrderRecomend/>
  },
  {
    path:'*',
    element:<Navigate to="/"/>
  },
]
export default routesOrder