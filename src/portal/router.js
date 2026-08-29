import React, {useEffect, useState} from "react";

const normalize = path => {
  const clean = (path || "/").replace(/\/+$/, "");
  return clean || "/";
};

export function useRoute() {
  const [route, setRoute] = useState(normalize(window.location.pathname));

  useEffect(() => {
    const updateRoute = () => setRoute(normalize(window.location.pathname));
    window.addEventListener("popstate", updateRoute);
    return () => window.removeEventListener("popstate", updateRoute);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove("nav-open");
  }, [route]);

  return route;
}

export function navigate(path) {
  const next = normalize(path);
  if (next === normalize(window.location.pathname)) return;
  window.history.pushState({}, "", next);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function Link({to, children, className = "", onClick, ...props}) {
  const handleClick = event => {
    if (onClick) onClick(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
