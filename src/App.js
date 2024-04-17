import * as React from 'react';
import Home from './containers/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './containers/Projects';
import Skills from './containers/Skills';
import Header from './containers/Header';
import Bio from './containers/Bio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={ <Home />} />
        <Route path={"/"} element={ <Bio />} />
        <Route path={"/"} element={ <Header />} />
        <Route path={"/"} element={ <Projects />} />
        <Route path={"/"} element={ <Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
