// Player.ts

import { Race, Class, Card, EquipmentCard } from "../types/types";

export class Player {
  name: string;
  level: number;
  race: Race;
  class: Class;
  hand: Card[];
  equipedItems: EquipmentCard[];
  treasures: number;

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
  }

  levelUp(): void {
    this.level++;
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
}
