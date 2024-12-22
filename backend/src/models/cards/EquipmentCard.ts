import { Card } from "./Card";
import { CardType, SocketType } from "../../types/types";
import { Player } from "../Player";

export class EquipmentCard extends Card {
  bonus: number;
  isEquipped: boolean;
  socket: SocketType;

  constructor(
    id: number,
    name: string,
    bonus: number,
    description: string,
    socket: SocketType
  ) {
    super(
      id,
      name,
      CardType.EQUIPMENT,
      `Concede bônus de ${bonus}`,
      description
    );
    this.bonus = bonus;
    this.isEquipped = false;
    this.socket = socket;
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
