import { useEffect, useState } from 'react';
import { MenuIcon, XIcon, SunIcon, MoonIcon, Home, User, Code, FolderOpen, BookOpen, Mail, GraduationCap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = Math.min(window.innerHeight, 800);
      setIsScrolled(window.scrollY > heroHeight * 0.8); 
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isScrolled) {
        setIsHovering(e.clientY <= 60);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isScrolled]);

  const isVisible = !isScrolled || (isScrolled && isHovering);

  const navLinks = [
    {
      name: 'Home',
      href: '#home',
      icon: Home
    }, 
    {
      name: 'About',
      href: '#about',
      icon: User
    }, 
    {
      name: 'Education',
      href: '#education',
      icon: GraduationCap
    },
    {
      name: 'Skills',
      href: '#skills',
      icon: Code
    }, 
    {
      name: 'Projects',
      href: '#projects',
      icon: FolderOpen
    }, 
    {
      name: 'Blog',
      href: '#blog',
      icon: BookOpen
    }, 
    {
      name: 'Contact',
      href: '#contact',
      icon: Mail
    }
  ];

  return (
    <>
      <div className="navbar-trigger" />
      <header className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 translate-y-2 md:translate-y-4' : 'opacity-0 -translate-y-full'}
          bg-white/20 dark:bg-gray-900/20 backdrop-blur-md shadow-lg
          rounded-full border border-gray-400/30 dark:border-gray-500/30
          w-auto max-w-40 md:max-w-lg mx-auto px-1 md:px-2`}>
        <div className="flex items-center justify-between px-2 py-1.5 md:px-4 md:py-3">

          <nav className="items-center hidden space-x-4 md:flex">
            {navLinks.map(link => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="p-1.5 text-gray-700 transition-all duration-300 rounded-full dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50 group"
                  title={link.name}
                >
                  <IconComponent size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
            <button 
              onClick={toggleTheme} 
              className="relative p-1.5 overflow-hidden text-gray-700 transition-all duration-300 rounded-full dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50 group" 
              aria-label="Toggle theme"
            >
              <div className="relative w-4 h-4">
                <SunIcon 
                  size={16} 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
                  }`} 
                />
                <MoonIcon 
                  size={16} 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                  }`} 
                />
              </div>
            </button>
          </nav>

          <div className="flex items-center justify-center w-full gap-1 md:hidden">
            <button 
              onClick={toggleTheme} 
              className="relative p-1 overflow-hidden text-gray-700 transition-all duration-300 rounded-full dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50 group" 
              aria-label="Toggle theme"
            >
              <div className="relative w-4 h-4">
                <SunIcon 
                  size={16} 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
                  }`} 
                />
                <MoonIcon 
                  size={16} 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                  }`} 
                />
              </div>
            </button>
            
            <button 
              className="relative p-1 overflow-hidden text-gray-700 transition-all duration-300 rounded-full dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50 group" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-4 h-4">
                <MenuIcon 
                  size={16} 
                  className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                    !isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
                  }`} 
                />
                <XIcon 
                  size={16} 
                  className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pb-2">
            <div className="grid grid-cols-3 gap-1 pt-1">
              {navLinks.filter(link => link.name !== 'Contact').map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 transform group ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms' 
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    title={link.name}
                  >
                    <IconComponent size={16} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
            
            <div className="flex justify-center pt-1">
              {(() => {
                const contactLink = navLinks.find(link => link.name === 'Contact');
                if (!contactLink) return null;
                const IconComponent = contactLink.icon;
                return (
                  <a 
                    href={contactLink.href} 
                    className={`flex items-center justify-center p-2 px-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 transform group ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${(navLinks.length - 1) * 40}ms` : '0ms' 
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    title={contactLink.name}
                  >
                    <IconComponent size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })()}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}