import { Card } from "./Card";
import { CardType, Race } from "../../types/types";
import { Player } from "../Player";

export class RaceCard extends Card {
  bonus: number;
  race: Race;

  constructor(
    id: number,
    name: string,
    bonus: number,
    description: string,
    race: Race
  ) {
    super(id, name, CardType.RACE, `Concede bônus de ${bonus}`, description);
    this.bonus = bonus;
    this.race = race;
  }

  equip(player: Player): void {
    player.race = this.race;
    console.log(`${player.name} mudou para a raça ${this.race}.`);

  }

  unequip(player: Player): void {
    if (player.race === this.race) {
      player.race = Race.Human; // Volta para a raça padrão (Humano)
      console.log(
        `${player.name} removeu a raça ${this.race}.`
      );
    } else {
      console.log(
        `${player.name} não está utilizando a raça ${this.race}, então não é possível removê-la.`
      );
    }
  }
}
