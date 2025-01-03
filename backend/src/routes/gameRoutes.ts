import { Router, Request, Response } from "express";
import { Game } from "../models/Game";
import { Player } from "../models/Player";
import { Deck } from "../models/Deck";
import { DeckType } from "../types/types";
import { Bot } from "../models/bot";

const router = Router();

// Inicializar os baralhos
const treasureDeck = new Deck(DeckType.Treasure);
const doorDeck = new Deck(DeckType.Door);

const game = new Game([], treasureDeck, doorDeck);

// Endpoint para adicionar um jogador
router.post("/add-player", (req: Request, res: Response): any => {
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

// Endpoint para adicionar um bot
router.post("/add-bot", (req: Request, res: Response): any => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Name is required.");
  }

  try {
    const bot = new Bot(name);
    game.addPlayer(bot); // Os bots também são adicionados como jogadores
    res.status(201).json({ message: `Bot ${name} added.`, bot });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para remover um jogador
router.delete("/remove-player", (req: Request, res: Response): any => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Player name is required.");
  }

  try {
    const player = game.getPlayerByName(name);
    if (!player) {
      return res.status(404).send("Player not found.");
    }

    game.removePlayer(name);

    // Verifica se o jogador removido é um bot
    if (player instanceof Bot) {
      res.status(200).json({ message: `Bot ${name} removed.` });
    } else {
      res.status(200).json({ message: `Player ${name} removed.` });
    }
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
router.post("/draw-card", (req: Request, res: Response): any => {
  const { playerName, deckType } = req.body;

  if (!playerName) {
    return res.status(400).send("Player name is required.");
  }

  if (!deckType) {
    return res.status(400).send("Deck type is required.");
  }

  if (deckType !== DeckType.Treasure && deckType !== DeckType.Door) {
    return res.status(400).send("Invalid deck type. Use 'Treasure' or 'Door'.");
  }

  const player = game.getPlayerByName(playerName);
  if (!player) {
    return res.status(404).send("Player not found.");
  }

  try {
    // Selecionar o deck com base no tipo passado
    const card = game.drawCard(player, deckType as DeckType); // Garantir que deckType seja do tipo DeckType

    // Responder com a carta
    res.status(200).json({ message: `${player.name} drew a card.`, card });
  } catch (error) {
    // Erro ao tentar pegar a carta
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred.",
    });
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
