import { CardType } from "../../types/types";
import { Player } from "../Player";

export abstract class Card {
    id: number;        
    name: string;       
    type: CardType;      // Tipo da carta (Raca, Classe, Equipamento, Monstro, etc.)
    effect: string;      // Efeito da carta (descrito como string)
    description: string; // Descrição adicional da carta

    constructor(id: number, name: string, type: CardType, effect: string, description: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.effect = effect;
        this.description = description;
    }

    // Método para exibir informações básicas da carta
    displayInfo(): void {
        console.log(`Carta: ${this.name}`);
        console.log(`Descrição: ${this.description}`);
        console.log(`Efeito: ${this.effect}`);
    }

    // Método genérico para jogar uma carta
    play(player: Player): void {
        console.log(`${player.name} jogou a carta: ${this.name}`);
        
    }
}
