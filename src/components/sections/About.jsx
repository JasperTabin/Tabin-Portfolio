import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProfileImg from '../../assets/Profile.jpg';
import { Download } from "lucide-react";
import ResumePDF from '../../assets/Resume_Tabin.pdf';

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const fadeIn = {
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'Resume_Tabin.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="flex flex-col items-center justify-center py-12" ref={ref}>
            <div className="w-full max-w-4xl px-4 text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-4"
                    style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        background: "linear-gradient(90deg, var(--secondary), var(--tertiary))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    }}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.1 }}
                >
                    <svg height="2" width="40" className="sm:hidden" aria-hidden="true">
                        <line x1="0" y1="1" x2="40" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                    </svg>
                    <svg height="2" width="80" className="hidden sm:inline" aria-hidden="true">
                        <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                    </svg>
                    About Me
                    <svg height="2" width="40" className="sm:hidden" aria-hidden="true">
                        <line x1="0" y1="1" x2="40" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                    </svg>
                    <svg height="2" width="80" className="hidden sm:inline" aria-hidden="true">
                        <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                    </svg>
                </motion.h2>

                <motion.div
                    className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] p-6 md:p-8 mt-4 text-left shadow-lg light-border flex flex-col md:flex-row gap-6 md:gap-5 items-center"
                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.2 }}
                >
                    <div className="w-42 h-42 md:w-70 md:h-100 rounded-xl overflow-hidden flex-shrink-0 bg-[rgba(255,255,255,0.07)] flex items-center justify-center">
                        <img src={ProfileImg} alt="Profile" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1">
                        <p className="text-base md:text-lg text-[var(--tertiary)] mb-4 text-justify">
                            Hello! I'm Jasper Tabin, An aspiring Web Developer. I have been continuously enhancing 
                            my skills and exploring various programming languages. 
                            <br/><br/>
                            My current tech stack includes <span style={{ color: 'var(--highlight)' }}>HTML, CSS, JavaScript, Vite JS, and Tailwind CSS</span>. 
                            I'm also expanding my skills by learning React and modern UI/UX design principles.
                            <br/><br/>
                            What drives me is the curiousity on building interactive and user-friendly web applications.
                        </p>
                        
                        <svg width="500" height="2" className="mb-6 max-w-full" aria-hidden="true">
                            <line x1="0" y1="1" x2="500" y2="1" stroke="var(--secondary)" strokeWidth="1" opacity="0.4" />
                        </svg>
                        
                        <button
                            className="px-6 py-3 bg-[var(--primary)] hover:bg-[rgba(255,255,255,0.2)] border rounded-lg text-[var(--secondary)] font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                            style={{ borderColor: 'var(--button-border)' }}
                            onClick={handleDownload}
                        >
                            Download Resume
                            <Download className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};