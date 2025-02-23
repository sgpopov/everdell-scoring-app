<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Final Score</h1>
    <!-- Display final scores here -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'FinalScore',
  setup() {
    const route = useRoute();
    const gameId = route.params.gameId;

    return {
      gameId,
    };
  },
});
</script>