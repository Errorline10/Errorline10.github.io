import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./pages/home.page"
import { Projects } from "./pages/projects.page"

export function ClientRouter() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  );
}
