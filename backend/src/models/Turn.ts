import { Player } from "./Player";
import { MonsterCard } from "./cards/MonsterCard";

import { Battle } from "./Battle";
import { TurnPhase } from "../types/types";

export class Turn {
  currentPlayer: Player;
  currentPhase: TurnPhase;
  monster?: MonsterCard;
  battle?: Battle;

  constructor(player: Player) {
    this.currentPlayer = player;
    this.currentPhase = TurnPhase.START;
  }

  startTurn(): void {
    this.currentPhase = TurnPhase.DRAW_CARD;
    console.log(`${this.currentPlayer.name} has started their turn.`);
  }

  nextPhase(): void {
    switch (this.currentPhase) {
      case TurnPhase.DRAW_CARD:
        this.drawCard();
        this.currentPhase = TurnPhase.PLAY_CARD;
        break;
      case TurnPhase.PLAY_CARD:
        this.playCard();
        this.currentPhase = TurnPhase.COMBAT;
        break;
      case TurnPhase.COMBAT:
        this.combat();
        this.currentPhase = TurnPhase.CHARITY;
        break;
      case TurnPhase.CHARITY:
        this.charity();
        this.currentPhase = TurnPhase.END;
        break;
      case TurnPhase.END:
        this.endTurn();
        break;
    }
  }

  drawCard(): void {
    console.log(`${this.currentPlayer.name} is drawing a card.`);
  }

  playCard(): void {
    console.log(`${this.currentPlayer.name} is playing a card.`);
  }

  combat(): void {
    console.log(`${this.currentPlayer.name} is starting a combat.`);

    if (this.monster) {
      this.battle = new Battle(this.currentPlayer, this.monster);
      this.battle.startBattle();
    }
  }

  charity(): void {
    console.log(`${this.currentPlayer.name} is performing charity.`);
  }

  endTurn(): void {
    console.log(`${this.currentPlayer.name} has ended their turn.`);
  }
}
