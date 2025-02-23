export interface Player {
  id: string;
  name: string;
  score: number;
}

export interface Score {
  playerId: string;
  points: number;
}