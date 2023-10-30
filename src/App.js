import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import EnquiryForm from './components/forms/EnquiryForm.js';
import PagesNotFound from "./components/pages/PagesNotFound";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/enquiries" element={<EnquiryForm />} />
          <Route path="*" element={<PagesNotFound />} />
        </Routes>
      </main>
    </div>
  );
}
