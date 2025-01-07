import { CardEffect } from "../interface/CardEffect";
import { SocketType } from "../../types/types";

export class ItemEffect implements CardEffect {
    bonus: number;
    reusable: boolean;
    socket: SocketType;
    restriction: string;
    duration: number;
    instant: boolean;

    constructor(bonus: number, reusable: boolean, socket: SocketType, restriction: string, duration: number, instant: boolean) {
        this.bonus = bonus;
        this.reusable = reusable;
        this.socket = socket;
        this.restriction = restriction;
        this.duration = duration;
        this.instant = instant;
    }

    applyEffect(): void {
        console.log(`Efeito do item: ${this.socket}`);
    }

    undoEffect(): void {
        console.log(`Efeito do item desfeito: ${this.socket}`);
    }
}
