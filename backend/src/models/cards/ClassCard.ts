import { Card } from "./Card";
import { CardType, Class } from "../../types/types";
import { Player } from "../Player";

export class ClassCard extends Card {
    bonus: number;
    class: Class;

    constructor(  id: number,name: string, bonus: number, description: string, className: Class) {
        super(id ,name, CardType.CLASS, `Concede bônus de ${bonus}`, description);
        this.bonus = bonus;
        this.class = className
    }

    equip(player: Player): void {
        player.class = this.class; // Define a classe do jogador
        player.bonus += this.bonus;
        console.log(`${player.name} equipou a classe ${this.name} e recebeu um bônus de ${this.bonus}.`);
    }

    unequip(player: Player): void {
        player.class = Class.Noob; // Remove a classe do jogador
        player.bonus -= this.bonus;
        console.log(`${player.name} removeu a classe ${this.name} e perdeu o bônus de ${this.bonus}.`);
    }
}
