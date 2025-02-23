import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import NewGame from '@/views/NewGame.vue';
import PlayerScore from '@/views/PlayerScore.vue';
import FinalScore from '@/views/FinalScore.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new-game',
    name: 'NewGame',
    component: NewGame,
  },
  {
    path: '/game/:gameId/player/:playerId',
    name: 'PlayerScore',
    component: PlayerScore,
  },
  {
    path: '/game/:gameId/final-score',
    name: 'FinalScore',
    component: FinalScore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;