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
  Noob = "Noob",
}

export enum CardType {
    MONSTER,
    CURSE,
    EQUIPMENT,
    CLASS,
    RACE
}

export enum EffectType {
  POSITIVE,
  NEGATIVE
}

export enum TurnPhase {
    START = "START",  
    DRAW_CARD = "DRAW_CARD",    
    PLAY_CARD = "PLAY_CARD",   
    COMBAT = "COMBAT",
    CHARITY = "CHARITY",
    END = "END"       
}

export enum DeckType {
  Door = 'Door',
  Treasure = 'Treasure',
  Discard = 'Discard'
}

export enum SocketType {
  HEAD = "Head",
  BODY = "Body",
  HANDS = "Hands",
  FEET = "Feet"
}
