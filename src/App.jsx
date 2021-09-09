import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { Error } from "./pages/404";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import "./utils.css";

function App() {
  return (
    <section className="dark">
      <main className="bg-white dark:bg-black text-gray-800 dark:text-gray-400 h-screen md:flex items-center justify-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </main>
    </section>
  );
}

export default App;
