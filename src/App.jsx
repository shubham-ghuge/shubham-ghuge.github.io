import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import "./utils.css";
import { useThemeContext } from "./contexts/themeProvider";
import { Details } from "./pages/projects/Details";

function App() {
  const { theme } = useThemeContext();
  return (
    <main className={theme ? "light" : "dark"}>
      <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-400 h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </section>
    </main>
  );
}

export default App;
