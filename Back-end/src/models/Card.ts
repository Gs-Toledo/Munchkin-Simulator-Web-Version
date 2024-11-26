export enum CardType {
    MONSTER,
    TREASURE,
    CURSE,
    EQUIPMENT,
}

export class Card {
    name: string;
    type: CardType;
    effect: string;

    constructor(name: string, type: CardType, effect: string) {
        this.name = name;
        this.type = type;
        this.effect = effect;
    }

    play(): void {
        console.log(`Jogando carta: ${this.name} - ${this.effect}`);
    }
}
