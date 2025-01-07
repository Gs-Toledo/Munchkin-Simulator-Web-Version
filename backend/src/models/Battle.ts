import { Player } from "./Player";
import { MonsterCard } from "./cards/MonsterCard";

export class Battle {
  player: Player;
  monster: MonsterCard;
  ally?: Player;
  interferences: string[];

  constructor(player: Player, monster: MonsterCard, ally?: Player) {
    this.player = player;
    this.monster = monster;
    this.ally = ally;
    this.interferences = [];
  }

  startBattle(): boolean {
    console.log(
      `${this.player.name} started a battle against ${this.monster.name}!`
    );

    if (this.ally) {
      console.log(`${this.ally.name} is helping ${this.player.name} in the battle!`);
    }

    const playerStrength = this.calculateCombatPower();
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

  addAlly(ally: Player): void {
    this.ally = ally;
    console.log(`${ally.name} is now allied with ${this.player.name} in the battle.`);
  }

  calculateCombatPower(): number {
    let power = this.player.calculateTotalBonus();
    if (this.ally) {
      power += this.ally.calculateTotalBonus();
    }
    return power;
  }

  applyInterference(interference: string): void {
    this.interferences.push(interference);
    console.log(`Interference applied: ${interference}`);
  }

  attemptEscape(): boolean {
    const escapeSuccess = Math.random() > 0.5; // 50% de chance de escapar
    if (escapeSuccess) {
      console.log(`${this.player.name} successfully escaped from the battle.`);
    } else {
      console.log(`${this.player.name} failed to escape from the battle.`);
    }
    return escapeSuccess;
  }

  distributeRewards(): void {
    const { reward } = this.monster;
    const rewardPerPlayer = Math.floor(reward / (this.ally ? 2 : 1));
    this.player.treasures += rewardPerPlayer;
    console.log(`${this.player.name} received ${rewardPerPlayer} treasures.`);

    if (this.ally) {
      this.ally.treasures += rewardPerPlayer;
      console.log(`${this.ally.name} received ${rewardPerPlayer} treasures.`);
    }
  }
}
