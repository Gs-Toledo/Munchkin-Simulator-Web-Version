export class Monster {
    name: string;
    level: number;
    treasures: number;

    constructor(name: string, level: number, treasures: number) {
        this.name = name;
        this.level = level;
        this.treasures = treasures;
    }

    fight(playerLevel: number): boolean {
        return playerLevel >= this.level;
    }
}
