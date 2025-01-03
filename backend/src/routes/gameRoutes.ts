import { Router, Request, Response } from "express";
import { Game } from "../models/Game";
import { Player } from "../models/Player";
import { Deck } from "../models/Deck";
import { DeckType } from "../types/types";

const router = Router();

// Inicializar os baralhos
const treasureDeck = new Deck(DeckType.Treasure); 
const doorDeck = new Deck(DeckType.Door);

const game = new Game([], treasureDeck, doorDeck); 

// Endpoint para adicionar um jogador
router.post("/add-player", (req: Request, res: Response) : any => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Name is required.");
  }

  try {
    const player = new Player(name);
    game.addPlayer(player);
    res.status(201).json({ message: `Player ${name} added.`, player });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para obter a lista de jogadores
router.get("/players", (req: Request, res: Response) => {
  const players = game.getPlayers();
  res.status(200).json(players);
});

// Endpoint para jogador comprar uma carta
router.post("/draw-card", (req: Request, res: Response) : any => {
  const { playerName } = req.body;
  if (!playerName) {
    return res.status(400).send("Player name is required.");
  }

  const player = game.getPlayerByName(playerName);
  if (!player) {
    return res.status(404).send("Player not found.");
  }

  try {
    const card = game.drawCard(player, DeckType.Treasure); 
    res.status(200).json({ message: `${player.name} drew a card.`, card });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para iniciar o jogo
router.post("/start", (req: Request, res: Response) => {
  try {
    game.start();
    res.status(200).send("Game started.");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
