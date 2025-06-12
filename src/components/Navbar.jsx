import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const { isDark, toggleTheme } = useTheme();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const navRefs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
    }),
    []
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.8);

      // Check if contact section is in view
      const contact = document.getElementById("contact");
      if (contact) {
        const rect = contact.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        if (isVisible) {
          if (activeSection !== "") setActiveSection("");
          return;
        }
      }

      // Check other sections
      const sections = ["home", "about", "skills", "projects"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionVisible =
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;

          if (sectionVisible) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
            return;
          }
        }
      }

      // No update if nothing matched
    };

    const timeoutId = setTimeout(() => {
      if (!window.location.hash) {
        handleScroll();
      }
    }, 300);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const el = navRefs[activeSection]?.current;
    const navbarBox = document.querySelector(".navbar-box");
    if (el && navbarBox) {
      const elRect = el.getBoundingClientRect();
      const boxRect = navbarBox.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - boxRect.left,
        width: elRect.width,
      });
    }
  }, [activeSection, showNavbar, navRefs]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      if (id === "home") {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        const navbarHeight = 80;
        const additionalOffset = 20;
        const totalOffset = navbarHeight + additionalOffset;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
      history.replaceState(null, null, `#${id}`);
      setActiveSection(id === "contact" ? "" : id);
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
          <div className="navbar-box relative backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] light-border overflow-hidden">
            <div className="flex justify-between items-center h-14 px-6 relative">
              <a
                href="#Welcome"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Welcome");
                }}
                className="font-mono text-lg font-bold transition-colors duration-200"
                style={{ color: "var(--tertiary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--secondary)") }
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--tertiary)") }
              >
                JT
              </a>

              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-5 cursor-pointer z-40 md:hidden transition-colors duration-200 flex items-center justify-center"
                onClick={() => setMenuOpen((prev) => !prev)}
                style={{ color: "var(--secondary)" }}
              >
                &#9776;
              </div>

              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-8">
                  {["home", "about", "skills", "projects"].map((section) => (
                    <a
                      key={section}
                      href={`#${section}`}
                      ref={navRefs[section]}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section);
                      }}
                      className="relative transition-colors duration-200 text-sm font-bold"
                      style={{
                        color:
                          activeSection === section
                            ? "var(--secondary)"
                            : "var(--tertiary)",
                        opacity: activeSection === "" ? 0.6 : 1,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--secondary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          activeSection === section
                            ? "var(--secondary)"
                            : "var(--tertiary)")
                      }
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  ))}
                </div>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  background: "none",
                  color: "var(--tertiary)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--tertiary)";
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

            {indicatorStyle.width > 0 && (
              <motion.div
                layout
                className="absolute rounded-full pointer-events-none"
                style={{
                  bottom: 0,
                  height: "1px",
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  backgroundColor: "var(--secondary)",
                  boxShadow: "0 0 8px var(--secondary), 0 0 16px var(--secondary)",
                }}
                animate={{
                  opacity: activeSection ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
