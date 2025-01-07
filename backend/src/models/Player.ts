// Player.ts

import { Race, Class } from "../types/types";
import { Card } from "./cards/Card";
import { EquipmentCard } from "./cards/EquipmentCard";

export class Player {
  name: string;
  level: number;
  race: Race;
  playerClass: Class;
  hand: Card[];
  equipedItems: Card[];

  constructor(
    name: string,
    race: Race = Race.Human,
    playerClass: Class = Class.Noob
  ) {
    this.name = name;
    this.level = 1;
    this.race = race;
    this.playerClass = playerClass;
    this.hand = [];
    this.equipedItems = [];
  }

  drawCard(): void {
    console.log(`${this.name} está comprando uma carta.`);
  }

  playCard(card: Card): void {
    const cardIndex = this.hand.findIndex(
      (handCard) => handCard.name === card.name
    );
    if (cardIndex !== -1) {
      this.hand.splice(cardIndex, 1);
      console.log(`${this.name} jogou a carta "${card.name}"`);
    } else {
      console.log(
        `Carta "${card.name}" não encontrada na mão de ${this.name}.`
      );
    }
  }

  levelUp(): void {
    this.level++;
    console.log(`${this.name} subiu para o nível ${this.level}`);
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

  unequipItem(item: EquipmentCard): void {
    const index = this.equipedItems.findIndex(
      (equipItem) => equipItem.name === item.name
    );
    if (index !== -1) {
      const [removedItem] = this.equipedItems.splice(index, 1);
      removedItem.isEquipped = false;
      console.log(`${this.name} removeu o item "${removedItem.name}"`);
    } else {
      console.log(
        `Item "${item.name}" não encontrado entre os itens equipados.`
      );
    }
  }

  updateLevel(level: number): void {
    this.level = level;
    console.log(`${this.name} agora está no nível ${this.level}`);
  }

  discardCard(card: Card): void {
    const cardIndex = this.hand.findIndex(
      (handCard) => handCard.name === card.name
    );
    if (cardIndex !== -1) {
      this.hand.splice(cardIndex, 1);
      console.log(`${this.name} descartou a carta "${card.name}"`);
    } else {
      console.log(
        `Carta "${card.name}" não encontrada na mão de ${this.name}.`
      );
    }
  }
}
