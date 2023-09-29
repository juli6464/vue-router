import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Chats from '../views/ChatsView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // Home page
      name: 'home',
      component: HomeView, // HomeView es el componente que se mostrará en la ruta '/'
    },
    {
      path: '/session',
      name: 'session',
      component: () => import('../views/SessionView.vue'),
      children: [
        {
          path: '',
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
          component: () => import('../views/ChatView.vue')
        }
      ]
    }

  ],
});
export default router;