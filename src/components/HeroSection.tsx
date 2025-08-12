import { Mail, Download, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const resume = 'Nadun Dananjaya_CV.pdf';
const propic = '/profile.webp';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      setIsVisible(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="home" className="relative flex items-center justify-center w-full min-h-screen px-4 transition-colors duration-300 bg-white sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="container flex items-center justify-center max-w-6xl min-h-screen py-16 mx-auto sm:py-20">
          <div className="grid items-center w-full gap-8 sm:gap-10 md:gap-12 md:grid-cols-2">
            <div className="order-2 pb-16 space-y-4 text-center sm:space-y-6 md:space-y-7 md:text-left md:order-1 sm:pb-12 md:pb-0">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 transition-colors duration-300 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                Hi, I'm{' '}
                <span className="text-gray-900 dark:text-white">
                  Nadun Dananjaya
                </span>
              </h1>
              <h2 className="text-lg font-medium leading-relaxed text-gray-700 transition-colors duration-300 sm:text-xl md:text-2xl dark:text-gray-300">
                Software Engineering Professional | Full Stack Developer
              </h2>
              <p className="max-w-lg mx-auto text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 md:mx-0 sm:text-base">
                I build accessible, user-friendly websites and applications with
                modern technologies. Passionate about creating digital experiences
                that make a difference.
              </p>
              <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start">
                <a href="#contact" className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-white transition-all duration-300 bg-gray-900 rounded-lg shadow-lg sm:px-6 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 sm:text-base">
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Get in touch</span>
                </a>
                <a href={resume} target="_blank" className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg sm:px-6 dark:bg-transparent dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-105 sm:text-base">
                  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-gray-400 dark:border-gray-500 animate-pulse group-hover:animate-[breathe_2s_ease-in-out_infinite] transition-all duration-300"></div>
                
                <div className="w-48 h-48 p-1 overflow-hidden transition-all duration-300 border-4 border-gray-200 rounded-full sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 dark:border-gray-700 group-hover:border-gray-500 dark:group-hover:border-gray-400">
                  <div className="w-full h-full overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800">
                    <img 
                      src={propic}
                      alt="Nadun Dananjaya" 
                      className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" 
                    />
                  </div>
                </div>
                
                <div className="absolute transition-all duration-500 rounded-full inset-2 bg-gray-200/50 dark:bg-gray-700/50 blur-xl -z-10 group-hover:bg-gray-300/70 dark:group-hover:bg-gray-600/70"></div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out ${
            isVisible 
              ? 'opacity-0 translate-y-full' 
              : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="flex justify-center px-4 mb-6 sm:px-6 md:px-8">
            <div className="relative max-w-xs overflow-hidden transition-all duration-500 border shadow-xl backdrop-blur-2xl bg-white/5 dark:bg-black/8 rounded-2xl border-white/10 dark:border-gray-700/20 group hover:bg-white/8 dark:hover:bg-black/12">
              
              <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-white/6 to-white/3 dark:from-gray-900/3 dark:via-gray-900/8 dark:to-gray-900/3"></div>
              
              <div className="absolute top-0 h-px left-3 right-3 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-gray-400/25"></div>
              
              <div className="relative z-10 flex items-center justify-center px-4 py-3 sm:px-5 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-xs font-light tracking-wider text-gray-700 uppercase dark:text-gray-300 opacity-90">
                      Scroll
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1 h-1 rounded-full bg-white/50 dark:bg-gray-400/50 animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40 dark:bg-gray-400/40 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1 h-1 rounded-full bg-white/30 dark:bg-gray-400/30 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-center w-6 h-6 transition-all border rounded-full bg-white/15 dark:bg-gray-800/20 backdrop-blur-sm border-white/20 dark:border-gray-600/25 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30 group-hover:scale-110 duration-400">
                      <ChevronDown size={12} className="text-gray-700 dark:text-gray-300 animate-float opacity-90" />
                    </div>
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-white/10 dark:bg-gray-800/15 blur-md animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-transparent via-white/8 to-transparent dark:via-gray-300/8 animate-sweep group-hover:opacity-100 duration-800"></div>
              
              <div className="absolute top-0 left-0 right-0 transition-opacity duration-500 opacity-50 h-1/2 bg-gradient-to-b from-white/10 to-transparent dark:from-gray-400/10 group-hover:opacity-70"></div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/8 to-white/8 dark:from-gray-700/8 dark:to-gray-700/8 blur-lg opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes breathe {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
          }
          
          @keyframes sweep {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-1px);
            }
          }
          
          .animate-sweep {
            animation: sweep 6s ease-in-out infinite;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}