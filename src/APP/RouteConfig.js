import { Home, Login, Signup } from '../components/index';

export const RouterConfig = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/signup',
    component: Signup,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  }
];