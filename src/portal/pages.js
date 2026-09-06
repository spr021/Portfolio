import React, {useEffect, useMemo, useState} from "react";
import {
  articles,
  openSourceProjects,
  portalSections,
  workProjects
} from "./data";
import {Arrow, Eyebrow, GithubIcon} from "./Portal";
import {Link, navigate} from "./router";

function useLocalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Berlin",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }).format(new Date())
      );
    };
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

export function HomePage() {
  const time = useLocalClock();
  const featured = openSourceProjects[0];

  const surprise = () => {
    const choices = [
      "/open-source/clicker",
      "/play",
      "/notes/interfaces-that-explain-themselves",
      "/work/taaghche-reader"
    ];
    navigate(choices[Math.floor(Math.random() * choices.length)]);
  };

  return (
    <div className="page home-page">
      <section className="home-hero">
        <div className="availability-line">
          <span className="availability-dot" />
          <span>Frontend engineer in the Berlin</span>
          <span className="local-time">BER {time}</span>
        </div>
        <div className="hero-title-wrap">
          <p className="hero-index">Portfolio / 2026</p>
          <h1>
            I build digital
            <br />
            things people <br /><em>want</em>
            <br />
            to explore.
          </h1>
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-core">SP</span>
            <span className="orbit-ring ring-one" />
            <span className="orbit-ring ring-two" />
            <span className="orbit-dot" />
          </div>
        </div>
        <div className="hero-bottom">
          <p>
            I&apos;m Saber Pourrahimi an engineer who turns product ideas into
            clear, responsive, and slightly unexpected web experiences.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="primary-link">
              Explore selected work <Arrow />
            </Link>
            <button type="button" onClick={surprise}>
              Surprise me <span>↝</span>
            </button>
          </div>
        </div>
        <div className="scroll-note">
          <span /> Scroll to enter the portal
        </div>
      </section>

      <section className="portal-map">
        <div className="map-heading">
          <Eyebrow>Choose a direction</Eyebrow>
          <h2>
            One person.
            <br />
            Many entry points.
          </h2>
          <p>
            Follow the thread that interests you. Every path leads to the work,
            the thinking, or something you can touch.
          </p>
        </div>
        <div className="map-grid">
          {portalSections.map((section, index) => (
            <Link
              key={section.path}
              to={section.path}
              className="map-card"
              style={{"--section-color": section.color}}
            >
              <span className="map-number">0{index + 1}</span>
              <span className="map-count">
                {String(section.count).padStart(2, "0")}
              </span>
              <h3>{section.label}</h3>
              <p>
                {section.path === "/work"
                  ? "Shipped products and the problems behind them."
                  : section.path === "/open-source"
                  ? "Apps, libraries, tools, and experiments in public."
                  : section.path === "/play"
                  ? "Browser-sized games made for immediate interaction."
                  : "Field notes on products, code, and making things clear."}
              </p>
              <span className="map-arrow">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-feature">
        <div className="feature-visual">
          <img src={featured.image} alt="Space-X mission explorer interface" />
          <div className="feature-visual-meta">
            <span>Featured / Open source</span>
            <span>React + API</span>
          </div>
        </div>
        <div className="feature-copy">
          <Eyebrow tone={featured.accent}>Project in focus</Eyebrow>
          <span className="feature-number">{featured.number}</span>
          <h2>{featured.name}</h2>
          <p className="feature-statement">{featured.statement}</p>
          <p>{featured.description}</p>
          <Link to={`/open-source/${featured.slug}`} className="text-link">
            See how it works <Arrow direction="right" />
          </Link>
        </div>
      </section>

      <section className="home-note">
        <p className="note-mark">“</p>
        <blockquote>
          Good frontend work sits where systems, stories, and small human
          decisions meet.
        </blockquote>
        <Link to="/about">
          More about how I work <Arrow />
        </Link>
      </section>
    </div>
  );
}

const sourceCategories = [
  "All",
  "Apps",
  "Libraries",
  "Games",
  "Tools",
  "Experiments"
];

function SourceCard({project}) {
  return (
    <Link
      to={`/open-source/${project.slug}`}
      className="source-card"
      style={{"--project-accent": project.accent}}
    >
      <div className="source-card-top">
        <span>
          {project.number} / {project.category}
        </span>
        <span className="circle-arrow">
          <Arrow />
        </span>
      </div>
      <div className="source-monogram">{project.name.charAt(0)}</div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="source-tags">
        {project.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="source-card-bottom">
        <span>
          <i />
          {project.language}
        </span>
        <span>{project.status}</span>
      </div>
    </Link>
  );
}

export function OpenSourcePage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const featured = openSourceProjects[0];
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return openSourceProjects.slice(1).filter(project => {
      const categoryMatch = category === "All" || project.category === category;
      const text = [
        project.name,
        project.description,
        project.language,
        ...project.tags
      ]
        .join(" ")
        .toLowerCase();
      return categoryMatch && text.includes(needle);
    });
  }, [category, query]);

  return (
    <div className="page source-page">
      <section className="page-hero source-hero">
        <Eyebrow tone="#5865f2">Open source index</Eyebrow>
        <h1>
          Where the
          <br />
          <em>work lives.</em>
        </h1>
        <div className="hero-side-copy">
          <p>
            Web products, React libraries, games, developer tools, and
            experiments—built in public and open to curiosity.
          </p>
          <a
            href="https://github.com/spr021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon /> @spr021 on GitHub <Arrow />
          </a>
        </div>
      </section>

      <section className="source-featured">
        <div className="source-feature-copy">
          <div className="feature-label">
            <span>Featured project</span>
            <span>{featured.number}</span>
          </div>
          <div>
            <p>{featured.statement}</p>
            <h2>{featured.name}</h2>
            <div className="featured-tags">
              {featured.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="featured-links">
            <Link to={`/open-source/${featured.slug}`}>
              Read the story <Arrow />
            </Link>
            {featured.demo && (
              <a href={featured.demo} target="_blank" rel="noopener noreferrer">
                Launch project <Arrow />
              </a>
            )}
          </div>
        </div>
        <div className="source-feature-image">
          <img src={featured.image} alt="Space-X launch explorer" />
          <span>Launch explorer / React</span>
        </div>
      </section>

      <section className="source-directory">
        <div className="directory-title">
          <div>
            <Eyebrow>Project directory</Eyebrow>
            <h2>Explore the collection</h2>
          </div>
          <label className="source-search">
            <span className="sr-only">Search projects</span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="8" cy="8" r="5.5" />
              <path d="m12.5 12.5 4.5 4.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search project or tech"
            />
          </label>
        </div>
        <div
          className="source-filters"
          role="group"
          aria-label="Filter projects"
        >
          {sourceCategories.map(item => (
            <button
              key={item}
              type="button"
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
              <span>
                {item === "All"
                  ? openSourceProjects.length - 1
                  : openSourceProjects
                      .slice(1)
                      .filter(project => project.category === item).length}
              </span>
            </button>
          ))}
        </div>
        {visible.length > 0 ? (
          <div className="source-grid">
            {visible.map(project => (
              <SourceCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No project matches that route yet.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Reset the directory
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export function OpenSourceDetailPage({slug}) {
  const project = openSourceProjects.find(item => item.slug === slug);
  if (!project) return <NotFoundPage />;
  const index = openSourceProjects.indexOf(project);
  const next = openSourceProjects[(index + 1) % openSourceProjects.length];
  return (
    <div
      className="page detail-page source-detail"
      style={{"--detail-accent": project.accent}}
    >
      <section className="detail-hero">
        <Link to="/open-source" className="back-link">
          ← Open source index
        </Link>
        <div className="detail-title">
          <div>
            <Eyebrow tone={project.accent}>
              {project.category} / {project.year}
            </Eyebrow>
            <h1>{project.name}</h1>
          </div>
          <span className="detail-number">{project.number}</span>
        </div>
        <p className="detail-lead">{project.statement}</p>
        <div className="detail-meta">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>
          <div>
            <span>Built with</span>
            <strong>{project.tags.join(" · ")}</strong>
          </div>
        </div>
      </section>
      <section className="detail-showcase">
        {project.image ? (
          <img src={project.image} alt={`${project.name} interface`} />
        ) : (
          <div className="detail-monogram">
            <span>{project.name.charAt(0)}</span>
            <small>{project.language} / open source</small>
          </div>
        )}
      </section>
      <section className="detail-story">
        <aside>
          <Eyebrow>The story</Eyebrow>
          <p>{project.description}</p>
        </aside>
        <div className="story-sections">
          <article>
            <span>01</span>
            <div>
              <h2>The challenge</h2>
              <p>{project.challenge}</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>The approach</h2>
              <p>{project.approach}</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>The outcome</h2>
              <p>{project.outcome}</p>
            </div>
          </article>
        </div>
      </section>
      <section className="detail-highlights">
        {project.highlights.map((highlight, itemIndex) => (
          <div key={highlight}>
            <span>0{itemIndex + 1}</span>
            <p>{highlight}</p>
          </div>
        ))}
      </section>
      <section className="detail-actions">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <GithubIcon /> View source <Arrow />
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Open live project <Arrow />
          </a>
        )}
      </section>
      <Link
        to={`/open-source/${next.slug}`}
        className="next-project"
        style={{"--next-color": next.accent}}
      >
        <span>Next project / {next.number}</span>
        <strong>{next.name}</strong>
        <Arrow />
      </Link>
    </div>
  );
}

export function WorkPage() {
  return (
    <div className="page work-page">
      <section className="page-hero work-hero">
        <Eyebrow tone="#ff6f52">Selected product work</Eyebrow>
        <h1>
          Built for the
          <br />
          <em>real world.</em>
        </h1>
        <div className="hero-side-copy">
          <p>
            A selection of commerce, publishing, and operational products—where
            frontend decisions meet real users and real constraints.
          </p>
          <span>Frontend / Product / Systems</span>
        </div>
      </section>
      <section className="work-index">
        {workProjects.map(project => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            className="work-row"
            style={{"--work-color": project.color}}
          >
            <span className="work-number">{project.number}</span>
            <div className="work-thumb">
              <img src={project.image} alt="" />
            </div>
            <div className="work-row-title">
              <h2>{project.title}</h2>
              <p>{project.headline}</p>
            </div>
            <div className="work-row-meta">
              <span>{project.type}</span>
              <span>{project.timeframe}</span>
            </div>
            <span className="work-arrow">
              <Arrow />
            </span>
          </Link>
        ))}
      </section>
      <section className="work-principles">
        <Eyebrow>What carries across projects</Eyebrow>
        <div className="principle-grid">
          <div>
            <span>01</span>
            <h3>Make complexity legible.</h3>
            <p>
              Turn product rules and data states into a hierarchy people can
              follow.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Build the system, not just the screen.</h3>
            <p>Reusable patterns keep teams fast and experiences consistent.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Stay close to the outcome.</h3>
            <p>
              Implementation is strongest when it remains connected to the
              user’s task.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function WorkDetailPage({slug}) {
  const project = workProjects.find(item => item.slug === slug);
  if (!project) return <NotFoundPage />;
  const index = workProjects.indexOf(project);
  const next = workProjects[(index + 1) % workProjects.length];
  return (
    <div
      className="page detail-page work-detail"
      style={{"--detail-accent": project.color}}
    >
      <section className="detail-hero">
        <Link to="/work" className="back-link">
          ← Selected work
        </Link>
        <div className="detail-title">
          <div>
            <Eyebrow tone={project.color}>
              {project.type} / {project.timeframe}
            </Eyebrow>
            <h1>{project.title}</h1>
          </div>
          <span className="detail-number">{project.number}</span>
        </div>
        <p className="detail-lead">{project.headline}</p>
        <div className="detail-meta">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>{project.responsibilities.join(" · ")}</strong>
          </div>
        </div>
      </section>
      <section className="detail-showcase work-showcase">
        <div className="work-logo-stage">
          <img src={project.image} alt={`${project.title} logo`} />
          <span>{project.type}</span>
        </div>
      </section>
      <section className="detail-story">
        <aside>
          <Eyebrow>Project context</Eyebrow>
          <p>{project.summary}</p>
        </aside>
        <div className="story-sections">
          <article>
            <span>01</span>
            <div>
              <h2>The challenge</h2>
              <p>{project.challenge}</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>The work</h2>
              <p>{project.solution}</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>The result</h2>
              <p>{project.result}</p>
            </div>
          </article>
        </div>
      </section>
      <section className="detail-highlights">
        {project.responsibilities.map((item, itemIndex) => (
          <div key={item}>
            <span>0{itemIndex + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </section>
      {project.website && (
        <section className="detail-actions">
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            Visit product <Arrow />
          </a>
        </section>
      )}
      <Link
        to={`/work/${next.slug}`}
        className="next-project"
        style={{"--next-color": next.color}}
      >
        <span>Next case / {next.number}</span>
        <strong>{next.title}</strong>
        <Arrow />
      </Link>
    </div>
  );
}

export function NotesPage() {
  const [category, setCategory] = useState("All notes");
  const categories = [
    "All notes",
    ...Array.from(new Set(articles.map(article => article.category)))
  ];
  const visible =
    category === "All notes"
      ? articles
      : articles.filter(article => article.category === category);
  return (
    <div className="page notes-page">
      <section className="page-hero notes-hero">
        <Eyebrow tone="#3faa8c">Notes from the workbench</Eyebrow>
        <h1>
          Ideas worth
          <br />
          <em>keeping.</em>
        </h1>
        <div className="hero-side-copy">
          <p>
            Short field notes on frontend systems, product decisions, playful
            interfaces, and what I learn while making things.
          </p>
          <span>Written slowly. Read quickly.</span>
        </div>
      </section>
      <section className="notes-index">
        <div className="note-filters" role="group" aria-label="Filter notes">
          {categories.map(item => (
            <button
              key={item}
              type="button"
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="notes-list">
          {visible.map(article => (
            <Link
              key={article.slug}
              to={`/notes/${article.slug}`}
              className="note-row"
              style={{"--note-color": article.color}}
            >
              <span className="note-number">{article.number}</span>
              <div className="note-category">{article.category}</div>
              <div className="note-title">
                <h2>{article.title}</h2>
                <p>{article.dek}</p>
              </div>
              <div className="note-meta">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <span className="note-arrow">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ArticlePage({slug}) {
  const article = articles.find(item => item.slug === slug);
  if (!article) return <NotFoundPage />;
  const index = articles.indexOf(article);
  const next = articles[(index + 1) % articles.length];
  return (
    <div
      className="page article-page"
      style={{"--article-color": article.color}}
    >
      <header className="article-header">
        <Link to="/notes" className="back-link">
          ← All notes
        </Link>
        <Eyebrow tone={article.color}>{article.category}</Eyebrow>
        <h1>{article.title}</h1>
        <p>{article.dek}</p>
        <div>
          <span>{article.date}</span>
          <span>{article.readTime} read</span>
        </div>
      </header>
      <article className="article-body">
        <p className="article-intro">{article.intro}</p>
        {article.sections.map((section, sectionIndex) => (
          <section key={section.heading}>
            <span>0{sectionIndex + 1}</span>
            <div>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          </section>
        ))}
        <div className="article-signoff">
          <span>SP</span>
          <p>
            Written by Saber Pourrahimi
            <br />
            Frontend engineer & open-source builder
          </p>
        </div>
      </article>
      <Link
        to={`/notes/${next.slug}`}
        className="next-project"
        style={{"--next-color": next.color}}
      >
        <span>Read next / {next.readTime}</span>
        <strong>{next.title}</strong>
        <Arrow />
      </Link>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <Eyebrow tone="#9d7ee8">About Saber</Eyebrow>
        <h1>
          Engineer by trade.
          <br />
          <em>Explorer by default.</em>
        </h1>
        <div className="about-intro">
          <p>
            I&apos;m a frontend engineer based in the Netherlands. I care about
            the full distance between an idea and the moment someone confidently
            uses it.
          </p>
          <p>
            My work spans product interfaces, design systems, open-source tools,
            and small experiments that make the browser feel a little more
            alive.
          </p>
        </div>
      </section>
      <section className="about-manifesto">
        <span className="manifesto-number">01 / Approach</span>
        <blockquote>
          “Build the useful thing.
          <br />
          Then make it feel inevitable.”
        </blockquote>
        <div className="manifesto-notes">
          <p>I like complex products with clear outcomes.</p>
          <p>
            I prototype early, name the system, and keep the user&apos;s next
            decision visible.
          </p>
        </div>
      </section>
      <section className="about-timeline">
        <div>
          <Eyebrow>Journey so far</Eyebrow>
          <h2>A path through products and systems.</h2>
        </div>
        <ol>
          <li>
            <span>2022 — 2023</span>
            <div>
              <h3>Frontend Developer · Taaghche</h3>
              <p>
                Web product ownership with Next.js across reading and publisher
                experiences.
              </p>
            </div>
          </li>
          <li>
            <span>2020 — 2021</span>
            <div>
              <h3>Frontend Developer · Hadish Sabz</h3>
              <p>
                React and TypeScript systems for comprehensive internal sales
                workflows.
              </p>
            </div>
          </li>
          <li>
            <span>2017 — 2021</span>
            <div>
              <h3>BSc · Amirkabir University</h3>
              <p>
                Electrical Engineering—and the analytical foundation behind how
                I approach systems.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section className="about-toolbox">
        <Eyebrow>Current toolbox</Eyebrow>
        <div>
          {[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "React Native",
            "Redux",
            "Sass",
            "Firebase",
            "Design systems",
            "Product thinking"
          ].map((tool, index) => (
            <span key={tool}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {tool}
            </span>
          ))}
        </div>
      </section>
      <section className="contact-card" id="contact">
        <div>
          <Eyebrow tone="#ff6f52">Start a conversation</Eyebrow>
          <h2>Let&apos;s make the next useful thing.</h2>
          <p>
            Product idea, frontend problem, open-source thought, or just a good
            hello—my inbox is open.
          </p>
        </div>
        <a href="mailto:saber.pourrahimi.1999@gmail.com">
          saber.pourrahimi.1999
          <br />
          @gmail.com <Arrow />
        </a>
      </section>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="page not-found">
      <span>404 / Lost route</span>
      <h1>
        This path left
        <br />
        the portal.
      </h1>
      <p>The good news: every interesting direction is still one step away.</p>
      <Link to="/">
        Return to the map <Arrow />
      </Link>
    </div>
  );
}
