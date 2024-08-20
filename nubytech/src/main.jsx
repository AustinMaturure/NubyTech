import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Oppurtunities from "./components/Oppurtunities.jsx";
import Projects from "./components/Projects.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <About />
    <Oppurtunities />
    <Projects />
    <Team />
    <Footer />
  </StrictMode>
);
