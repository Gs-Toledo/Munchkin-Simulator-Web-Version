import { CardEffect } from "../interface/CardEffect";

export class MonsterEffect implements CardEffect {
    level: number;
    treasureReward: number;
    potencializer: number;
    duration: number;
    instant: boolean;

    constructor(level: number, treasureReward: number, potencializer: number, duration: number, instant: boolean) {
        this.level = level;
        this.treasureReward = treasureReward;
        this.potencializer = potencializer;
        this.duration = duration;
        this.instant = instant;
    }

    applyEffect(): void {
        console.log(`Efeito do monstro: ${this.level}`);
    }

    undoEffect(): void {
        console.log(`Efeito do monstro desfeito: ${this.level}`);
    }
}