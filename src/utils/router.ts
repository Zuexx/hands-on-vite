import Home from '../views/Home.vue';
import Forget from '../views/Forget.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/", components: {
            default: Home,
        }
    },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forget", component: Forget }
    // {
    //     path: "/:catchAll(.*)",
    //     component: () => import(
    //     /* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };