import { Router, Request, Response } from "express";
import { Game } from "../models/Game";
import { Player } from "../models/Player";
import { Deck } from "../models/Deck";
import { MonsterCard } from "../models/cards/MonsterCard";
import { EquipmentCard } from "../models/cards/EquipmentCard";
import { TreasureCard } from "../models/cards/TreasureCard";
import { SocketType } from "../types/types";

const router = Router();

// Cartas de exemplo
const cards = [
  new MonsterCard(24, "Goblin", 4, 2, "Um pequeno goblin assustador."),
  new EquipmentCard(33, "Espada de Madeira", 1, "Aumenta +1 no combate.", SocketType.HANDS),
  new TreasureCard(88, "Tesouro Perdido", 600, "Ganhe um tesouro extra."),
];

const deck = new Deck(cards);
const game = new Game([], deck);

// Endpoint para adicionar um jogador
// A AJUSTAR
router.post("/add-player", (req: Request, res: Response) => {
  const { name } = req.body;
  const player = new Player(name);
  game.addPlayer(player);
  res.status(201).send(`Player ${name} added.`);
});

// Endpoint para obter a lista de jogadores
// A AJUSTAR
router.get("/players", (req: Request, res: Response) => {
  const players = game.getPlayers();
  res.json(players);
});

// Endpoint para jogador comprar uma carta
// A AJUSTAR
router.post("/draw-card", (req: Request, res: Response) => {
  const { playerName } = req.body;
  const player = game.getPlayerByName(playerName);
  if (player) {
    const card = game.drawCard(player);
    res.status(200).json({ player, card });
  } else {
    res.status(404).send("Player not found.");
  }
});

export default router;
