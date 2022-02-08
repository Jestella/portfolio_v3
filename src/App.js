import React, { Fragment } from "react";
import { Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Devlog from "./components/devlog/devlog.component";
import Contact from "./components/contact/contact.component";
import FixedItem from "./components/fixed-item/fixed-item.component";
import { DevlogPage } from "./components/pages/devlog-page/devlog-page.component";

import "./App.css";

const App = () => (
  // <Router>
  <Fragment>
    <Navbar />
    {/* <Route exact path="/" component={Home} /> */}
    <Home />
    <About />
    <Skills />
    <Projects />
    {/* <Routes>
        <Route exact path="/devlog" component={DevlogPage} />
      </Routes> */}
    <Devlog />

    <Contact />
    <Footer />
    <FixedItem />
  </Fragment>
  // </Router>
);

export default App;
