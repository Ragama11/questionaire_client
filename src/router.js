// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createWebHistory, createRouter } from 'vue-router';

import Login from "./components/pages/LoginPage.vue";
import Register from "./components/pages/RegisterPage.vue";
import Home from "./components/pages/HomePage.vue";
import Question from "./components/pages/QuestionPage.vue";
import Start from "./components/pages/StartPage.vue";
import Result from "./components/pages/ResultPage.vue";


// Vue.use(VueRouter);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/login" },
        { path: "/", name: "login", component: Login },
        { path: "/register", name: "register", component: Register },
        { path: "/home", name: "home", component: Home },
        { path: "/start", name: "start", component: Start },
        { path: "/question", name: "question", component: Question },
        { path: "/result", name: "result", component: Result }
    ]
});


export default router;

