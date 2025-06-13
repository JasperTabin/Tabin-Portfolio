import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const fadeIn = {
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    };
    
    const techStack = [
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg', color: '#F7DF1E' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg', color: '#3178C6' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg', color: '#1572B6' },
        { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg', color: '#61DAFB' },
        { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg', color: '#339933' },
        { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg', color: '#4479A1' },
        { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg', color: '#47A248' },
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg', color: '#F05032' },
        { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg', color: '#F24E1E' },
        { name: 'Vercel', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg', color: '#000000' },
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg', color: '#3776AB' },
        { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg', color: '#007ACC' },
    ];

    return (
        <section
            id="skills"
            ref={ref}
            className="flex flex-col items-center justify-center py-15 mb-80"
            style={{ backgroundColor: 'var(--primary)' }}
        >
            <div className="w-full max-w-4xl px-4 text-center">
                <motion.h2
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-4"
                    style={{
                        fontFamily: "'Signika Negative', sans-serif",
                        background: "linear-gradient(90deg, var(--secondary), var(--tertiary))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    }}
                >
                    <div className="flex items-center w-full justify-center gap-4">
                        <svg height="2" width="80" aria-hidden="true">
                            <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                        </svg>
                        <span>Stacks</span>
                        <svg height="2" width="80" aria-hidden="true">
                            <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                        </svg>
                    </div>
                </motion.h2>

                <motion.div
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.3 }}
                    className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] p-6 md:p-8 mt-4 text-left shadow-lg light-border flex items-center"
                >
                    <div className="overflow-hidden w-full flex justify-center">
                        <motion.div
                            className="flex gap-12 items-center"
                            animate={{ x: [-200, 200] }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ width: 'fit-content' }}
                        >
                            {[...techStack, ...techStack].map((tech, index) => (
                                <motion.div
                                    key={`icon-${index}`}
                                    className="flex-shrink-0 flex items-center justify-center transition-all duration-300 relative group cursor-pointer"
                                    style={{ width: '48px', height: '48px' }}
                                >
                                    {/* Icon - completely hidden on hover */}
                                    <div
                                        className="transition-opacity duration-200 group-hover:opacity-0 opacity-90"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: 'var(--secondary)',
                                            mask: `url(${tech.iconUrl}) no-repeat center / contain`,
                                            WebkitMask: `url(${tech.iconUrl}) no-repeat center / contain`
                                        }}
                                    />
                                    {/* Text box - shown on hover, replaces icon completely */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 rounded-2xl w-20 h-10 flex items-center justify-center px-2"
                                        style={{ backgroundColor: 'var(--secondary)' }}>
                                        <span 
                                            className="text-xs font-medium text-center leading-tight" 
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            {tech.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <motion.p
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.5 }}
                    className="mt-8 text-lg max-w-2xl mx-auto"
                    style={{ color: 'var(--tertiary)' }}
                >
                    Technologies and tools I work with to build modern web applications
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;