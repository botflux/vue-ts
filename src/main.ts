import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import createPostService from '@/services/post-service'
import { PostInterface } from './models/post'
import 'reflect-metadata'

// import createUserService from '@/services/user-service'
// import { UserInterface } from './models/user'

createPostService ()
  .findAll ()
  .then ((posts: Array<PostInterface>) => 
    posts.forEach ((post: PostInterface) => 
      console.log(post))
  )

// createUserService ()
//   .findAll ()
//   .then ((users: Array<UserInterface>) =>
//     console.log(users)
//   )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
