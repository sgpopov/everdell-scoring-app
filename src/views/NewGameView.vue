<template>
  <NewGame :defaultPlayers="startPlayers" @startGame="onGameStarted" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Player } from '@/types';
import NewGame from '@/components/NewGame.vue';
import { useGamesStore } from '@/stores/games';
import { router } from '@/router';

const startPlayers = ref(4);

const gamesStore = useGamesStore();

const onGameStarted = (players: Player[]) => {
  const game = gamesStore.createGame(players);

  router.push({
    name: 'games.details',
    params: {
      id: game.id,
    },
  });
};
</script>
