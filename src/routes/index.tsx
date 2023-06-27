import {Navigate, useRoutes} from 'react-router-dom';
import routesOrder from './order';
import routerUser from './user';
const routeArray = [
  ...routesOrder,
  ...routerUser,
  {
    path:'/',
    element:<Navigate to="/login"/>
  },
]
const AppRoutes = () => {
  const routes = useRoutes(routeArray)
  return routes
}
export default AppRoutes