import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { v4 as uuidv4 } from 'uuid';
import type { Game, Player } from '@/types';

export const useGamesStore = defineStore('games', {
  state: () => ({
    games: useLocalStorage<Game[]>('games', []),
  }),

  getters: {
    getAll: (state) => {
      return state.games;
    },
  },

  actions: {
    createGame(players: Player[]) {
      const gamePlayers = players.map((player) => {
        return {
          ...player,
          scores: {
            base_cards: 0,
            base_prosperity: 0,
            base_events: 0,
            base_journey: 0,
            base_tokens: 0,
          },
          total: 0,
        };
      });

      const game = {
        id: uuidv4(),
        startedAt: new Date().toISOString(),
        players: gamePlayers,
      };

      this.games.push(game);

      return game;
    },

    findById(id: string) {
      return this.games.find((game) => game.id === id);
    },
  },
});
