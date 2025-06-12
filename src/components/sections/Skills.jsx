import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
    Code2, 
    Figma, 
    Atom, 
    Database, 
    GitBranch, 
    Triangle, 
    Palette,
} from 'lucide-react';

export const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const fadeIn = {
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    };
    
    const techStack = [
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript', icon: Code2 },
        { name: 'Figma', icon: Figma },
        { name: 'React', icon: Atom },
        { name: 'MySQL', icon: Database },
        { name: 'Git', icon: GitBranch },
        { name: 'Vercel', icon: Triangle },
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
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ width: 'fit-content' }}
                        >
                            {[...techStack, ...techStack, ...techStack].map((tech, index) => {
                                const IconComponent = tech.icon;
                                return (
                                    <motion.div
                                        key={`icon-${index}`}
                                        className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                                        whileHover={{ scale: 1.3, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <IconComponent 
                                            size={36} 
                                            style={{ color: 'var(--secondary)' }}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>
                                );
                            })}
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
