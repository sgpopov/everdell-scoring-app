<template>
  <div class="lg:mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-gray-900">Score</h1>
        <p class="mt-2 text-sm text-gray-700">
          Click on the category to enter the scoring points for each player
        </p>
      </div>
      <div class="-mx-4 mt-5 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Player
                </th>
                <th
                  v-for="player in game?.players"
                  :key="player.name"
                  scope="col"
                  class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                >
                  {{ player.name }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="score in tableContent" :key="score.key">
                <td
                  class="py-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0"
                >
                  <NavigationLink
                    :to="{
                      name: 'games.score',
                      params: {
                        id: gameId,
                        score: score.key,
                      },
                    }"
                    class="flex items-center gap-x-2"
                  >
                    <img
                      v-if="score.icon"
                      class="max-w-6"
                      :src="loadImage(score.icon)"
                      alt=""
                    />
                    <span>{{ score.title }}</span>
                  </NavigationLink>
                </td>
                <td
                  v-for="playerScore in score.scores"
                  :key="playerScore.key"
                  class="px-3 py-4 text-sm whitespace-nowrap text-center text-gray-700"
                >
                  {{ playerScore.value }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  class="py-3.5 pr-3 pl-4 text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  <div class="flex items-center gap-x-2">
                    <TrophyIcon class="h-6 w-auto" />
                    <span>Total</span>
                  </div>
                </td>
                <td
                  v-for="player in game?.players"
                  :key="player.name"
                  scope="col"
                  class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900"
                >
                  {{ player.total }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { TrophyIcon } from '@heroicons/vue/24/outline';
import type { BaseGameScores } from '@/types';
import { baseGameScore } from '@/data';
import { useGamesStore } from '@/stores/games';
import NavigationLink from '@/components/NavigationLink.vue';
import { computed } from 'vue';
import { router } from '@/router';

const route = useRoute();
const gamesStore = useGamesStore();

const gameId: string = route.params.id as string;
const game = gamesStore.getById(gameId);

if (!game) {
  router.push('/');
}

const tableContent = computed(() => {
  return baseGameScore.map((score) => {
    return {
      key: score.key,
      title: score.title,
      icon: score.icon,
      scores: game?.players.map((player) => {
        return {
          key: `${score.key}-${player.name}`,
          value: player.scores[score.key as keyof BaseGameScores],
        };
      }),
    };
  });
});

const iconModules = import.meta.glob('/src/assets/**/*.png', {
  eager: true,
});

const loadImage = (img: string) => {
  const normalizedPath = img.replace(/^@/, '/src');

  return (
    (iconModules as Record<string, { default: string }>)[normalizedPath]
      ?.default || ''
  );
};
</script>
