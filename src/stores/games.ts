import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { v4 as uuidv4 } from 'uuid';
import type { Game, Player, PlayerScore } from '@/types';

export const useGamesStore = defineStore('games', {
  state: () => ({
    games: useLocalStorage<Game[]>('games', []),
  }),

  getters: {
    getAll: (state) => {
      return state.games;
    },

    getById: (state) => (id: string) => {
      return state.games.find((game) => game.id === id);
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

    updateGameScores(
      gameId: string,
      scoreType: string,
      playerScores: PlayerScore[]
    ) {
      const game = this.getById(gameId);

      if (!game) {
        return;
      }

      const gamePlayers = game.players.map((player) => {
        const playerScore = playerScores.find(
          (playerScore) => playerScore.id === player.id
        );

        if (!playerScore) {
          return player;
        }

        const score = playerScore.score;

        const scores = {
          ...player.scores,
          [scoreType]: Number(score),
        };

        return {
          ...player,
          scores,
          total: Object.values(scores).reduce((acc, score) => acc + score, 0),
        };
      });

      game.players = gamePlayers;

      return game;
    },
  },
});
