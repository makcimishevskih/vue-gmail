import AppLogin from '../views/AppLogin'
import AppDashboard from '../views/AppDashboard'
import AppForget from '../views/AppForget'
import AppMail from '../views/AppMail'

const routes = [
  {
    path: '/', component: AppLogin
  },
  {
    path: '/dashboard', component: AppDashboard
  },
  {
    path: '/forget', component: AppForget
  },
  {
    path: '/mail', component: AppMail
  },
]

export default routes;