import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import useWindowSize from './hooks/useWindowSize';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Tools from './components/Tools';
import Footer from './components/Footer';

const App = () => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(0);
  const [width, height] = useWindowSize();

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} width={width} />
      <Route exact path="/" render={() => {
        return <Home />
      }} />

      <Route exact path="/tools" render={() => {
        return <Tools />
      }} />

      <Footer />
    </div>
  );
}

export default App;
