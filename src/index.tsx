/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { MetaProvider, Title } from "@solidjs/meta";

import "./index.css";
import Home from "./routes/home";
import NotFound from "./routes/notFound";

const root = document.getElementById("root");
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

render(() => (
  <>
    <MetaProvider>
      <Title>tha website</Title>
    </MetaProvider>

    <Router>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Router>
  </>
), root!);