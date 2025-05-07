import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';  
import Contact from './components/Contact';    
import Footer from './components/Footer';
import BotpressChat from './components/BotpressChat';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />   
      <Contact />    
      <Footer/>
      <BotpressChat />
    </div>
  );
}

export default App;
