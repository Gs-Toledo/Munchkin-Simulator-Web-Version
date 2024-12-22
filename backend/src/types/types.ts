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

export interface Card {
  name: string;
  description: string;
}

export interface EquipmentCard extends Card {
  bonus: number;
  isEquipped: boolean;
}
