import { Card } from "./Card";
import { Player } from "../Player";
import { CardType } from "../../types/types";

export class CurseCard extends Card {
  curseEffect: (player: Player) => void;

  constructor(
    id: number,
    name: string,
    description: string,
    curseEffect: (player: Player) => void
  ) {
    super(id ,name, CardType.CURSE, `Maldição: ${description}`, description);
    this.curseEffect = curseEffect;
  }

  aplycurseEffect(player: Player): void {
    console.log(`${this.name} está aplicando uma maldição em ${player.name}.`);
    this.curseEffect(player);
  }
}
