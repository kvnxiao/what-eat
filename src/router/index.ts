import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"
import Start from "../views/Start.vue"
import Preferences from "../views/Preferences.vue"
import Result from "../views/Result.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/preferences",
    name: "Preferences",
    component: Preferences,
  },
  {
    path: "/roll",
    name: "Result",
    component: Result,
  },
]

const router = new VueRouter({
  routes,
})

export default router
