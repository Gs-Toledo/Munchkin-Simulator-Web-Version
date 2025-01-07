import { CardType } from "../../types/types";
import { Player } from "../Player";
import { CardEffect } from "../interface/CardEffect"; 

export abstract class Card {
  id: number;
  description: string;
  name: string;
  type: CardType;      
  effect: CardEffect; 

  constructor(
    id: number,
    name: string,
    type: CardType,
    effect: CardEffect,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.effect = effect;
    this.description = description;
  }

  displayInfo(): void {
    console.log(`Carta: ${this.name}`);
    console.log(`Descrição: ${this.description}`);
    console.log("Efeito da carta:");
    
    this.effect.displayInfo();
  }

  play(player: Player): void {
    console.log(`${player.name} jogou a carta: ${this.name}`);
    this.effect.applyEffect();
  }
}
