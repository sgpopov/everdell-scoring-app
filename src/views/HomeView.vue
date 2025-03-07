<template>
  <div class="lg:mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-gray-900">Games</h1>
      </div>
      <GamesList v-if="hasGames" :games="games" @gameClicked="onGameClicked" />
      <div v-if="!hasGames" class="mt-5 text-center text-gray-500">
        No games found
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGamesStore } from '@/stores/games';
import { computed, ref } from 'vue';
import GamesList from '@/components/GamesList.vue';
import { Game } from '@/types';
import { router } from '@/router';

const gamesStore = useGamesStore();

const games = ref(gamesStore.games);

const hasGames = computed(() => games.value.length > 0);

const onGameClicked = (game: Game) => {
  router.push({
    name: 'games.details',
    params: {
      id: game.id,
    },
  });
};
</script>
