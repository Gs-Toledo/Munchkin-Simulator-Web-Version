import { Card } from "./Card";
import { CardType } from "../../types/types";
import { Player } from "../Player";

export class MonsterCard extends Card {
  level: number;
  reward: number;

  constructor(
    id: number,
    name: string,
    level: number,
    reward: number,
    description: string
  ) {
    super(
      id,
      name,
      CardType.MONSTER,
      `Nível ${level}, recompensa de ${reward} tesouros`,
      description
    );
    this.level = level;
    this.reward = reward;
  }

  fight(jogador: Player): boolean {
    console.log(`${jogador.name} está enfrentando o monstro ${this.name}.`);
    if (jogador.bonus >= this.level) {
      console.log(`${jogador.name} derrotou o monstro ${this.name}!`);
      jogador.levelUp();
      jogador.treasures += this.reward;
      return true;
    } else {
      console.log(`${jogador.name} perdeu para o monstro ${this.name}.`);
      return false;
    }
  }
}
