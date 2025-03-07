import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/games/new',
    name: 'games.create',
    component: () => import('@/views/NewGameView.vue'),
  },
  {
    path: '/games/:id',
    name: 'games.details',
    component: () => import('@/views/GameDetails.vue'),
  },
  {
    path: '/games/:id/score/:score',
    name: 'games.score',
    component: () => import('@/views/GameScoreView.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
