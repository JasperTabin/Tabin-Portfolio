import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from 'lucide-react';

export const Socials = () => {
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get section elements
      const home = document.getElementById('home');
      // const about = document.getElementById('about');
      // const projects = document.getElementById('projects');
      const contact = document.getElementById('contact');
      const scrollY = window.scrollY + window.innerHeight / 2; // Middle of viewport

      // Get section positions
      const homeTop = home?.offsetTop ?? 0;
      // const aboutTop = about?.offsetTop ?? 0;
      // const projectsTop = projects?.offsetTop ?? 0;
      const contactTop = contact?.offsetTop ?? Number.MAX_SAFE_INTEGER;

      // Show socials ONLY if in home, about, or projects section
      if (
        scrollY >= homeTop &&
        scrollY < contactTop
      ) {
        setShowSocials(true);
      } else {
        setShowSocials(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case user reloads mid-page
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <AnimatePresence>
      {showSocials && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-40 hidden md:block"
        >
          <div
            className="backdrop-blur-md rounded-2xl px-3 py-4 border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] light-border"
          >
            <div className="flex flex-col items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jasper-tabin-1b8aaa348/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 p-2 rounded-lg"
                style={{ color: "var(--tertiary)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--secondary)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--tertiary)";
                  e.currentTarget.style.background = "transparent";
                }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Email */}
              <button
                onClick={handleContactClick}
                className="transition-all duration-200 p-2 rounded-lg"
                style={{ color: "var(--tertiary)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--secondary)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--tertiary)";
                  e.currentTarget.style.background = "transparent";
                }}
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" />
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/JasperTabin"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 p-2 rounded-lg"
                style={{ color: "var(--tertiary)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--secondary)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--tertiary)";
                  e.currentTarget.style.background = "transparent";
                }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};