import { useEffect, useState } from "react";
import "./CardMatchGame.css";

const CARD_COLORS = ["Red", "Blue", "Green", "Gold"];
const CARD_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const PLAYER_NAMES = ["You", "Mojo Bot", "Nova Bot", "Pixel Bot"];
const STARTING_HAND_SIZE = 5;
const CARD_FLIGHT_DURATION_MS = 1700;
const COMPUTER_TURN_DELAY_MS = CARD_FLIGHT_DURATION_MS + 150;

const joinClasses = (...classes) => classes.filter(Boolean).join(" ");

const createDeck = () =>
  CARD_COLORS.flatMap((color) =>
    CARD_SYMBOLS.flatMap((symbol) => [
      { id: `${color}-${symbol}-a`, color, symbol },
      { id: `${color}-${symbol}-b`, color, symbol },
    ]),
  );

const shuffle = (cards) => {
  const nextCards = [...cards];

  for (let index = nextCards.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextCards[index], nextCards[swapIndex]] = [
      nextCards[swapIndex],
      nextCards[index],
    ];
  }

  return nextCards;
};

const isCardPlayable = (card, discardCard) =>
  card.color === discardCard.color || card.symbol === discardCard.symbol;

const nextPlayerIndex = (currentPlayer) =>
  currentPlayer === PLAYER_NAMES.length - 1 ? 0 : currentPlayer + 1;

const createPlayedCardState = (
  currentGame,
  players,
  playerIndex,
  card,
  extraState = {},
) => {
  const playerName = PLAYER_NAMES[playerIndex];
  const playerWon = players[playerIndex].length === 0;

  return {
    ...currentGame,
    ...extraState,
    players,
    previousDiscardCard: currentGame.discardCard,
    discardCard: card,
    lastPlayedBy: playerIndex,
    animationKey: currentGame.animationKey + 1,
    ...(playerWon
      ? {
          winner: playerName,
          message:
            playerIndex === 0
              ? "You win the match."
              : `${playerName} wins the match.`,
        }
      : {
          currentPlayer: nextPlayerIndex(playerIndex),
          message: `${playerName} played ${card.color} ${card.symbol}.`,
        }),
  };
};

const createGame = () => {
  const deck = shuffle(createDeck());
  const players = PLAYER_NAMES.map(() => []);

  for (let round = 0; round < STARTING_HAND_SIZE; round += 1) {
    players.forEach((hand) => {
      hand.push(deck.pop());
    });
  }

  return {
    players,
    drawPile: deck.slice(0, -1),
    discardCard: deck[deck.length - 1],
    previousDiscardCard: null,
    drawAnimationCard: null,
    drawAnimationKey: 0,
    currentPlayer: 0,
    winner: null,
    lastPlayedBy: null,
    animationKey: 0,
    message: "Match the color or number. First player with no cards wins.",
  };
};

