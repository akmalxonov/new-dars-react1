import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero'
import Works from './components/howItWorks';
import Features from './components/features';
import Projects from './components/projects';
import Analysis from './components/analysis';
import Team from './components/team';
import Support from './components/support';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Works />
      <Features/>   
      <Projects />
      <Analysis/>
      <Team/>
      <Support/>
    </div>
  );
}

export default App;
