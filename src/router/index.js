import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Logout from '../views/Logout'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router