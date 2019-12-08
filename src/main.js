import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Feeds from "./screens/Feeds"
import Profile from "./screens/Profile"
import Friends from "./screens/Friends"
import FriendDetails from "./screens/FriendDetails"
import NotFound from "./screens/NotFound"
import ProfileInfo from "./components/ProfileInfo"
import ProfileSettings from "./components/ProfileSettings"

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: Feeds
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: 'info',
        component: ProfileInfo
      },
      {
        path: 'settings',
        component: ProfileSettings
      }
    ]
  },
  {
    path: '/friends',
    component: Friends
  },
  {
    path: '/friends/:friendId',
    component: FriendDetails
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
