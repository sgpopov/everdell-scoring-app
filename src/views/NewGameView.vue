<template>
  <NewGame :defaultPlayers="startPlayers" @startGame="onGameStarted" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Player } from '@/types';
import NewGame from '@/components/NewGame.vue';

const startPlayers = ref(4);

const onGameStarted = (players: Player[]) => {
  console.log('players', players);
};
</script>
