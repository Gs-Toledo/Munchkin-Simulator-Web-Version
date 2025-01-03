import { Player } from "./Player";
import { DeckType } from "../types/types";
import { Card } from "./cards/Card";
import { EquipmentCard } from "./cards/EquipmentCard";
import { Game } from "./Game";

export class Bot extends Player {
  constructor(name: string) {
    super(name);
  }

  // Método para simular a ação de desenhar uma carta
  drawCardAutomatically(deckType: DeckType, game: Game): void {
    // Verifica se o jogador pode comprar uma carta e se o deckType é válido
    if (deckType === DeckType.Treasure || deckType === DeckType.Door) {
      console.log(`${this.name} está comprando uma carta do deck ${deckType}`);
      
      const card = game.drawCard(this, deckType);
      
      // Verifica se a carta não é nula
      if (card !== null) {
        this.addCardToHand(card);
      } else {
        console.log(`${this.name} não conseguiu comprar uma carta.`);
      }
    } else {
      console.log("Tipo de deck inválido");
    }
  }
  

  // Método para simular equipar um item automaticamente
  equipItemAutomatically(item: EquipmentCard): void {
    console.log(`${this.name} está equipando o item ${item.name}`);
    this.equipItem(item);
  }

  // Método para tomar uma decisão simples, como nivelar automaticamente
  levelUpAutomatically(): void {
    this.levelUp();
    console.log(`${this.name} subiu de nível automaticamente`);
  }

  // Método para fazer o bot jogar, pode ser expandido com mais lógica
  takeTurn(game: Game): void {
    // O bot pode realizar ações como desenhar carta, equipar item ou subir de nível
    const actions = [
      () => this.drawCardAutomatically(DeckType.Treasure, game),
      () => this.levelUpAutomatically(),
    ];
  
    // O bot escolhe uma ação aleatória para executar
    const action = actions[Math.floor(Math.random() * actions.length)];
    action();
  }
}
