import { Card } from "./Card";
import { CardType, SocketType } from "../../types/types";
import { Player } from "../Player";
import { CardEffect } from "../interface/CardEffect";

export class EquipmentCard extends Card {
  bonus: number;
  isEquipped: boolean;
  socket: SocketType;
  value: number;

  constructor(
    id: number,
    name: string,
    bonus: number,
    description: string,
    socket: SocketType,
    effect: CardEffect
  ) {
    super(
      id,
      name,
      CardType.EQUIPMENT,
      effect,
      description
    );
    this.bonus = bonus;
    this.isEquipped = false;
    this.socket = socket;
    this.value = 0;
  }

  equip(player: Player): void {
    if (!this.isEquipped) {
      this.isEquipped = true;
      player.bonus += this.bonus;
      console.log(
        `${player.name} equipou o item ${this.name} no slot ${this.socket}, ganhando ${this.bonus} de bônus.`
      );
    } else {
      console.log(`${this.name} já está equipado.`);
    }
  }

  unequip(player: Player): void {
    if (this.isEquipped) {
      this.isEquipped = false;
      player.bonus -= this.bonus;
      console.log(
        `${player.name} removeu o item ${this.name} do slot ${this.socket}, perdendo ${this.bonus} de bônus.`
      );
    } else {
      console.log(`${this.name} não está equipado.`);
    }
  }
}
