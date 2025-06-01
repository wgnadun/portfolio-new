const aboutpic = '/about.webp';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 dark:bg-[#0c1323] min-h-screen">
      <div className="container mx-auto">
        <h2 className="mb-2 text-5xl font-bold text-center text-gray-900 dark:text-white">
          About Me
        </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-gray-600 rounded-full dark:bg-gray-400"></div>
        
        <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative overflow-hidden shadow-lg rounded-2xl">
              <img 
                src={aboutpic} 
                alt="About me" 
                className="w-full max-w-lg mx-auto h-[690px] object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
             Hello! I’m Nadun, a 3rd-year Software Engineering undergraduate at the University of Kelaniya. As a Full Stack Developer, I have a deep passion for both the frontend and backend of web development, which a llows me to create seamless, interactive user experiences and efficient, scalable server-side systems. Throughout my academic journey, I’ve gained experience working with a variety of technologies such as React, Node.js, MongoDB, and more, while also exploring areas like AI and machine learning. I love tackling complex problems and bringing creative solutions to life through code.
            </p>
            
            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 text-center transition-all duration-300 border bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-xl border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg">
                <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">3rd</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Year Student</div>
              </div>
              <div className="p-6 text-center transition-all duration-300 border bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 rounded-xl border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg">
                <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">Full</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Stack Dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}