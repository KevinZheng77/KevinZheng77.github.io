import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import './scroll.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
