import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, ExternalLink, Github } from "lucide-react";

export const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const fadeIn = {
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    };
    
    return (
        <section 
            id="projects" 
            className="flex flex-col items-center justify-center py-15 " 
            ref={ref}
        >
            
            {/* Section Header */}
            <div className="w-full max-w-4xl px-4 text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold flex flex-col items-center justify-center gap-2 mb-6"
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
                    <div className="flex items-center w-full justify-center gap-4 py-2">
                        <svg height="2" width="80" aria-hidden="true">
                            <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                        </svg>
                        <span>Projects</span>
                        <svg height="2" width="80" aria-hidden="true">
                            <line x1="0" y1="1" x2="80" y2="1" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />
                        </svg>
                    </div>
                </motion.h2>
            
                {/* Section Description */}
                <motion.p
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.5 }}
                    className="text-lg max-w-2xl mx-auto"
                    style={{ color: 'var(--tertiary)' }}
                >
                    Featured work that demonstrates my skills and experience.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    
                    <motion.div
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.3 }}
                        className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] p-6 md:p-8 light-border text-left shadow-lg hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--secondary)' }}>
                                01
                            </span>
                            <div className="flex gap-2 transition-opacity duration-300">
                                <Github className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                                <ExternalLink className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                            </div>
                        </div>

                        <div className="w-full h-64 rounded-xl mb-8 overflow-hidden relative flex flex-col justify-end p-6" 
                            style={{ 
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                                border: '1px solid rgba(249, 246, 238, 0.1)'
                            }}>
                            
                            <div className="pt-3 mt-4" >
                                <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--secondary)' }}>One Blog</h4>
                                <p className="text-sm" style={{ color: 'var(--tertiary)' }}>A simple full-stack blog</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Portfolio Website Project Card */}
                    <motion.div
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.4 }}
                        className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] p-6 md:p-8 light-border text-left shadow-lg hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--secondary)' }}>
                                02
                            </span>
                            <div className="flex gap-2 transition-opacity duration-300">
                                <Github className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                                <ExternalLink className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                            </div>
                        </div>

                        <div className="w-full h-64 rounded-xl mb-8 overflow-hidden relative flex flex-col justify-end p-6"
                            style={{ 
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                                border: '1px solid rgba(249, 246, 238, 0.1)'
                            }}>
                            
                            {/* Bottom info */}
                            <div className="pt-3 mt-4" >
                                <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--secondary)' }}>Portfolio Website</h4>
                                <p className="text-sm" style={{ color: 'var(--tertiary)' }}>Personal portfolio with modern design</p>
                            </div>
                        </div>
                    </motion.div>

                     <motion.div
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.3 }}
                        className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] p-6 md:p-8 light-border text-left shadow-lg hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--secondary)' }}>
                                03
                            </span>
                            <div className="flex gap-2 transition-opacity duration-300">
                                <Github className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                                <ExternalLink className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                            </div>
                        </div>

                        <div className="w-full h-64 rounded-xl mb-8 overflow-hidden relative flex flex-col justify-end p-6" 
                            style={{ 
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                                border: '1px solid rgba(249, 246, 238, 0.1)'
                            }}>
                            
                            <div className="pt-3 mt-4" >
                                <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--secondary)' }}>One Blog</h4>
                                <p className="text-sm" style={{ color: 'var(--tertiary)' }}>A simple full-stack blog</p>
                            </div>
                        </div>
                    </motion.div>

                     <motion.div
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.3 }}
                        className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] p-6 md:p-8 light-border text-left shadow-lg hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--secondary)' }}>
                                04
                            </span>
                            <div className="flex gap-2 transition-opacity duration-300">
                                <Github className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                                <ExternalLink className="w-5 h-5 hover:opacity-70 transition-opacity" style={{ color: 'var(--secondary)' }} />
                            </div>
                        </div>

                        <div className="w-full h-64 rounded-xl mb-8 overflow-hidden relative flex flex-col justify-end p-6" 
                            style={{ 
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                                border: '1px solid rgba(249, 246, 238, 0.1)'
                            }}>
                            
                            <div className="pt-3 mt-4" >
                                <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--secondary)' }}>One Blog</h4>
                                <p className="text-sm" style={{ color: 'var(--tertiary)' }}>A simple full-stack blog</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    ); 
};