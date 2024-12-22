import { Card } from "./Card";
import { CardType } from "../../types/types";

export class TreasureCard extends Card {
  valorOuro: number;

  constructor(
    id: number,
    name: string,
    valorOuro: number,
    description: string
  ) {
    super(
      id,
      name,
      CardType.TREASURE,
      `Vale ${valorOuro} de ouro`,
      description
    );
    this.valorOuro = valorOuro;
  }

  vender(): number {
    console.log(`${this.name} foi vendido por ${this.valorOuro} de ouro.`);
    return this.valorOuro;
  }
}
