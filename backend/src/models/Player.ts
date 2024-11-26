export class Player {
    name: string;
    level: number;
    treasures: number;

    constructor(name: string) {
        this.name = name;
        this.level = 1; 
        this.treasures = 0;
    }

    levelUp(): void {
        this.level++;
        console.log(`${this.name} subiu para o nível ${this.level}`);
    }

    gainTreasure(): void {
        this.treasures++;
        console.log(`${this.name} ganhou um tesouro! Total: ${this.treasures}`);
    }
}
