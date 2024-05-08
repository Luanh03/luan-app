import * as React from 'react';
import Home from './containers/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './containers/Projects';
import Header from './containers/Header';
import Bio from './containers/Bio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={ <Home />} />
        <Route path={"/Bio"} element={ <Bio />} />
        <Route path={"/Header"} element={ <Header />} />
        <Route path={"/Projects"} element={ <Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
