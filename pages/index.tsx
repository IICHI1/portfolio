import React from "react";
import type { NextPage } from "next";

import Header from "../components/Home/Header";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";
import Skills from "../components/About/Skills";
import Education from "../components/About/Education";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
    </React.Fragment>
  );
};

export default Home;