function CardMatchGame() {
  const [game, setGame] = useState(createGame);
  const [modalMessage, setModalMessage] = useState("");

  const humanHand = game.players[0];
  const isDrawingCard = Boolean(game.drawAnimationCard);
  const hasPlayableCard = humanHand.some((card) =>
    isCardPlayable(card, game.discardCard),
  );

  useEffect(() => {
    if (game.winner || game.currentPlayer === 0) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setGame((currentGame) => {
        if (currentGame.winner || currentGame.currentPlayer === 0) {
          return currentGame;
        }

        const playerIndex = currentGame.currentPlayer;
        const players = currentGame.players.map((hand) => [...hand]);
        const drawPile = [...currentGame.drawPile];
        const playableCard = players[playerIndex].find((card) =>
          isCardPlayable(card, currentGame.discardCard),
        );

        if (playableCard) {
          players[playerIndex] = players[playerIndex].filter(
            (card) => card.id !== playableCard.id,
          );

          return createPlayedCardState(
            currentGame,
            players,
            playerIndex,
            playableCard,
            { drawPile },
          );
        }

        if (drawPile.length > 0) {
          players[playerIndex].push(drawPile.pop());
        }

        return {
          ...currentGame,
          players,
          drawPile,
          currentPlayer: nextPlayerIndex(playerIndex),
          message: `${PLAYER_NAMES[playerIndex]} drew a card.`,
        };
      });
    }, COMPUTER_TURN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [game.currentPlayer, game.winner]);

  useEffect(() => {
    if (!game.previousDiscardCard) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setGame((currentGame) => ({
        ...currentGame,
        previousDiscardCard: null,
      }));
    }, CARD_FLIGHT_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [game.animationKey, game.previousDiscardCard]);

  useEffect(() => {
    if (!game.drawAnimationCard) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setGame((currentGame) => {
        if (!currentGame.drawAnimationCard) {
          return currentGame;
        }

        const players = currentGame.players.map((hand) => [...hand]);
        players[0].push(currentGame.drawAnimationCard);

        return {
          ...currentGame,
          players,
          drawAnimationCard: null,
          currentPlayer: nextPlayerIndex(0),
        };
      });
    }, CARD_FLIGHT_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [game.drawAnimationCard]);

  const restartGame = () => {
    setModalMessage("");
    setGame(createGame());
  };

  const playHumanCard = (cardToPlay) => {
    if (game.currentPlayer !== 0 || game.winner || isDrawingCard) {
      return;
    }

    if (!isCardPlayable(cardToPlay, game.discardCard)) {
      setModalMessage("Choose a card with the same color or number.");
      return;
    }

    setGame((currentGame) => {
      const players = currentGame.players.map((hand) => [...hand]);
      players[0] = players[0].filter((card) => card.id !== cardToPlay.id);

      return createPlayedCardState(currentGame, players, 0, cardToPlay);
    });
  };

  const drawHumanCard = () => {
    if (game.currentPlayer !== 0 || game.winner || isDrawingCard) {
      return;
    }

    setGame((currentGame) => {
      if (currentGame.drawPile.length === 0) {
        return {
          ...currentGame,
          currentPlayer: nextPlayerIndex(0),
          message: "The draw pile is empty. Your turn is skipped.",
        };
      }

      const drawPile = [...currentGame.drawPile];
      const drawnCard = drawPile.pop();

      return {
        ...currentGame,
        drawPile,
        drawAnimationCard: drawnCard,
        drawAnimationKey: currentGame.drawAnimationKey + 1,
        message: `You drew ${drawnCard.color} ${drawnCard.symbol}.`,
      };
    });
  };

  const renderOpponentSeat = (playerIndex, seatPosition) => {
    const name = PLAYER_NAMES[playerIndex];
    const isActive = game.currentPlayer === playerIndex;
    const cardCount = game.players[playerIndex].length;
    const visibleCardBacks = Math.min(cardCount, 8);
    const hiddenCardBacks = cardCount - visibleCardBacks;

    return (
      <div
        className={joinClasses(
          "opponentSeat",
          `opponentSeat${seatPosition}`,
          isActive && "activeSeat",
        )}
      >
        <span>{name}</span>
        <div
          aria-label={`${name} has ${cardCount} cards`}
          className={joinClasses(
            "opponentCardBacks",
            cardCount > 7 && "opponentCardBacksStacked",
          )}
        >
          {Array.from({ length: visibleCardBacks }, (_, cardIndex) => (
            <i
              aria-hidden="true"
              className={"opponentCardBack"}
              key={`${name}-card-${cardIndex}`}
            />
          ))}
          {hiddenCardBacks > 0 && (
            <em className={"opponentCardOverflow"}>+{hiddenCardBacks}</em>
          )}
        </div>
        <strong>{cardCount} cards</strong>
      </div>
    );
  };

  return (
    <section className={"cardMatchGame"} aria-label="Card Match game">
      <div className={"cardTable"}>
        {renderOpponentSeat(1, "Left")}
        {renderOpponentSeat(2, "Top")}
        {renderOpponentSeat(3, "Right")}

        <div
          aria-label={`Draw deck has ${game.drawPile.length} cards`}
          className={"drawDeck"}
        >
          <i aria-hidden="true" className="drawDeckCardBack" />
          <i aria-hidden="true" className="drawDeckCardBack" />
          <i aria-hidden="true" className="drawDeckCardBack" />
          <strong>{game.drawPile.length}</strong>
        </div>

        <div className={"discardZone"}>
          <div className={"discardPile"}>
            {game.previousDiscardCard && (
              <div
                className={joinClasses(
                  "rushCard",
                  `rushCard${game.previousDiscardCard.color}`,
                  "previousDiscardCard",
                )}
              >
                <span>{game.previousDiscardCard.color}</span>
                <strong>{game.previousDiscardCard.symbol}</strong>
              </div>
            )}

            <div
              className={joinClasses(
                "rushCard",
                `rushCard${game.discardCard.color}`,
                "discardCard",
                game.lastPlayedBy !== null &&
                  `discardFlightFrom${game.lastPlayedBy}`,
              )}
              key={`${game.discardCard.id}-${game.animationKey}`}
            >
              <span>{game.discardCard.color}</span>
              <strong>{game.discardCard.symbol}</strong>
            </div>
          </div>
        </div>

        <div
          className={joinClasses(
            "humanSeat",
            game.currentPlayer === 0 && "activeSeat",
          )}
        >
          {game.winner ? (
            <div className={"winnerPanel"}>
              <h2>{game.winner} won Card Match!</h2>
              <button onClick={restartGame}>Play Again</button>
            </div>
          ) : (
            <>
              <div className={"humanHand"}>
                {humanHand.map((card) => {
                  const playable = isCardPlayable(card, game.discardCard);

                  return (
                    <div className={"humanCardSlot"} key={card.id}>
                      <button
                        className={joinClasses(
                          "rushCard",
                          `rushCard${card.color}`,
                          playable && "playableCard",
                        )}
                        disabled={game.currentPlayer !== 0 || isDrawingCard}
                        onClick={() => playHumanCard(card)}
                      >
                        <span>{card.color}</span>
                        <strong>{card.symbol}</strong>
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className={"cardActions"}>
                <button
                  disabled={game.currentPlayer !== 0 || isDrawingCard}
                  onClick={drawHumanCard}
                >
                  Draw Card
                </button>
                <button onClick={restartGame}>Restart</button>
              </div>

              {game.currentPlayer === 0 && !hasPlayableCard && (
                <p className={"hintText"}>No matching card. Draw to pass.</p>
              )}
            </>
          )}
        </div>

        <p className={"gameMessage"}>{game.message}</p>

        {game.drawAnimationCard && (
          <div className={"drawFlightLayer"}>
            <div
              className={joinClasses(
                "rushCard",
                `rushCard${game.drawAnimationCard.color}`,
                "drawFlightCard",
              )}
              key={`${game.drawAnimationCard.id}-${game.drawAnimationKey}`}
            >
              <span>{game.drawAnimationCard.color}</span>
              <strong>{game.drawAnimationCard.symbol}</strong>
            </div>
          </div>
        )}
      </div>

      {modalMessage && (
        <div aria-modal="true" className={"modalBackdrop"} role="dialog">
          <div className={"modal"}>
            <h2>Wrong card</h2>
            <p>{modalMessage}</p>
            <button onClick={() => setModalMessage("")}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CardMatchGame;
