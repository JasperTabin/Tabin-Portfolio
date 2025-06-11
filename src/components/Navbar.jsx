import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext"; // Import the theme hook

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { isDark, toggleTheme } = useTheme(); // Use the theme context

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl px-4"
        >
          <div className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] light-border">
            <div className="flex justify-between items-center h-14 px-6 relative">
              <a
                href="#Welcome"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('Welcome');
                }}
                className="font-mono text-lg font-bold transition-colors duration-200"
                style={{ color: "var(--tertiary)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--secondary)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--tertiary)"}
              >
                JT
              </a>

              {/* Hamburger Menu - Centered on Mobile */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-5 cursor-pointer z-40 md:hidden transition-colors duration-200 flex items-center justify-center"
                onClick={() => setMenuOpen((prev) => !prev)}
                style={{ color: "var(--secondary)" }}
              >
                &#9776;
              </div>

              {/* Centered Navigation for Desktop */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-8">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                    className="transition-colors duration-200 text-sm font-bold"
                    style={{ color: "var(--tertiary)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--secondary)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--tertiary)"}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                    className="transition-colors duration-200 text-sm font-bold"
                    style={{ color: "var(--tertiary)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--secondary)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--tertiary)"}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('projects');
                    }}
                    className="transition-colors duration-200 text-sm font-bold"
                    style={{ color: "var(--tertiary)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--secondary)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--tertiary)"}
                  >
                    Projects
                  </a>
                </div>
              </div>

              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  background: "none",
                  color: "var(--tertiary)",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--secondary)";
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--tertiary)";
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseDown={e => {
                  e.currentTarget.style.cursor = "pointer";
                }}
                aria-label="Toggle dark mode"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: !isDark ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isDark ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};