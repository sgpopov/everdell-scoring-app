<template>
  <div class="player-list">
    <h2 class="text-xl font-bold mb-4">Player List</h2>
    <ul>
      <li v-for="(player, index) in players" :key="index" class="flex justify-between mb-2">
        <span class="font-medium">{{ player.name }}</span>
        <button @click="removePlayer(index)" class="text-red-500">Remove</button>
      </li>
    </ul>
    <div class="mt-4">
      <input v-model="newPlayerName" placeholder="Enter player name" class="border p-2 rounded mr-2" />
      <button @click="addPlayer" class="bg-blue-500 text-white p-2 rounded">Add Player</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'PlayerList',
  setup() {
    const store = useStore();
    const newPlayerName = ref('');

    const players = store.players;

    const addPlayer = () => {
      if (newPlayerName.value.trim() && players.length < 4) {
        store.addPlayer(newPlayerName.value.trim());
        newPlayerName.value = '';
      }
    };

    const removePlayer = (index: number) => {
      store.removePlayer(index);
    };

    return {
      players,
      newPlayerName,
      addPlayer,
      removePlayer,
    };
  },
});
</script>

<style scoped>
.player-list {
  @apply p-4 border rounded-lg shadow-md bg-white;
}
</style>