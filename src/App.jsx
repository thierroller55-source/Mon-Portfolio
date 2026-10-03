import { useState, useEffect, useRef } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = ['home', 'about', 'projects', 'journey', 'skills', 'certificates', 'contact'];

function App() {
  const autoScrollTimeoutRef = useRef(null);
  const currentSectionIndexRef = useRef(0);
  const isScrollBlockedRef = useRef(false);
  const unblockTimeoutRef = useRef(null);

  const scrollToNextSection = () => {
    if (isScrollBlockedRef.current) return;

    currentSectionIndexRef.current = (currentSectionIndexRef.current + 1) % SECTIONS.length;
    const nextSectionId = SECTIONS[currentSectionIndexRef.current];
    const element = document.getElementById(nextSectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    autoScrollTimeoutRef.current = setTimeout(scrollToNextSection, 3000);
  };

  const blockScrollForFiveMinutes = () => {
    isScrollBlockedRef.current = true;
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    if (unblockTimeoutRef.current) {
      clearTimeout(unblockTimeoutRef.current);
    }
    unblockTimeoutRef.current = setTimeout(() => {
      isScrollBlockedRef.current = false;
      autoScrollTimeoutRef.current = setTimeout(scrollToNextSection, 3000);
    }, 5 * 60 * 1000); // 5 minutes
  };

  useEffect(() => {
    autoScrollTimeoutRef.current = setTimeout(scrollToNextSection, 3000);

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
      if (unblockTimeoutRef.current) {
        clearTimeout(unblockTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleSectionClick = (e) => {
      blockScrollForFiveMinutes();
    };

    const attachSectionListeners = () => {
      SECTIONS.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.addEventListener('click', handleSectionClick);
        }
      });
    };

    const detachSectionListeners = () => {
      SECTIONS.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.removeEventListener('click', handleSectionClick);
        }
      });
    };

    attachSectionListeners();

    const observer = new MutationObserver(() => {
      detachSectionListeners();
      attachSectionListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      detachSectionListeners();
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
