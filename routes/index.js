// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createWebHistory, createRouter } from 'vue-router';
import Login from "../src/components/LoginPage.vue";
import Register from "../src/components/RegisterPage.vue";
import Home from "../src/components/HomePage.vue";
import Question from "../src/components/QuestionPage.vue";
import Start from "../src/components/StartPage.vue";
import Result from "../src/components/ResultPage.vue";






// Vue.use(VueRouter);

const routes = [
    {
    path: "/",
    name: "login",
    component: Login

},
{
    path: "/register",
    name: "register",
    component: Register

},
{
    path: "/home",
    name: "home",
    component: Home

},
{
    path: "/start",
    name: "start",
    component: Start
},
{
    path: "/question",
    name: "question",
    component: Question
},
{
    path: "/result",
    name: "result",
    component: Result
}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

