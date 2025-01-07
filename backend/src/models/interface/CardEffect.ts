export interface CardEffect {
    duration: number;
    instant: boolean;
    applyEffect(): void;
    undoEffect(): void;
  }
  