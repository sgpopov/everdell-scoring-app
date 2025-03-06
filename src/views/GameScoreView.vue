<template>
  <ScoreCard
    v-if="game && scoreDetails"
    :game="game"
    :scoreDetails="scoreDetails"
    @scorePoints="onScorePointsAdded"
    @cancel="goBack"
  />
  <div v-if="!game">Game not found</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { baseGameScore } from '@/data';
import { useGamesStore } from '@/stores/games';
import ScoreCard from '@/components/ScoreCard.vue';
import { PlayerScore } from '@/types';
import { router } from '@/router';

const route = useRoute();
const gamesStore = useGamesStore();

const gameId: string = route.params.id as string;
const scoreType: string = route.params.score as string;
const game = gamesStore.getById(gameId);

if (!game) {
  router.push('/');
}

const scoreDetails = computed(() => {
  return baseGameScore.find((score) => score.key === scoreType);
});

const goBack = () => {
  router.push({
    name: 'games.details',
    params: {
      id: gameId,
    },
  });
};

const onScorePointsAdded = (scores: PlayerScore[]) => {
  const scoreType = scoreDetails.value?.key;

  if (scoreType) {
    gamesStore.updateGameScores(gameId, scoreType, scores);
  }

  goBack();
};
</script>
