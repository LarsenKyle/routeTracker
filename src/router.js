import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Landing from "./views/Landing"
import Signup from "./components/Signup"
import Login from "./components/Login"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/landing",
      name: "landing",
      component: Landing
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
})
