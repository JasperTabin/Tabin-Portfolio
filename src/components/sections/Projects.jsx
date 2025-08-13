import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import DesktopImage from "../../assets/Desktop.png";
import MobileImage from "../../assets/Mobile.png";
import DesktopImage1 from "../../assets/Desktop1.jpg";
import MobileImage1 from "../../assets/Mobile1.jpg";
import DesktopImage2 from "../../assets/Desktop2.png";
import MobileImage2 from "../../assets/Mobile2.jpg";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  const cardBaseStyles =
    "w-full max-w-4xl px-4 min-h-[400px] backdrop-blur-md rounded-2xl border p-6 md:p-8 light-border shadow-lg transition-all duration-300 hover:-translate-y-2 group cursor-pointer";
  const cardBorderColor =
    "border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.3)]";
  const cardBgColor =
    "bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)]";

  return (
    <section
      id="projects"
      ref={ref}
      className="flex flex-col items-center justify-center py-15"
    >
      <div className="w-full max-w-4xl px-4 text-center">
        {/* Heading */}
        <motion.h2
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-2 mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            background:
              "linear-gradient(90deg, var(--secondary), var(--tertiary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <div className="flex items-center justify-center gap-4 py-2">
            <svg height="2" width="80">
              <line
                x1="0"
                y1="1"
                x2="80"
                y2="1"
                stroke="var(--accent)"
                strokeWidth="2"
                opacity="0.6"
              />
            </svg>
            <span>Projects</span>
            <svg height="2" width="80">
              <line
                x1="0"
                y1="1"
                x2="80"
                y2="1"
                stroke="var(--accent)"
                strokeWidth="2"
                opacity="0.6"
              />
            </svg>
          </div>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--tertiary)" }}
        >
          Featured work that demonstrates my skills and experience.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col items-center gap-12 mt-12">
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className={`${cardBaseStyles} ${cardBgColor} ${cardBorderColor}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--secondary)" }}
              >
                01
              </span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/JasperTabin/Tabin-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    className="w-5 h-5 hover:opacity-70"
                    style={{ color: "var(--secondary)" }}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <ExternalLink
                    className="w-5 h-5 hover:opacity-70"
                    style={{ color: "var(--secondary)" }}
                  />
                </a>
              </div>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[25rem] bg-neutral-900 rounded-xl border border-neutral-700 shadow-xl overflow-hidden">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-600 rounded-full z-20" />
              <img
                src={DesktopImage}
                alt="Desktop View"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-[15px] right-4 z-30">
                <div className="w-[120px] h-[250px] bg-black rounded-[2rem] overflow-hidden border-4 border-neutral-800 shadow-2xl relative">
                  <img
                    src={MobileImage}
                    alt="Mobile View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-neutral-700 rounded" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full text-center px-4 mt-4 space-y-2">
              <h4
                className="text-2xl font-bold"
                style={{ color: "var(--secondary)" }}
              >
                Personal Portfolio
              </h4>
              <p className="text-base" style={{ color: "var(--tertiary)" }}>
                A modern and responsive personal portfolio website
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-2 py-1 rounded-full bg-[#61DBFB] text-black">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#38BDF8] text-black">
                  TailwindCSS
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#646CFF] text-black">
                  Vite
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#E34F26] text-black">
                  HTML
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#264DE4] text-black">
                  CSS
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#F7DF1E] text-black">
                  JavaScript
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center gap-12 mt-12">
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className={`${cardBaseStyles} ${cardBgColor} ${cardBorderColor}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--secondary)" }}
              >
                02
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.youtube.com/watch?v=FpUaKoGismA&ab_channel=JohnGabrielGerolia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink
                    className="w-5 h-5 hover:opacity-70"
                    style={{ color: "var(--secondary)" }}
                  />
                </a>
              </div>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[25rem] bg-neutral-900 rounded-xl border border-neutral-700 shadow-xl overflow-hidden">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-600 rounded-full z-20" />
              <img
                src={DesktopImage1}
                alt="Desktop View"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-[15px] right-4 z-30">
                <div className="w-[120px] h-[250px] bg-black rounded-[2rem] overflow-hidden border-4 border-neutral-800 shadow-2xl relative">
                  <img
                    src={MobileImage1}
                    alt="Mobile View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-neutral-700 rounded" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full text-center px-4 mt-4 space-y-2">
              <h4
                className="text-2xl font-bold"
                style={{ color: "var(--secondary)" }}
              >
                Capstone
              </h4>

              <p className="text-base" style={{ color: "var(--tertiary)" }}>
                IoT-Enabled Smart Water Quality Monitoring System
                For our Capstone, we built hardware with four sensors to monitor water quality 
                and developed a mobile app using MIT App Inventor and Google Firebase to display the data.             
              </p>
            </div>
          </motion.div>
        </div>
        
        {/*  */}
        <div className="flex flex-col items-center gap-12 mt-12">
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className={`${cardBaseStyles} ${cardBgColor} ${cardBorderColor}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--secondary)" }}
              >
                03
              </span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/JasperTabin/my-react-game/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    className="w-5 h-5 hover:opacity-70"
                    style={{ color: "var(--secondary)" }}
                  />
                </a>
                <a href="https://jaspertabin.github.io/my-react-game/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink
                    className="w-5 h-5 hover:opacity-70"
                    style={{ color: "var(--secondary)" }}
                  />
                </a>
              </div>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[25rem] bg-neutral-900 rounded-xl border border-neutral-700 shadow-xl overflow-hidden">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-600 rounded-full z-20" />
              <img
                src={DesktopImage2}
                alt="Desktop View"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-[15px] right-4 z-30">
                <div className="w-[120px] h-[250px] bg-black rounded-[2rem] overflow-hidden border-4 border-neutral-800 shadow-2xl relative">
                  <img
                    src={MobileImage2}
                    alt="Mobile View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-neutral-700 rounded" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full text-center px-4 mt-4 space-y-2">
              <h4
                className="text-2xl font-bold"
                style={{ color: "var(--secondary)" }}
              >
                Cat Maze Game
              </h4>
              <p className="text-base" style={{ color: "var(--tertiary)" }}>
                A simple maze game built with React, we built during our game dev subject.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-2 py-1 rounded-full bg-[#61DBFB] text-black">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#E34F26] text-black">
                  HTML
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#264DE4] text-black">
                  CSS
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#F7DF1E] text-black">
                  JavaScript
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
