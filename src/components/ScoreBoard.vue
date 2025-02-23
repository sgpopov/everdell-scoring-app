<template>
  <div class="score-board">
    <h2 class="text-xl font-bold mb-4">Score Board</h2>
    <div v-for="(score, index) in playerScores" :key="index" class="flex justify-between mb-2">
      <span class="font-medium">{{ score.playerName }}</span>
      <span>{{ score.points }}</span>
    </div>
    <div class="flex justify-between font-bold">
      <span>Total Score:</span>
      <span>{{ totalScore }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'ScoreBoard',
  props: {
    playerScores: {
      type: Array as () => { playerName: string; points: number }[],
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const totalScore = computed(() => {
      return props.playerScores.reduce((total, score) => total + score.points, 0);
    });

    return {
      totalScore,
    };
  },
});
</script>

<style scoped>
.score-board {
  @apply p-4 border rounded-lg shadow-md bg-white;
}
</style>