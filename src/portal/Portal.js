import React, {useEffect, useMemo, useState} from "react";
import {Link, navigate} from "./router";
import {portalSections} from "./data";

export function Arrow({direction = "up"}) {
  const path =
    direction === "right" ? "M4 10h12M12 6l4 4-4 4" : "M5 15 15 5M7 5h8v8";
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.1 0 0 1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0C17 4.6 18 4.9 18 4.9c.6 1.5.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
  );
}

export function Eyebrow({children, tone}) {
  return (
    <p className="eyebrow" style={tone ? {"--eyebrow": tone} : undefined}>
      <span /> {children}
    </p>
  );
}

function Header({route, theme, setTheme}) {
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKey = event => {
      const target = event.target;
      const typing =
        target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (
        (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
        (event.key === "/" && !typing)
      ) {
        event.preventDefault();
        setPaletteOpen(value => !value);
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPaletteOpen(false);
  }, [route]);

  const isActive = path =>
    route === path || (path !== "/" && route.startsWith(`${path}/`));
  const nav = [
    {path: "/work", label: "Work"},
    {path: "/open-source", label: "Open source"},
    {path: "/play", label: "Play"},
    {path: "/notes", label: "Notes"},
    {path: "/about", label: "About"}
  ];

  return (
    <>
      <header className="portal-header">
        <Link to="/" className="brand" aria-label="Saber Pourrahimi — home">
          <span className="brand-mark">SP</span>
          <span className="brand-name">Saber Pourrahimi</span>
        </Link>
        <nav
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {nav.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="palette-trigger"
            type="button"
            onClick={() => setPaletteOpen(true)}
            aria-label="Open quick navigation"
          >
            Jump <kbd>⌘ K</kbd>
          </button>
          <button
            className="theme-button"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "◐"}</span>
          </button>
          <button
            type="button"
            className={open ? "menu-toggle is-open" : "menu-toggle"}
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {paletteOpen && (
        <div
          className="command-layer"
          role="presentation"
          onMouseDown={() => setPaletteOpen(false)}
        >
          <div
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
            onMouseDown={event => event.stopPropagation()}
          >
            <div className="command-title">
              <span>Go somewhere interesting</span>
              <button
                type="button"
                onClick={() => setPaletteOpen(false)}
                aria-label="Close quick navigation"
              >
                Esc
              </button>
            </div>
            {[
              ...portalSections,
              {
                path: "/about",
                label: "About & contact",
                short: "About",
                count: "↗",
                color: "#9d7ee8"
              }
            ].map((item, index) => (
              <button
                type="button"
                className="command-item"
                key={item.path}
                onClick={() => navigate(item.path)}
              >
                <span className="command-number">0{index + 1}</span>
                <span>{item.label}</span>
                <span
                  className="command-count"
                  style={{background: item.color}}
                >
                  {item.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="portal-footer">
      <div className="footer-cta">
        <Eyebrow tone="#ff6f52">Open to thoughtful products</Eyebrow>
        <h2>
          Have a problem worth
          <br />
          making simpler?
        </h2>
        <a href="mailto:saber.pourrahimi.1999@gmail.com" className="round-link">
          Let&apos;s talk <Arrow />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {year} Saber Pourrahimi</span>
        <div>
          <a
            href="https://github.com/spr021"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saber-pourrahimi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:saber.pourrahimi.1999@gmail.com">Email</a>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export function PortalShell({route, children}) {
  const initialTheme = useMemo(() => {
    const stored = window.localStorage.getItem("portal-theme");
    if (stored) return stored;
    const colorPreference =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    return colorPreference && colorPreference.matches ? "dark" : "light";
  }, []);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portal-theme", theme);
  }, [theme]);

  return (
    <div className="personal-portal">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header route={route} theme={theme} setTheme={setTheme} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
