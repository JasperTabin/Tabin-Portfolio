import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from "lucide-react";


export const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const fadeIn = {
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    };

    return (
        <section
            id="Skills"
            ref={ref}
            className="flex flex-col items-center justify-center py-12"
        >
            <div className="w-full max-w-4xl px-4 text-center">
                <motion.h2
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-4"
                    style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        background: "linear-gradient(90deg, var(--secondary), var(--tertiary))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    }}
                >
                    <svg height="2" width="40" className="sm:hidden" aria-hidden="true">
                        <line x1="0" y1="1" x2="40" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="1" />
                    </svg>
                    <svg height="2" width="80" className="hidden sm:inline" aria-hidden="true">
                        <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="1" />
                    </svg>
                    Skills
                    <svg height="2" width="40" className="sm:hidden" aria-hidden="true">
                        <line x1="0" y1="1" x2="40" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="1" />
                    </svg>
                    <svg height="2" width="80" className="hidden sm:inline" aria-hidden="true">
                        <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="1" />
                    </svg>
                </motion.h2>
            </div>
        </section>
    );
};