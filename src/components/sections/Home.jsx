import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Hand } from "lucide-react"

export const Home = () => {
    const words = ['Stunning', 'Amazing', 'Attractive', 'Fantastic'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex(prev => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    const letterPaths = {
        J: ["M50 20 L50 80 Q50 100 30 100 Q10 100 10 85"],
        A: ["M20 100 L40 20", "M40 20 L60 100", "M30 65 L50 65"],
        S: ["M60 30 Q60 20 35 20 Q20 20 20 40 Q20 60 40 60 Q60 60 60 80 Q60 100 35 100 Q20 100 15 90"],
        P: ["M20 100 L20 20", "M20 20 L45 20 Q60 20 60 40 Q60 55 45 55 L20 55"],
        E: ["M20 100 L20 20", "M20 20 L55 20", "M20 60 L45 60", "M20 100 L55 100"],
        R: ["M20 100 L20 20", "M20 20 L45 20 Q60 20 60 40 Q60 55 45 55 L20 55", "M45 55 L60 100"]
    };

    const letters = ['J', 'A', 'S', 'P', 'E', 'R'];
    const gradients = [
        'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #d0d0d0 100%)',
        'linear-gradient(135deg, #f0f0f0 0%, #d0d0d0 50%, #a0a0a0 100%)',
        'linear-gradient(135deg, #d0d0d0 0%, #a0a0a0 50%, #707070 100%)',
        'linear-gradient(135deg, #a0a0a0 0%, #707070 50%, #404040 100%)'
    ];

    const fontStyle = { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" };

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            ref={ref}
        >
            <div className="text-center max-w-5xl relative z-10 px-6 md:px-12">
                {/* Improved greeting text */}
                <motion.p 
                    className="text-lg md:text-xl lg:text-2xl font-medium mb-6 tracking-wide"
                    style={{ ...fontStyle, color: "var(--secondary)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Hello I'm <Hand className="inline wave mr-2" />
                </motion.p>

                <div className="mb-8 flex justify-center">
                    <svg 
                        width="100%" 
                        height="120" 
                        viewBox="0 0 600 140" 
                        className="max-w-3xl drop-shadow-2xl"
                    >
                        {letters.map((letter, i) => (
                            <g key={letter} transform={`translate(${i * 90 + 20}, 20)`}>
                                {letterPaths[letter].map((path, j) => (
                                    <motion.path
                                        key={j}
                                        d={path}
                                        fill="none"
                                        stroke="var(--secondary)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeDasharray="1000"
                                        strokeDashoffset="1000"
                                        initial={{ strokeDashoffset: 1000, opacity: 0 }}
                                        animate={isInView ? { 
                                            strokeDashoffset: 0, 
                                            opacity: 1 
                                        } : { 
                                            strokeDashoffset: 1000, 
                                            opacity: 0 
                                        }}
                                        transition={{
                                            strokeDashoffset: { 
                                                duration: 2.5, 
                                                delay: 0.5 + i * 0.15 + j * 0.05, 
                                                ease: [0.25, 0.46, 0.45, 0.94] 
                                            },
                                            opacity: { 
                                                duration: 0.2, 
                                                delay: 0.5 + i * 0.15 + j * 0.05 
                                            }
                                        }}
                                        style={{ 
                                            filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.4)) drop-shadow(0 0 25px rgba(255,255,255,0.2))',
                                        }}
                                    />
                                ))}
                            </g>
                        ))}
                    </svg>
                </div>
                
                <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p 
                        className="font-medium text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
                        style={{ ...fontStyle, color: "var(--tertiary)" }}
                    >
                        A passionate front-end developer crafting{' '}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWordIndex}
                                className="font-semibold bg-clip-text text-transparent inline-block"
                                style={{ 
                                    backgroundImage: gradients[currentWordIndex],
                                    textShadow: '0 0 20px rgba(255,255,255,0.3)'
                                }}
                                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: [0.25, 0.46, 0.45, 0.94] 
                                }}
                            >
                                {words[currentWordIndex]}
                            </motion.span>
                        </AnimatePresence>
                        {' digital experiences'}
                    </p>
                    <p 
                        className="font-medium text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
                        style={{ ...fontStyle, color: "var(--tertiary)" }}
                    >
                        with modern{' '}
                        <span 
                            className="font-semibold relative"
                            style={{
                                color: "var(--secondary)",
                                textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                            }}
                        >
                            React
                        </span>
                        {' and innovative web technologies'}
                    </p>
                </motion.div>
            </div>
            
            {/* PARTICLES */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: "var(--secondary)",
                            opacity: 0.2
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div> */}
        </section>
    );
};

