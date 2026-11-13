import React from "react";
import {Arrow, Eyebrow, GithubIcon} from "./Portal";
import {playableGames} from "./data";

function GameFeature({game, reversed}) {
  return (
    <article
      className={`game-feature${reversed ? " reversed" : ""}`}
      style={{"--game-color": game.color}}
      id={game.slug}
    >
      <div className="game-feature-copy">
        <div className="game-feature-meta">
          <span>{game.number}</span>
          <span>{game.status}</span>
          <span>{game.year}</span>
        </div>
        <h2>{game.title}</h2>
        <p className="game-statement">{game.statement}</p>
        <p className="game-description">{game.description}</p>
        <div className="game-tags">
          {game.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="game-links">
          {game.demo && (
            <a
              className="primary-link"
              href={game.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play {game.title} <Arrow />
            </a>
          )}
          <a
            className="text-link"
            href={game.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon /> View source
          </a>
        </div>
      </div>
      {game.demo ? (
        <a
          className="game-feature-visual"
          href={game.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Play ${game.title} now`}
        >
          <img src={game.image} alt={game.imageAlt} />
          <span>
            Playable in the browser <Arrow />
          </span>
        </a>
      ) : (
        <div className="game-feature-visual">
          <img src={game.image} alt={game.imageAlt} />
          <span>In development — follow the source</span>
        </div>
      )}
    </article>
  );
}

export default function PlayPage() {
  return (
    <div className="page play-page">
      <section className="page-hero play-hero">
        <Eyebrow tone="#eeb647">Playable lab</Eyebrow>
        <h1>
          My games,
          <br />
          <em>built from scratch.</em>
        </h1>
        <div className="hero-side-copy">
          <p>
            Three games I designed and developed end to end — from the first
            interaction sketch to builds running in the browser. One is still on
            the workbench.
          </p>
          <span>No install. Pick a live one and play.</span>
        </div>
      </section>

      <section className="game-showcase">
        {playableGames.map((game, index) => (
          <GameFeature key={game.slug} game={game} reversed={index % 2 === 1} />
        ))}
      </section>
    </div>
  );
}
