import React, { useState, useLayoutEffect } from 'react';
import Navbar from './componentes/Navbar';
import './style/style.css'
import Header from './componentes/Header';
import Competence from './componentes/Competence';
import BackImage from './componentes/BackImage';
import CV from './componentes/CV';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


function App() {
  const [, height] = useWindowSize();
  return (
    <>
      <BackImage height={height} />
      <div className="App">
        <Navbar height={height} />
      </div>
      <header>
        <Header />
      </header>
      <section id='competence' style={{ marginTop: height }}>
        <Competence />
      </section>
      <section id='cv'>
        <CV />
      </section>
    </>
  );
}

export default App;
