import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import Chats from '../views/ChatsView.vue';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/home',
    //   redirect: { name: 'home' }
    // },
    {
      path: '/', // Home page
      name: 'home',
      component: HomeView, // HomeView es el componente que se mostrará en la ruta '/'
      alias: ['/home']
    },
    {
      path: '/session',
      name: 'session',
      component: () => import('../views/SessionView.vue'),
      children: [
        {
          path: '',
          name: 'sessions',
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue'),
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/chats',
      component: () => import('../views/ChatsView.vue'),
      children: [
        {
          path: ':chatId',
          component: () => import('../views/ChatView.vue'),
          props: (route) => {
            return {
              chatId: route.params.chatId
            }
          }
        }
      ]
    }

  ],
});
export default router;