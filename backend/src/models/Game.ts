import { Player } from "./Player";
import { Deck } from "./Deck";
import { CardType, DeckType } from "../types/types";
import { TurnPhase } from "../types/types";
import { MonsterCard } from "./cards/MonsterCard";

export class Game {
  players: Player[];
  actualPlayer: Player | null;
  deck: Deck;
  discardPile: Deck;
  turnPhase: TurnPhase;
  turnIndex: number;

  constructor(players: Player[], deck: Deck) {
    this.players = players;
    this.deck = deck;
    this.discardPile = new Deck(DeckType.Discard);
    this.turnPhase = TurnPhase.START;
    this.turnIndex = 0;
    this.actualPlayer = null;
  }

  start(): void {
    console.log("Iniciando o jogo de Munchkin!");
    this.players.forEach((player) => {
      console.log(`${player.name} está no nível ${player.level}`);
    });

    // Define o primeiro jogador
    this.actualPlayer = this.players[this.turnIndex];
    console.log(`O primeiro jogador é ${this.actualPlayer.name}`);
  }

  // Gerencia a troca de turnos
  nextTurn(): void {
    this.turnIndex = (this.turnIndex + 1) % this.players.length;
    this.actualPlayer = this.players[this.turnIndex];
    this.turnPhase = TurnPhase.START;
    console.log(`Agora é a vez de ${this.actualPlayer.name}`);
  }

  // Compra uma carta do baralho principal
  drawCard(player: Player): void {
    const card = this.deck.drawCard();
    if (!card) {
      console.log("O baralho está vazio.");
      return;
    }

    console.log(`${player.name} comprou a carta: ${card.name}`);
    player.addCardToHand(card);

    // Lida com cartas de tipo monster
    if (card.type === CardType.MONSTER) {
      this.handleMonsterCard(player, card as MonsterCard);
    } else {
      console.log(
        `A carta ${card.name} foi adicionada à mão de ${player.name}`
      );
    }
  }

  // Lida com uma carta de monstro
  handleMonsterCard(player: Player, card: MonsterCard): void {
    const monster = new MonsterCard(card.name, card.level, card.reward); // Exemplo básico
    console.log(`${player.name} encontrou o monstro ${monster.name}!`);

    const won = monster.fight(player.level);
    if (won) {
      player.levelUp();
      console.log(`${player.name} derrotou o monstro ${monster.name}`);
    } else {
      console.log(`${player.name} perdeu para o monstro ${monster.name}`);
    }

    // Move a carta para a pilha de descarte
    this.discardPile.addCard(card);
  }

  // Descarte de carta
  discardCard(player: Player, cardName: string): void {
    const cardIndex = player.hand.findIndex((card) => card.name === cardName);
    if (cardIndex !== -1) {
      const [card] = player.hand.splice(cardIndex, 1);
      this.discardPile.addCard(card);
      console.log(`${player.name} descartou a carta: ${card.name}`);
    } else {
      console.log(`${player.name} não possui a carta: ${cardName}`);
    }
  }

  // Gerencia as fases do turno
  progressTurnPhase(): void {
    switch (this.turnPhase) {
      case TurnPhase.START:
        console.log("Fase de início do turno.");
        this.turnPhase = TurnPhase.DRAW;
        break;
      case TurnPhase.DRAW:
        console.log("Fase de compra de carta.");
        this.turnPhase = TurnPhase.PLAY;
        break;
      case TurnPhase.PLAY:
        console.log("Fase de jogar cartas ou atacar monstros.");
        this.turnPhase = TurnPhase.END;
        break;
      case TurnPhase.END:
        console.log("Fase de finalização do turno.");
        this.nextTurn();
        break;
    }
  }
}
