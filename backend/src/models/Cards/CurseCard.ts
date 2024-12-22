import { Card } from "./Card";
import { Player } from "../Player";
import { CardType } from "../../types/types";

export class CartaMaldiçao extends Card {
  efeito: (player: Player) => void;

  constructor(
    id: number,
    name: string,
    description: string,
    efeito: (player: Player) => void
  ) {
    super(id ,name, CardType.CURSE, `Maldição: ${description}`, description);
    this.efeito = efeito;
  }

  aplicarEfeito(player: Player): void {
    console.log(`${this.name} está aplicando uma maldição em ${player.name}.`);
    this.efeito(player);
  }
}
