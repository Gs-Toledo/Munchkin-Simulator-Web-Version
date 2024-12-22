export enum Race {
  Human = "Human",
  Elf = "Elf",
  Dwarf = "Dwarf",
  Halfling = "Halfling",
}

export enum Class {
  Warrior = "Warrior",
  Wizard = "Wizard",
  Thief = "Thief",
  Cleric = "Cleric",
  Noob = "Noob", // Sem Classe
}

export enum CardType {
    MONSTER,
    TREASURE,
    CURSE,
    EQUIPMENT,
    CLASS,
    RACE
}

export enum TurnPhase {
    START = "START",  // Fase inicial do turno
    DRAW = "DRAW",    // Fase de comprar carta
    PLAY = "PLAY",    // Fase de jogar cartas ou atacar monstros
    END = "END"       // Fase final do turno
}

export enum DeckType {
  Door = 'Door',
  Trasure= 'Treasure',
  Discard = 'Discard'
}
