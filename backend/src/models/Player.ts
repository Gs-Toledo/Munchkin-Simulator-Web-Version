// Player.ts

import { Race, Class } from "../types/types";
import { Card } from "./cards/Card";
import { EquipmentCard } from "./cards/EquipmentCard";
export class Player {
  name: string;
  level: number;
  race: Race;
  class: Class;
  hand: Card[];
  equipedItems: EquipmentCard[];
  treasures: number;
  bonus: number;

  constructor(
    name: string,
    race: Race = Race.Human,
    playerClass: Class = Class.Noob
  ) {
    this.name = name;
    this.level = 1;
    this.race = race;
    this.class = playerClass;
    this.hand = [];
    this.equipedItems = [];
    this.treasures = 0;
    this.bonus = 1;
  }

  levelUp(): void {
    this.level++;
    this.bonus++;
    console.log(`${this.name} subiu para o nível ${this.level}`);
  }

  gainTreasure(): void {
    this.treasures++;
    console.log(`${this.name} ganhou um tesouro! Total: ${this.treasures}`);
  }

  addCardToHand(card: Card): void {
    this.hand.push(card);
    console.log(`${this.name} recebeu a carta "${card.name}"`);
  }

  removeCardFromHand(player: Player, cardName: string): void {
    const cardIndex = player.hand.findIndex((card) => card.name === cardName);

    if (cardIndex !== -1) {
      const [removedCard] = player.hand.splice(cardIndex, 1);
      console.log(
        `${player.name} removeu a carta "${removedCard.name}" da mão.`
      );
    } else {
      console.log(
        `Carta "${cardName}" não encontrada na mão de ${player.name}.`
      );
    }
  }

  equipItem(item: EquipmentCard): void {
    if (!item.isEquipped) {
      this.equipedItems.push(item);
      item.isEquipped = true;
      console.log(`${this.name} equipou o item "${item.name}"`);
    } else {
      console.log(`${item.name} já está equipado!`);
    }
  }

  unequipItem(itemName: string): void {
    const index = this.equipedItems.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      const [removedItem] = this.equipedItems.splice(index, 1);
      removedItem.isEquipped = false;
      console.log(`${this.name} removeu o item "${removedItem.name}"`);
    } else {
      console.log(
        `Item "${itemName}" não encontrado entre os itens equipados.`
      );
    }
  }
  setRace(newRace: Race): void {
    this.race = newRace;
    console.log(`${this.name} mudou para a raça ${this.race}`);
  }

  // Método para setar a classe
  setClass(newClass: Class): void {
    this.class = newClass;
    console.log(`${this.name} mudou para a classe ${this.class}`);
  }

  calculateTotalBonus(): number {
    const itemBonus = this.equipedItems.reduce(
      (total, item) => total + item.bonus,
      0
    );
    const totalBonus = this.level + itemBonus;

    return totalBonus;
  }
}
