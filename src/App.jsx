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

function App() {
  const { theme } = useThemeContext();
  return (
    <main className={theme ? "light" : "dark"}>
      <section className="bg-white dark:bg-black text-gray-900 dark:text-blue-700 h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </section>
    </main>
  );
}

export default App;
