import React, {useContext, useEffect, useMemo, useState} from "react";
import "./Project.scss";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const categories = [
  "All",
  "Apps",
  "Libraries",
  "Games",
  "Tools",
  "Experiments"
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M5 15 15 5M7 5h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.1 0 0 1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0C17 4.6 18 4.9 18 4.9c.6 1.5.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
  );
}

function ProjectCard({project}) {
  return (
    <a
      className="portal-project-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{"--project-accent": project.accent}}
      aria-label={`Open ${project.name} source code on GitHub`}
    >
      <div className="project-card-topline">
        <span className="project-index">{project.category}</span>
        <span className="project-arrow">
          <ArrowIcon />
        </span>
      </div>
      <div className="project-monogram" aria-hidden="true">
        {project.name.charAt(0)}
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-card-footer">
        <span>
          <i className="language-dot" />
          {project.language}
        </span>
        <span className="project-stats">
          {project.demo && <span>Live ↗</span>}
          {project.stars > 0 && <span>★ {project.stars}</span>}
          {project.forks > 0 && <span>⑂ {project.forks}</span>}
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState(openSource.projects);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${openSource.githubUsername}/repos?per_page=100`
    )
      .then(response =>
        response.ok ? response.json() : Promise.reject(response)
      )
      .then(repositories => {
        const repositoryMap = repositories.reduce((map, repository) => {
          map[repository.name.toLowerCase()] = repository;
          return map;
        }, {});
        setProjects(currentProjects =>
          currentProjects.map(project => {
            const repositoryName = project.url.split("/").pop().toLowerCase();
            const repository = repositoryMap[repositoryName];
            return repository
              ? {
                  ...project,
                  language: repository.language || project.language,
                  stars: repository.stargazers_count,
                  forks: repository.forks_count
                }
              : project;
          })
        );
      })
      .catch(() => {
        // The curated directory remains available when the GitHub API is unavailable.
      });
  }, []);

  const featured = projects.find(
    project => project.name === openSource.featuredProject
  );
  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter(project => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const searchableText = [
        project.name,
        project.description,
        project.language,
        ...project.tags
      ]
        .join(" ")
        .toLowerCase();
      return (
        project.name !== openSource.featuredProject &&
        matchesCategory &&
        searchableText.includes(normalizedQuery)
      );
    });
  }, [activeCategory, projects, query]);

  if (!openSource.display) return null;

  return (
    <section
      className={isDark ? "opensource-portal dark-portal" : "opensource-portal"}
      id="opensource"
    >
      <div className="portal-shell">
        <div className="portal-heading">
          <div>
            <p className="portal-eyebrow">
              <span /> Open source index
            </p>
            <h2>{openSource.title}</h2>
          </div>
          <p className="portal-intro">{openSource.subtitle}</p>
        </div>

        {featured && (
          <article className="featured-project">
            <div className="featured-copy">
              <div className="featured-label">
                <span>Featured project</span>
                <span>01</span>
              </div>
              <div>
                <p className="featured-kicker">Mission data, made visual.</p>
                <h3>{featured.name}</h3>
                <p className="featured-description">{featured.description}</p>
                <div className="featured-tags">
                  {featured.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="featured-actions">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon /> View source <ArrowIcon />
                </a>
                {featured.demo && (
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live project <ArrowIcon />
                  </a>
                )}
              </div>
            </div>
            <div className="featured-visual">
              <div className="visual-caption">
                <span>React / SpaceX API</span>
                <span>Launch explorer</span>
              </div>
              <img
                src={featured.image}
                alt="Space-X launch explorer interface"
              />
            </div>
          </article>
        )}

        <div className="project-explorer">
          <div className="explorer-heading">
            <div>
              <p className="portal-eyebrow">
                <span /> Project directory
              </p>
              <h3>Explore the collection</h3>
            </div>
            <label className="project-search">
              <span className="visually-hidden">Search projects</span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <path d="m13 13 4 4" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search projects or tech"
              />
            </label>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map(category => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <span>
                  {category === "All"
                    ? projects.length - 1
                    : projects.filter(
                        project =>
                          project.category === category &&
                          project.name !== openSource.featuredProject
                      ).length}
                </span>
              </button>
            ))}
          </div>
          <div className="portal-project-grid">
            {visibleProjects.map(project => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
          {visibleProjects.length === 0 && (
            <div className="project-empty">
              <p>No projects match that search yet.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
          <a
            className="all-projects-link"
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse every repository on GitHub <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
