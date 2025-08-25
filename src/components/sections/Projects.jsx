import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

import DesktopImage from "../../assets/Desktop.png";
import DesktopImage1 from "../../assets/Desktop1.jpg";
import DesktopImage2 from "../../assets/Desktop2.png";
import DesktopImage3 from "../../assets/Desktop3.jpg";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A modern and responsive personal portfolio website built with React and TailwindCSS",
    image: DesktopImage,
    github: "https://github.com/JasperTabin/Tabin-Portfolio",
    live: "",
    tech: ["React", "TailwindCSS", "Vite", "JavaScript"]
  },
  {
    id: 2,
    title: "IoT Water Quality Monitor",
    description: "Smart water quality monitoring system with hardware sensors and mobile app integration using MIT App Inventor and Firebase",
    image: DesktopImage1,
      github: "#", // add this
    live: "https://www.youtube.com/watch?v=FpUaKoGismA&ab_channel=JohnGabrielGerolia",
    tech: ["IoT", "Firebase", "MIT App Inventor", "Hardware"]
  },
  {
    id: 3,
    title: "Cat Maze Game",
    description: "Interactive maze game featuring smooth gameplay mechanics and responsive design",
    image: DesktopImage2,
    github: "https://github.com/JasperTabin/my-react-game/tree/main",
    live: "https://jaspertabin.github.io/my-react-game/",
    tech: ["React", "JavaScript", "CSS", "Game Logic"]
  },
  {
    id: 4,
    title: "LaboLinaw Urban Web",
    description: "Modern interior design showcase website with clean layouts and engaging visual presentation",
    image: DesktopImage3,
    github: "https://github.com/JasperTabin/LaboLinaw-Urban-Web?tab=readme-ov-file",
    live: "https://jaspertabin.github.io/LaboLinaw-Urban-Web/",
    tech: ["React", "CSS", "Responsive Design", "UI/UX"]
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className="group relative backdrop-blur-sm rounded-2xl
             bg-[rgba(255,255,255,0.02)]
             overflow-hidden transition-all duration-500"
  style={{
    border: "1px solid var(--button-border)",   // ✅ always uses the variable
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="p-3 backdrop-blur-sm rounded-full transition-colors 
                         bg-[rgba(var(--primary),0.1)] hover:bg-[rgba(var(--primary),0.2)]"
            >
              <Github className="w-5 h-5" style={{ color: 'var(--secondary)' }} />
            </motion.a>
          )}
          
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="p-3 backdrop-blur-sm rounded-full transition-colors 
                         bg-[rgba(var(--primary),0.1)] hover:bg-[rgba(var(--primary),0.2)]"
            >
              <ExternalLink className="w-5 h-5" style={{ color: 'var(--secondary)' }} />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 
            className="text-xl font-bold transition-colors group-hover:opacity-80"
            style={{ color: 'var(--secondary)' }}
          >
            {project.title}
          </h3>
        </div>
        
        <p 
          className="text-sm leading-relaxed opacity-70"
          style={{ color: 'var(--tertiary)' }}
        >
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 border rounded-md text-xs font-medium"
              style={{ 
                backgroundColor: 'rgba(var(--primary), 0.05)',
                borderColor: 'rgba(var(--primary), 0.1)',
                color: 'var(--tertiary)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      id="projects" 
      ref={ref}
      className="min-h-screen py-20 px-4"
      style={{ backgroundColor: 'var(--primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--secondary)' }}
          >
            Featured Projects
          </h2>
          
          <p 
            className="text-lg max-w-2xl mx-auto opacity-60"
            style={{ color: 'var(--tertiary)' }}
          >
            Explore my latest work spanning web development, IoT systems, and interactive experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
