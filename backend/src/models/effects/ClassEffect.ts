import { Class } from "../../types/types";
import { CardEffect } from "../interface/CardEffect";

export class ClassEffect implements CardEffect {
    type: Class;
    habilidades: string;
    restriction: string;
    duration: number;
    instant: boolean;

    constructor(type: Class, habilidades: string, restriction: string, duration: number, instant: boolean) {
        this.type = type;
        this.habilidades = habilidades;
        this.restriction = restriction;
        this.duration = duration;
        this.instant = instant;
    }

    applyEffect(): void {
        console.log(`Efeito da classe/raca: ${this.type}`);
    }

    undoEffect(): void {
        console.log(`Efeito da classe/raca desfeito: ${this.type}`);
    }
}