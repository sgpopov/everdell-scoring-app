<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Edit Player Score</h1>
    <!-- Form to edit player score -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'PlayerScore',
  setup() {
    const route = useRoute();
    const gameId = route.params.gameId;
    const playerId = route.params.playerId;

    return {
      gameId,
      playerId,
    };
  },
});
</script>