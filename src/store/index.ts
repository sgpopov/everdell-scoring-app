import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    players: [] as Array<{ name: string; score: number }>,
  }),
  actions: {
    removePlayer(index: number) {
      this.players.splice(index, 1);
    },
    addPlayer(name: string) {
      this.players.push({ name, score: 0 });
    },
    resetGame() {
      this.players = [];
    },
    calculateTotalScore() {
      return this.players.reduce((total, player) => total + player.score, 0);
    },
  },
});

