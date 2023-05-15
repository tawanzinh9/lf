import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Pages/Home/Home.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Pages/Register/Register.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Pages/Login/LoginComponent.vue")
  },
  {
    path: "/myuser",
    name: "myuser",
    component: () => import("@/views/Pages/User/MyUser.vue"),
    meta: { requiresAuth: true  }
  }, 
  {
    path: "/forum",
    name: "forum",
    component: () => import("@/views/Pages/Forum/Forum.vue"),
    meta: { requiresAuth: true  }
  },
  {
    path: "/myposts",
    name: "myposts",
    component: () => import("@/views/Pages/myPosts/MyPosts.vue"),
    meta: { requiresAuth: true  }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')

    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
