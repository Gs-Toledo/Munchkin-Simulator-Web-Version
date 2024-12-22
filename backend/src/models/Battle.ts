import { Player } from "./Player";
import { MonsterCard } from "./cards/MonsterCard";

export class Battle {
  player: Player;
  monster: MonsterCard;

  constructor(player: Player, monster: MonsterCard) {
    this.player = player;
    this.monster = monster;
  }

  startBattle(): boolean {
    console.log(
      `${this.player.name} started a battle against ${this.monster.name}!`
    );
    const playerStrength = this.player.calculateTotalBonus();
    const result = playerStrength >= this.monster.level;

    if (result) {
      console.log(
        `${this.player.name} defeated the monster ${this.monster.name} and gained ${this.monster.reward} treasure(s).`
      );
      this.player.levelUp();
      this.player.treasures += this.monster.reward;
    } else {
      console.log(
        `${this.player.name} lost the battle against the monster ${this.monster.name}.`
      );
    }

    return result;
  }
}
