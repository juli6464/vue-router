import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Chats from '../views/ChatsView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // Home page
    component: HomeView, // HomeView es el componente que se mostrará en la ruta '/'
    },
    {
      path: '/about',
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