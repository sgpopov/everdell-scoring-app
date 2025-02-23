<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Active Games</h1>
    <!-- List active games here -->
    <router-link to="/new-game" class="bg-blue-500 text-white p-2 rounded">Start New Game</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>