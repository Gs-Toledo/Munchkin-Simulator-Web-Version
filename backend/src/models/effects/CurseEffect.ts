import { CardEffect } from '../interface/CardEffect';	
import { EffectType } from "../../types/types";

export class CurseEffect implements CardEffect {
    type: EffectType;
    description: string;
    condition: string;
    duration: number;
    instant: boolean;

    constructor(type: EffectType, description: string, condition: string, duration: number, instant: boolean) {
        this.type = type;
        this.description = description;
        this.condition = condition;
        this.duration = duration;
        this.instant = instant;
    }

    applyEffect(): void {
        console.log(`Efeito da maldição: ${this.type}`);
    }

    undoEffect(): void {
        console.log(`Efeito da maldição desfeito: ${this.type}`);
    }
}