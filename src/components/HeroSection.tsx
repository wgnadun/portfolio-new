import { Mail, Download, ChevronDown } from 'lucide-react';

const resume = '_CV.pdf';
const propic = '/profile.webp';

export default function HeroSection() {
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

        <div className="absolute z-10 transform -translate-x-1/2 bottom-4 sm:bottom-6 md:bottom-8 left-1/2">
          <a href="#about" className="flex flex-col items-center text-gray-600 transition-colors cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white animate-bounce">
            <span className="mb-1 text-xs sm:mb-2 sm:text-sm opacity-80">Scroll Down</span>
            <div className="flex items-start justify-center w-4 h-6 p-1 border-2 border-current rounded-full sm:w-6 sm:h-10">
              <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-current rounded-full animate-[bounce_1.5s_infinite]"></div>
            </div>
            <ChevronDown size={14} className="mt-0.5 sm:mt-1 animate-[bounce_2s_infinite] sm:w-5 sm:h-5" />
          </a>
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
        `}</style>
      </section>
    </>
  );
}