import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// Avoid serving a stale portfolio shell after deployments. The portal relies on
// the host cache policy rather than a long-lived client-side service worker.
serviceWorker.unregister();
