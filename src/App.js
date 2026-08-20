import React from "react";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

// App function
function App() {
  return (
    <div className="App">
      <main id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits>
      </main>
      <SidebarNav />
    </div>
  );
}

export default App;
