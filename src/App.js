import React, {useEffect} from "react";
import "./App.scss";
import {openSourceProjects, workProjects, articles} from "./portal/data";
import PlayPage from "./portal/Games";
import {
  AboutPage,
  ArticlePage,
  HomePage,
  NotesPage,
  NotFoundPage,
  OpenSourceDetailPage,
  OpenSourcePage,
  WorkDetailPage,
  WorkPage
} from "./portal/pages";
import {PortalShell} from "./portal/Portal";
import {useRoute} from "./portal/router";

const defaultDescription =
  "Explore Saber Pourrahimi's product work, open-source projects, playable browser experiments, and frontend notes.";

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!value) {
    if (element) element.remove();
    return;
  }
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/meta\[(property|name)="([^"]+)"\]/);
    if (!match) return;
    element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function usePageMetadata(route) {
  useEffect(() => {
    let title = "Saber Pourrahimi | Frontend Engineer & Builder";
    let description = defaultDescription;
    let image = `${window.location.origin}/og.png`;

    if (route === "/work") {
      title = "Selected Product Work | Saber Pourrahimi";
      description =
        "Product case studies across reading, publishing, commerce, and operational frontend systems.";
    } else if (route.startsWith("/work/")) {
      const project = workProjects.find(
        item => item.slug === route.split("/")[2]
      );
      if (project) {
        title = `${project.title} Case Study | Saber Pourrahimi`;
        description = project.summary;
        image = project.image
          ? new URL(project.image, window.location.origin).toString()
          : "";
      }
    } else if (route === "/open-source") {
      title = "Open Source Project Index | Saber Pourrahimi";
      description =
        "Explore open-source apps, React libraries, games, developer tools, and experiments built by Saber Pourrahimi.";
    } else if (route.startsWith("/open-source/")) {
      const project = openSourceProjects.find(
        item => item.slug === route.split("/")[2]
      );
      if (project) {
        title = `${project.name} | Open Source by Saber Pourrahimi`;
        description = project.description;
        image = project.image
          ? new URL(project.image, window.location.origin).toString()
          : "";
      }
    } else if (route === "/play") {
      title = "Playable Lab | Saber Pourrahimi";
      description =
        "Play small browser games built to explore interaction, feedback, and rhythm.";
    } else if (route === "/notes") {
      title = "Frontend & Product Notes | Saber Pourrahimi";
      description =
        "Field notes about frontend systems, product decisions, playful interfaces, and making things clear.";
    } else if (route.startsWith("/notes/")) {
      const article = articles.find(item => item.slug === route.split("/")[2]);
      if (article) {
        title = `${article.title} | Saber Pourrahimi`;
        description = article.dek;
        image = "";
      }
    } else if (route === "/about") {
      title = "About & Contact | Saber Pourrahimi";
      description =
        "Meet Saber Pourrahimi, a frontend engineer building clear, responsive, and engaging digital products.";
    }

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="twitter:title"]', "content", title);
    setMeta('meta[property="twitter:description"]', "content", description);
    setMeta('meta[property="twitter:image"]', "content", image);
  }, [route]);
}

function RouteView({route}) {
  if (route === "/") return <HomePage />;
  if (route === "/work") return <WorkPage />;
  if (route.startsWith("/work/"))
    return <WorkDetailPage slug={route.split("/")[2]} />;
  if (route === "/open-source") return <OpenSourcePage />;
  if (route.startsWith("/open-source/"))
    return <OpenSourceDetailPage slug={route.split("/")[2]} />;
  if (route === "/play") return <PlayPage />;
  if (route === "/notes") return <NotesPage />;
  if (route.startsWith("/notes/"))
    return <ArticlePage slug={route.split("/")[2]} />;
  if (route === "/about") return <AboutPage />;
  return <NotFoundPage />;
}

function App() {
  const route = useRoute();
  usePageMetadata(route);

  return (
    <PortalShell route={route}>
      <RouteView route={route} />
    </PortalShell>
  );
}

export default App;
