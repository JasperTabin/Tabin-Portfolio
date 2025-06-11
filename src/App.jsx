import { useState } from 'react'

import { ThemeProvider } from './components/ThemeContext'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Socials } from './components/Socials'

import { Welcome } from './components/welcome'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

import { BackToTop } from './components/BackToTop'


import './index.css' 

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Socials/>
        <Welcome/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/> 
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App

