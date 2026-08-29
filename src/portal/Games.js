import React, {useEffect, useMemo, useState} from "react";
import {Eyebrow} from "./Portal";

function TapGrid() {
  const [status, setStatus] = useState("idle");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [target, setTarget] = useState(5);
  const [best, setBest] = useState(() =>
    Number(window.localStorage.getItem("tap-grid-best") || 0)
  );

  useEffect(() => {
    if (status !== "playing") return undefined;
    const timer = window.setInterval(() => {
      setTime(value => {
        if (value <= 1) {
          setStatus("ended");
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [status]);

  useEffect(() => {
    if (status === "ended" && score > best) {
      setBest(score);
      window.localStorage.setItem("tap-grid-best", score);
    }
  }, [best, score, status]);

  const start = () => {
    setScore(0);
    setTime(15);
    setTarget(Math.floor(Math.random() * 16));
    setStatus("playing");
  };

  const hit = index => {
    if (status !== "playing" || index !== target) return;
    setScore(value => value + 1);
    setTarget(current => {
      let next = current;
      while (next === current) next = Math.floor(Math.random() * 16);
      return next;
    });
  };

  return (
    <div className="game-panel tap-game">
      <div className="game-stats">
        <span>
          <small>Score</small>
          {score}
        </span>
        <span>
          <small>Time</small>
          {time}s
        </span>
        <span>
          <small>Best</small>
          {best}
        </span>
      </div>
      <div className="tap-grid" aria-label="Four by four speed grid">
        {Array.from({length: 16}).map((_, index) => (
          <button
            key={index}
            type="button"
            className={status === "playing" && target === index ? "target" : ""}
            onClick={() => hit(index)}
            aria-label={
              status === "playing" && target === index
                ? "Active target"
                : `Grid cell ${index + 1}`
            }
          >
            {status === "playing" && target === index ? <span /> : null}
          </button>
        ))}
      </div>
      <div className="game-controls">
        <p>
          {status === "idle"
            ? "Find the bright signal. Fifteen seconds. Go fast."
            : status === "ended"
            ? `Round complete — ${score} clean hits.`
            : "Keep your eyes ahead of your pointer."}
        </p>
        {status !== "playing" && (
          <button type="button" onClick={start}>
            {status === "idle" ? "Start round" : "Play again"}
          </button>
        )}
      </div>
    </div>
  );
}

const memorySymbols = ["◒", "△", "✦", "⌁", "◇", "✳", "○", "⌘"];

function createDeck() {
  return [...memorySymbols, ...memorySymbols]
    .map((symbol, index) => ({
      id: `${symbol}-${index}`,
      symbol,
      order: Math.random()
    }))
    .sort((a, b) => a.order - b.order);
}

function MemoryGame() {
  const [deck, setDeck] = useState(createDeck);
  const [open, setOpen] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (open.length !== 2) return undefined;
    const [first, second] = open;
    const isMatch = deck[first].symbol === deck[second].symbol;
    const timer = window.setTimeout(
      () => {
        if (isMatch)
          setMatched(values => [...values, deck[first].id, deck[second].id]);
        setOpen([]);
      },
      isMatch ? 420 : 720
    );
    return () => window.clearTimeout(timer);
  }, [deck, open]);

  const flip = index => {
    if (
      open.length === 2 ||
      open.includes(index) ||
      matched.includes(deck[index].id)
    )
      return;
    setOpen(values => [...values, index]);
    if (open.length === 1) setMoves(value => value + 1);
  };

  const reset = () => {
    setDeck(createDeck());
    setOpen([]);
    setMatched([]);
    setMoves(0);
  };

  const complete = matched.length === deck.length;
  return (
    <div className="game-panel memory-game">
      <div className="game-stats compact">
        <span>
          <small>Moves</small>
          {moves}
        </span>
        <span>
          <small>Pairs</small>
          {matched.length / 2}/8
        </span>
      </div>
      <div className="memory-grid" aria-label="Memory matching game">
        {deck.map((card, index) => {
          const visible = open.includes(index) || matched.includes(card.id);
          return (
            <button
              key={card.id}
              type="button"
              className={`${visible ? "visible" : ""} ${
                matched.includes(card.id) ? "matched" : ""
              }`}
              onClick={() => flip(index)}
              aria-label={visible ? `Card ${card.symbol}` : "Hidden card"}
            >
              <span>{card.symbol}</span>
            </button>
          );
        })}
      </div>
      <div className="game-controls">
        <p>
          {complete
            ? `Perfect. You cleared the field in ${moves} moves.`
            : "Match every signal with its twin."}
        </p>
        <button type="button" onClick={reset}>
          {complete ? "Play again" : "Shuffle"}
        </button>
      </div>
    </div>
  );
}

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const winner = useMemo(() => {
    const line = wins.find(combo =>
      combo.every(index => board[index] && board[index] === board[combo[0]])
    );
    return line ? {player: board[line[0]], line} : null;
  }, [board]);
  const draw = !winner && board.every(Boolean);

  const move = index => {
    if (board[index] || winner) return;
    setBoard(values =>
      values.map((value, cell) => (cell === index ? turn : value))
    );
    setTurn(value => (value === "X" ? "O" : "X"));
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
  };

  return (
    <div className="game-panel noughts-game">
      <div className="turn-indicator">
        <span className={turn === "X" ? "active" : ""}>X</span>
        <small>
          {winner
            ? `${winner.player} takes the round`
            : draw
            ? "A precise draw"
            : `${turn}'s turn`}
        </small>
        <span className={turn === "O" ? "active" : ""}>O</span>
      </div>
      <div className="noughts-grid" aria-label="Tic tac toe board">
        {board.map((value, index) => (
          <button
            key={index}
            type="button"
            className={winner && winner.line.includes(index) ? "winner" : ""}
            onClick={() => move(index)}
            aria-label={`Cell ${index + 1}${value ? ` contains ${value}` : ""}`}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="game-controls">
        <p>Pass the device. First line of three owns the grid.</p>
        <button type="button" onClick={reset}>
          New board
        </button>
      </div>
    </div>
  );
}

const games = [
  {
    id: "tap",
    number: "01",
    title: "Signal",
    note: "Speed / 15 seconds",
    component: TapGrid,
    color: "#5865f2"
  },
  {
    id: "memory",
    number: "02",
    title: "Pairs",
    note: "Memory / 8 pairs",
    component: MemoryGame,
    color: "#ff6f52"
  },
  {
    id: "noughts",
    number: "03",
    title: "Three",
    note: "Local / 2 players",
    component: TicTacToe,
    color: "#eeb647"
  }
];

export default function PlayPage() {
  const [active, setActive] = useState("tap");
  const current = games.find(game => game.id === active);
  const ActiveGame = current.component;

  return (
    <div className="page play-page">
      <section className="page-hero play-hero">
        <Eyebrow tone="#eeb647">Playable lab</Eyebrow>
        <h1>
          Think with
          <br />
          <em>your hands.</em>
        </h1>
        <div className="hero-side-copy">
          <p>
            Small browser games built to explore feedback, rhythm, and the tiny
            details that make an interaction feel alive.
          </p>
          <span>No accounts. No loading screens. Just play.</span>
        </div>
      </section>

      <section className="game-studio">
        <div className="game-tabs" role="tablist" aria-label="Choose a game">
          {games.map(game => (
            <button
              key={game.id}
              type="button"
              role="tab"
              aria-selected={active === game.id}
              className={active === game.id ? "active" : ""}
              onClick={() => setActive(game.id)}
              style={{"--game-color": game.color}}
            >
              <span>{game.number}</span>
              <strong>{game.title}</strong>
              <small>{game.note}</small>
            </button>
          ))}
        </div>
        <div className="active-game" style={{"--game-color": current.color}}>
          <div className="active-game-title">
            <span>Now playing</span>
            <h2>{current.title}</h2>
            <p>{current.note}</p>
          </div>
          <ActiveGame />
        </div>
      </section>
    </div>
  );
}
