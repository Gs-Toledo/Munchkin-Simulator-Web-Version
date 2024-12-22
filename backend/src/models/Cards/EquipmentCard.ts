import { Card } from "./Card";

export interface EquipmentCard extends Card {
    bonus: number;
    isEquipped: boolean;
  }