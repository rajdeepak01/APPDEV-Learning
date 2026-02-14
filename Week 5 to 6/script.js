import Home from "./components/Home.js";
import Dashboard from "./components/DashBoard.js";
import Register from "./components/Register.js";
import NotFound from "./components/NotFound.js";
import Profile from "./components/Profile.js";

const routes = [
    {
        path: "/home/:user",
        name: "home",
        component: Home,
        children: [
            { path: "dashboard", name: "dash", component: Dashboard },
            { path: "register", name: "reg", component: Register },
        ]
    },
    { path: "/Profile/:username", component: Profile },
    { path: "*", component: NotFound },

]

const router = new VueRouter({
    routes
})

const app = new Vue({
    data: {

    },
    methods: {

    }, 
    router
}).$mount("#app")

// const app = new Vue({router}).$mount("#app")
