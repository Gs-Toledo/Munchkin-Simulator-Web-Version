import { Player } from "./Player";
import { Deck } from "./Deck";
import { CardType, DeckType } from "../types/types";
import { TurnPhase } from "../types/types";
import { MonsterCard } from "./cards/MonsterCard";
import { Card } from "./cards/Card";
import { Bot } from "./bot";

export class Game {
  players: Player[];
  actualPlayer: Player | null;
  treasureDeck: Deck;
  doorDeck: Deck;
  discardPile: Deck;
  turnPhase: TurnPhase;
  turnIndex: number;
  static readonly MIN_PLAYERS = 3;
  static readonly MAX_PLAYERS = 6;

  constructor(players: Player[], treasureDeck: Deck, doorDeck: Deck) {
    if (
      players.length < Game.MIN_PLAYERS ||
      players.length > Game.MAX_PLAYERS
    ) {
      throw new Error(
        `Número de jogadores inválido. Deve estar entre ${Game.MIN_PLAYERS} e ${Game.MAX_PLAYERS}.`
      );
    }

    this.players = players;
    this.treasureDeck = treasureDeck;
    this.doorDeck = doorDeck;
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

  addPlayer(player: Player): void {
    if (this.players.length >= Game.MAX_PLAYERS) {
      console.log("Não é possível adicionar mais jogadores. Limite atingido.");
      return;
    }

    if (this.players.find((p) => p.name === player.name)) {
      console.log(`Jogador ${player.name} já está na lista.`);
      return;
    }

    this.players.push(player);
    console.log(`Jogador ${player.name} foi adicionado ao jogo.`);
  }

  addBot(botName: string): void {
    if (this.players.length >= Game.MAX_PLAYERS) {
      console.log("Não é possível adicionar mais bots. Limite atingido.");
      return;
    }

    const bot = new Bot(botName);
    
    this.players.push(bot);
    console.log(`Bot ${bot.name} foi adicionado ao jogo.`);
  }

  removePlayer(playerName: string): void {
    if (this.players.length <= Game.MIN_PLAYERS) {
      console.log(
        `Não é possível remover jogadores. O jogo precisa de pelo menos ${Game.MIN_PLAYERS} jogadores.`
      );
      return;
    }

    const playerIndex = this.players.findIndex((p) => p.name === playerName);
    if (playerIndex === -1) {
      console.log(`Jogador ${playerName} não encontrado na lista.`);
      return;
    }

    const removedPlayer = this.players.splice(playerIndex, 1)[0];
    console.log(`Jogador ${removedPlayer.name} foi removido do jogo.`);

    // Ajusta o jogador atual e índice do turno se necessário
    if (this.actualPlayer?.name === removedPlayer.name) {
      this.turnIndex = this.turnIndex % this.players.length;
      this.actualPlayer = this.players[this.turnIndex] || null;
      console.log(
        `O jogador atual foi atualizado para ${
          this.actualPlayer ? this.actualPlayer.name : "nenhum"
        }.`
      );
    }
  }

  getPlayers(): Player[] {
    return this.players;
  }

  getPlayerByName(name: string): Player | null {
    const player = this.players.find((p) => p.name === name);
    if (!player) {
      console.log(`Jogador com nome "${name}" não encontrado.`);
      return null;
    }
    return player;
  }

  nextTurn(): void {
    this.turnIndex = (this.turnIndex + 1) % this.players.length;
    this.actualPlayer = this.players[this.turnIndex];
    this.turnPhase = TurnPhase.START;

    if (this.actualPlayer instanceof Bot) {
      this.actualPlayer.takeTurn(this); // Faz o bot executar sua vez automaticamente
    }

    console.log(`Agora é a vez de ${this.actualPlayer.name}`);
  }

  drawCard(player: Player, deckType: DeckType): Card | null {
    let card: Card | null = null;

    // Compra uma carta dependendo do tipo de baralho escolhido (Tesouro ou Porta)
    if (deckType === DeckType.Treasure) {
      card = this.treasureDeck.drawCard();
    } else if (deckType === DeckType.Door) {
      card = this.doorDeck.drawCard();
    }

    if (!card) {
      console.log(
        `O baralho ${DeckType[deckType]} está vazio ou não contém mais cartas.`
      );
      return null;
    }

    console.log(
      `${player.name} comprou a carta: ${card.name} (${CardType[card.type]}).`
    );
    player.addCardToHand(card);

    // Lida com cartas de tipo MONSTER
    if (card.type === CardType.MONSTER) {
      this.handleMonsterCard(player, card as MonsterCard);
    }

    return card;
  }

  handleMonsterCard(player: Player, monsterCard: MonsterCard): void {
    console.log(`${player.name} encontrou o monstro ${monsterCard.name}!`);
    monsterCard.fight(player);

    // Move a carta para a pilha de descarte
    this.discardPile.addCard(monsterCard);
  }

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
