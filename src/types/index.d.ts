export type Player = {
  id: number;
  name: string;
};

export type BaseGameScores = {
  base_cards: number;
  base_prosperity: number;
  base_events: number;
  base_journey: number;
  base_tokens: number;
};

export type GamePlayer = {
  scores: BaseGameScores;
  total: number;
} & Player;

export type Game = {
  id: string;
  players: GamePlayer[];
  startedAt: string;
};
