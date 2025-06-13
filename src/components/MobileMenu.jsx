export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-out
                        ${menuOpen 
                            ? "opacity-100 pointer-events-auto backdrop-blur-md" 
                            : "opacity-0 pointer-events-none"
                        }`}
            style={{ 
                backgroundColor: menuOpen ? 'var(--primary)' : 'transparent',
                backdropFilter: menuOpen ? 'blur(10px)' : 'none'
            }}
        >
            <button 
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 group transition-all duration-200 hover:scale-110 focus:outline-none"
                aria-label="Close menu"
            >
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="w-6 h-0.5 absolute transform rotate-45 transition-colors duration-200"
                        style={{ backgroundColor: 'var(--secondary)' }}></div>
                    <div className="w-6 h-0.5 absolute transform -rotate-45 transition-colors duration-200"
                        style={{ backgroundColor: 'var(--secondary)' }}></div>
                </div>
            </button>

            <nav className="flex flex-col items-center space-y-8">
                {menuItems.map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`relative text-4xl font-light tracking-wide transition-all duration-500 hover:scale-105 focus:outline-none group
                                ${menuOpen 
                                    ? "opacity-100 translate-y-0" 
                                    : "opacity-0 translate-y-8"
                                }`}
                        style={{ 
                            color: 'var(--secondary)',
                            fontFamily: "'Signika Negative', sans-serif",
                            transitionDelay: menuOpen ? `${index * 100}ms` : '0ms'
                        }}
                    >
                        {item.name}
                        
                        <div 
                            className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                            style={{ backgroundColor: 'var(--accent)' }}
                        ></div>
                        
                        <div 
                            className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                            style={{ backgroundColor: 'var(--accent)' }}
                        ></div>
                    </a>
                ))}
            </nav>
        </div>
    );
};