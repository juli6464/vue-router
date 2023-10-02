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
      alias: ['/home'],
      meta: {
        requiresAuth: false
      }
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
      meta: {
        requiresAuth: true,
        roles: ['admin']
      },
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

router.beforeEach((to, from) => {
  console.log(to,from)

  // if (to.meta?.requiresAuth && to.meta.roles.includes('admin')) {
  //   console.log(to.path, 'requires auth')
  //   return '/session'
  // }

  // if(to.path === '/') return { name: 'about' }
  // return true
})

export default router;