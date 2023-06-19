import {useRoutes} from 'react-router-dom';
import routesOrder from './order';
const routeArray = [
  ...routesOrder
]
const AppRoutes = () => {
  const routes = useRoutes(routeArray)
  return routes
}
export default AppRoutes