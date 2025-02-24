import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import NewGameView from '@/views/NewGameView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/new-game', component: NewGameView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
