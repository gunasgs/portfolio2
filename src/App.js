import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Project from "./Components/Project/Project";
import Resume from "./Components/Resume";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <section id="bg">
        <About />
        <Project />
        <Contact />

        <Footer />
      </section>
    </>
  );
}

export default App;
