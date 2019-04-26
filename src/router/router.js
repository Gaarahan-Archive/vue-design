import VueRouter from 'vue-router'
import myChallenge from '../components/challengeBox/myChallenge.vue'
import topChallenge from '../components/challengeBox/topChallenge.vue'

export default new VueRouter({
  routes : [
    {path : '/',redirect:'/top-challenge'},
    {path : '/my-challenge',component : myChallenge},
    {path : '/top-challenge',component : topChallenge},
  ],
  linkActiveClass : 'challenge-btn-active'
});