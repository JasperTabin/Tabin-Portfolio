import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ParticlesBackground } from '../components/ParticlesBackground';

export const Welcome = () => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [animationCycleDone, setAnimationCycleDone] = useState(false);
    const name = "PORTFOLIO";

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        if (!animationCycleDone) {
            const delay = isDeleting ? 100 : 150;

            const timer = setTimeout(() => {
                setCurrentLetterIndex((prev) => {
                    if (!isDeleting && prev < name.length) {
                        return prev + 1;
                    } else if (isDeleting && prev > 0) {
                        return prev - 1;
                    } else {
                        // Switch between typing and deleting
                        if (!isDeleting) {
                            setTimeout(() => setIsDeleting(true), 2000); 
                        } else {
                            setTimeout(() => {
                                setIsDeleting(false);
                                setAnimationCycleDone(false); 
                                setCurrentLetterIndex(0);
                            }, 1000);
                        }
                        return prev;
                    }
                });
            }, delay);

            return () => clearTimeout(timer);
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && animationCycleDone) {
                setAnimationCycleDone(false);
                setCurrentLetterIndex(0);
                setIsDeleting(false);
            }
        }, { threshold: 0.3 });

        const section = document.getElementById('Welcome');
        if (section) observer.observe(section);
        return () => section && observer.unobserve(section);
    }, [currentLetterIndex, isDeleting, animationCycleDone]);

    const fontStyle = { fontFamily: "'DM Sans', sans-serif" };
    const letterClass = "inline-block text-5xl md:text-7xl font-thin tracking-widest";
    const cursorClass = "inline-block text-5xl md:text-7xl font-thin";

    return (
        <section
            id="Welcome"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <ParticlesBackground />

            <div className="relative z-10 text-center">
                <div className="flex justify-center items-baseline mb-1">
                    {name.split('').map((letter, i) => (
                        <div key={i} className="inline-block relative">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: i < currentLetterIndex ? 1 : 0 }}
                                transition={{ duration: 0.1, ease: "easeOut" }}
                                className={letterClass}
                                style={{ ...fontStyle, color: "var(--secondary)" }}
                            >
                                {letter}
                            </motion.span>
                            {i === currentLetterIndex - 1 && !animationCycleDone && (
                                <motion.div
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                                    className={`${cursorClass} absolute`}
                                    style={{ ...fontStyle, color: "var(--tertiary)", left: '100%' }}
                                >
                                    |
                                </motion.div>
                            )}
                        </div>
                    ))}
                    {animationCycleDone && (
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                            className={`${cursorClass} ml-1`}
                            style={{ ...fontStyle, color: "var(--tertiary)" }}
                        >
                            |
                        </motion.span>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                    <p
                        className="text-lg md:text-xl font-light tracking-wide"
                        style={{ ...fontStyle, color: "var(--tertiary)" }}
                    >
                        Aspiring Front-End Web Developer
                    </p>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                        className="h-px mt-2 mx-auto max-w-xs"
                        style={{
                            background: "linear-gradient(to right, transparent, var(--secondary) 50%, transparent)"
                        }}
                    />
                </motion.div>
            </div>

            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ color: "var(--tertiary)" }}
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-sm mb-2 font-thin" style={fontStyle}>Scroll down to see more</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
            
            {/* Corder Design */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{ background: "var(--tertiary)", opacity: 0.05 }}
                />
                <motion.div 
                    className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
                    animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    style={{ background: "var(--tertiary)", opacity: 0.05 }}
                />
            </div>
        </section>
    );
};
