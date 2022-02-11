import App from './component/App/App';
import Order from './component/Order/Order'

export const routes = [
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/order',
    element: <Order/>,
  },
]